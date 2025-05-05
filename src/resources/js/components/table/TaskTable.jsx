import TaskCategoryDropdown from '../TaskCategoryDropdown';

const TaskTable = ({
  filteredTasks,
  categories,
  setSelectedCategoryId,
  openShowModal,
  openEditModal,
}) => {
  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table my-2 text-center">
          <thead>
            <tr>
              <th className="id"></th>
              <th className="content">内容</th>
              <th className="due_time">期限</th>
              <th className="">状態</th>
              <th className="time">目安時間</th>
              <th className="category">
                <TaskCategoryDropdown categories={categories} onSelect={setSelectedCategoryId} />
              </th>

              <th className="icon">Edit</th>
              <th className="icon">delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={task.id}>
                <td>
                  <li></li>
                </td>
                <td>
                  <button
                    className="link link-primary link-hover"
                    onClick={() => openShowModal(task)}
                  >
                    {task.content}
                  </button>
                </td>

                <td>{task.due_time.slice(0, 10)}</td>
                <td>{task.status}</td>
                <td>{task.time.slice(0, 5)}</td>
                <td>{categories[task.category_id] ?? '未設定'}</td>

                <td>
                  <button
                    onClick={() => openEditModal(task)}
                    className="btn btn-outline btn-success"
                  >
                    編集️
                  </button>
                </td>
                <td>
                  <form
                    method="post"
                    action={`/tasks/${task.id}`}
                    onSubmit={(e) => {
                      if (!confirm('本当に削除しますか？')) e.preventDefault();
                    }}
                    id={`delete_${task.id}`}
                  >
                    <button type="submit" className="btn btn-outline btn-error">
                      -タスク
                    </button>
                    <input type="hidden" name="_method" value="DELETE" />
                    <input
                      type="hidden"
                      name="_token"
                      value={
                        document
                          .querySelector('meta[name="csrf-token"]')
                          ?.getAttribute('content') || ''
                      }
                    />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TaskTable;
