import React, { useEffect, useState } from 'react';
import TaskModal from './ui/TaskModal';
import TaskTable from './table/TaskTable';

type Task = {
  id: number;
  content: string;
  due_time: string;
  status: string;
  time: string;
  category_id: string;
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

  // 状態を追加しておく
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([]);

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

  useEffect(() => {
    if (selectedCategoryId) {
      const filtered = tasks.filter(
        (task) => String(task.category_id) === String(selectedCategoryId)
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [selectedCategoryId, tasks]);

  const handleCheckboxChange = (taskId: number, checked: boolean) => {
    setSelectedTaskIds((prev) =>
      checked ? [...prev, taskId] : prev.filter((id) => id !== taskId)
    );
  };

  return (
    <div className="md:container md:mx-auto py-2">
      <div className="row justify-center-center">
        <div className="col-md-12">
          <div className="navbar bg-base-300 rounded-box">
            <h3 className="ml-3 my-5 text-3xl font-bold">Focus</h3>
            <div className="flex justify-end items-center flex-1 gap-3 px-4 py-2">
              <button
                type="button"
                onClick={openCreateModal}
                className="btn btn-outline btn-warning"
              >
                <svg
                  className="h-8 w-8 text-orange-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                追加
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

              {/* TODO: LINEに送る */}
              {/* <button className="btn bg-[#03C755] text-white border-[#00b544]">
                <svg
                  aria-label="Line logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g fillRule="evenodd" strokeLinejoin="round" fill="white">
                    <path
                      fillRule="nonzero"
                      d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"
                    ></path>
                  </g>
                </svg>
                Send LINE
              </button> */}

              {/* TODO: Slackに送る機能 */}
              <button className="btn bg-[#622069] text-white border-[#591660]">
                <svg
                  aria-label="Slack logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g strokeLinecap="round" strokeWidth="78">
                    <path stroke="#36c5f0" d="m110 207h97m0-97h.1v-.1"></path>
                    <path stroke="#2eb67d" d="m305 110v97m97 0v.1h.1"></path>
                    <path stroke="#ecb22e" d="m402 305h-97m0 97h-.1v.1"></path>
                    <path stroke="#e01e5a" d="M110 305h.1v.1m97 0v97"></path>
                  </g>
                </svg>
                Send Slack
              </button>

              <form
                method="POST"
                action="/tasks/bulk-delete"
                onSubmit={(e) => {
                  if (!confirm('選択されたタスクを本当に削除しますか?')) {
                    e.preventDefault();
                  }

                  const input = document.getElementById('bulk-task-ids') as HTMLInputElement;

                  if (input) {
                    input.value = JSON.stringify(selectedTaskIds);
                  }
                }}
              >
                <input type="hidden" name="task_ids" id="bulk-task-ids" />
                <input
                  type="hidden"
                  name="_token"
                  value={
                    document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                  }
                />
                <button type="submit" className="btn btn-outline btn-error">
                  選択したタスクの削除
                </button>
              </form>
            </div>
          </div>

          <div className="mt-4 mb-4">
            <p className="mx-2">{filteredTasks.length}件が見つかりました。</p>
          </div>

          <TaskTable
            filteredTasks={filteredTasks}
            categories={categories}
            setSelectedCategoryId={setSelectedCategoryId}
            openShowModal={openShowModal}
            openEditModal={openEditModal}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
};
export default TasksIndex;
