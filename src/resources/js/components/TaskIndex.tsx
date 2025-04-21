import React from "react";

type Task = {
    id: number;
    content: string;
    due_time: string;
    status: string;
    time:string;
};

type TaskIndexProps = {
    tasks: Task[];
    categories: { [id: string]: string};
    message?: string;
};


const TasksIndex: React.FC<TaskIndexProps> =({ tasks, categories, message }) => {
    const displayMessage = message || "メッセージがありません";
    return(
        <div className="md:container md:mx-auto py-2">
            <div className="row justify-center-center">
                <div className="col-md-12">
                    <div className="navbar bg-base-300 rounded-box">
                    <h3 className="ml-3 my-5 text-3xl font-bold">Focus</h3>
                        <div className="flex justify-end flex-1 px-2">
                            <div className="flex items-stretch">
                                <a href="/tasks/create" className="btn btn-primary mx-2">+タスク</a>
                                <div className="dropdown dropdown-end">
                                    <button className="btn btn-error mx-2">カテゴリー</button>
                                    <a href="/messages" className="btn btn-accent mx-2">LINEに送る</a>
                                    <a href="/welcome" className="btn btn-orange mx-2">Slackに送る</a>
                                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        {Object.entries(categories).map(([id, name]: [string, string]) => (
                                            <li key={id}>
                                                <a href={`?category_id=${id}`}>{name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* messageがnullまたはundefinedのときにデフォルトメッセージを表示 */}
                    <div className="alert alert-success">{displayMessage}</div>
                    
                    <div className="mt-4 mb-4">
                        <p className="mx-2">{tasks.length}件が見つかりました。</p>
                    </div>

                    <div className="overflow-x-auto bg-info">
                        <table className="table w-full my-2 tex-center">
                            <thead>
                                <tr>
                                    <th className="id"></th>
                                    <th className="content">内容</th>
                                    <th className="due_time">期限</th>
                                    <th className="status">状態</th>
                                    <th className="time">h : m</th>
                                    <th className="icon">Edit</th>
                                    <th className="icon">delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => (
                                    <tr key={task.id}>
                                        <td><li></li></td>
                                        <td>
                                            <a href ={`/tasks/${task.id}`}>{task.content}</a>
                                        </td>
                                        <td>{task.due_time.slice(0,10)}</td>
                                        <td>{task.status}</td>
                                        <td>{task.time.slice(0,5)}</td>
                                        <td>
                                            <a href ={`/tasks/${task.id}/edit`} className="btn btn-success">編集️</a>
                                        </td>
                                        <td>
                                            <form method="post" action={`/tasks/${task.id}`} onSubmit={ (e) => {
                                                if (!confirm('本当に削除しますか？')) e.preventDefault();
                                            }} id={`delete_${task.id}`}>
                                                <button type="submit" className="btn bg-secondary-focus">-タスク</button>
                                            </form>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center mb-5">
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TasksIndex;