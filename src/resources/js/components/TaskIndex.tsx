import React, { useState } from 'react';
import TaskModal from '../components/TaskModal.jsx';

type Task = {
  id: number;
  content: string;
  due_time: string;
  status: string;
  time: string;
};

type TaskIndexProps = {
  tasks: Task[];
  categories: { [id: string]: string };
};

const TasksIndex: React.FC<TaskIndexProps> = ({ tasks, categories }) => {
  // Modalのスイッチ。初期値はfalseに
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'show'>('create');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const openCreateModal = () => {
    setModalMode('create');
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const openShowModal = (task: Task) => {
    setModalMode('show');
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const openEditModal = (task: Task) => {
    setModalMode('edit');
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="md:container md:mx-auto py-2">
      <div className="row justify-center-center">
        <div className="col-md-12">
          <div className="navbar bg-base-300 rounded-box">
            <h3 className="ml-3 my-5 text-3xl font-bold">Focus</h3>
            <div className="flex justify-end flex-1 px-2">
              <div className="flex items-stretch">
                <button type="button" onClick={openCreateModal} className="btn btn-primary mx-2">
                  +タスク
                </button>

                {/* モーダル */}
                {isModalOpen && (
                  <dialog id="my_modal_3" className="modal" open>
                    <div className="modal-box">
                      <form method="dialog">
                        <button
                          onClick={closeModal}
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                          ✕
                        </button>
                      </form>

                      {/* props経由でデータを渡す */}
                      <TaskModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        mode={modalMode}
                        task={selectedTask}
                        categories={categories}
                        onEdit={openEditModal}
                      />
                    </div>
                  </dialog>
                )}

                <div className="dropdown dropdown-end">
                  <button className="btn btn-error mx-2">カテゴリー</button>
                  <a href="/messages" className="btn btn-accent mx-2">
                    LINEに送る
                  </a>
                  <a href="/welcome" className="btn btn-orange mx-2">
                    Slackに送る
                  </a>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
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

          <div className="mt-4 mb-4">
            <p className="mx-2">{tasks.length}件が見つかりました。</p>
          </div>

          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table my-2 text-center">
              <thead>
                <tr>
                  <th className="id"></th>
                  <th className="content">内容</th>
                  <th className="due_time">期限</th>
                  <th className="">状態</th>
                  <th className="time">h : m</th>
                  <th className="icon">Edit</th>
                  <th className="icon">delete</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task, index) => (
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
                    <td>
                      <button onClick={() => openEditModal(task)} className="btn btn-success">
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
                        <button type="submit" className="btn btn-accent">
                          -タスク
                        </button>
                        <input type="hidden" name="_method" value="DELETE" />
                        <input
                          type="hidden"
                          name="_token"
                          value={document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute('content')}
                        />
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center mb-5"></div>
        </div>
      </div>
    </div>
  );
};
export default TasksIndex;
