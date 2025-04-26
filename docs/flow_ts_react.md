# React+TypeScript導入後のタスク一覧画面 表示処理フロー

このドキュメントでは、LaravelのBladeテンプレートからReact + TypeScriptへフロントエンドを移行した後の「タスク一覧画面（/tasks）」の処理の流れを整理します。

## 1. ルーティングとコントローラの処理

routes/web.php
```.php
Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
```

TaskController.php
```.php
public function index()
{
    $id = Auth::id();
    $tasks = Task::where('user_id', $id)->paginate(10);
    $categories = Category::pluck('name', 'id');

    return view('tasks.index', [
        'tasks' => json_encode($tasks),
        'categories' => json_encode($categories),
        'message' => session('message'),
    ]);
}
```

- ユーザーに紐づいたタスクを取得し、ペ時ネーション形式で`$tasks`に格納
- カテゴリー一覧を連想配列方式で`$categories`に格納
- セッションメッセージを渡す
- それらをJSON形式でBladeビューに渡す

## 2. BladeテンプレートからReactにデータ受け渡し

resources/views/tasks/index.blade.php

```.php
@viteReactRefresh
@vite(['resources/css/app.css', 'resources/js/pages/TasksIndexPage.tsx', 'resources/js/pages/TaskIndex.tsx'])
...
<div
    id="tasks-index"
    data-tasks="{{ $tasks }}"
    data-categories="{{ $categories }}"
    data-message="@json(session('message'))"
></div>
```

- JSONで渡した`tasks` ,`categories`, `message`を`<div>`のdata-*属性に埋め込み。
- ReactのエントリポイントからこのDOMを取得してデータを読み出す

## 3. Reactエントリポイントで初期データを取得

TasksIndexPage.tsx

```
const root = document.getElementById("tasks-index");

if (root) {
    const tasksRawStr = root.dataset.tasks || '{}';
    const categoriesStr = root.dataset.categories || '{}';
    const messageStr = root.dataset.message || '{}';

    const tasksRaw = JSON.parse(tasksRawStr);
    const categories = JSON.parse(categoriesStr);
    const message = JSON.parse(messageStr);

    const tasks = tasksRaw.data || [];

    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <TasksIndex
                tasks={tasks}
                categories={categories}
                message={message}
            />
        </React.StrictMode>
    );
}
```

- DOMから`data-*`属性を取得し、JSON.parseでオブジェクト化。
- `tasksRaw.data`を使って、ペジネーションの情報から実データ配列だけ抽出
- `TasksIndex`コンポーネントにpropsとして渡す。

## 4. TaskIndex.tsx コンポーネントで描画処理

TaskIndex.tsx（抜粋）

```
const TasksIndex: React.FC<TaskIndexProps> =({ tasks, categories, message }) => {
    return(
        <div>
            {message && (
                <div className="alert alert-success">{message}</div>
            )}

            <div>{tasks.length}件が見つかりました。</div>

            <table>
                <thead>...</thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.content}</td>
                            <td>{task.due_time.slice(0, 10)}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
```

- message が存在する場合のみメッセージ表示（nullやundefinedなら非表示）。
- タスクの件数と一覧を表示。