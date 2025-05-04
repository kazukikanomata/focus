import React, { useEffect, useMemo, useState } from 'react';

const TaskModal = ({ isOpen, onClose, mode, categories, task, onEdit }) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const [content, setContent] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [status, setStatus] = useState('未');
  const [time, setTime] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const categoryList = Object.entries(categories).map(([id, name]) => ({
    id: String(id),
    name,
  }));

  useEffect(() => {
    if (mode === 'edit' && task) {
      // 編集ページの場合、既存タスク内容を設定
      setContent(task.content);
      setDueTime(task.due_time.slice(0, 10));
      setStatus(task.status);
      setTime(task.time);
      setCategoryId(String(task?.category_id ?? ''));
    } else if (mode === 'show') {
      // 詳細ページでは表示のみで、編集不可
      setContent(task?.content || ''); // 詳細ページでもタスクがなければ空白
      setDueTime(task?.due_time.slice(0, 10) || '');
      setStatus(task?.status || '未');
      setTime(task?.time || '');
      setCategoryId(task?.category_id);
    } else {
      // 新規作成の場合、空白に設定
      setContent('');
      setDueTime('');
      setStatus('未');
      setTime('');
      setCategoryId('');
    }
  }, [mode, task]);

  const getActionUrl = useMemo(() => {
    switch (mode) {
      case 'create':
        return '/tasks';
      case 'edit':
      case 'show':
        return `/tasks/${task?.id ?? ''}`;
      default:
        return '/tasks';
    }
  }, [mode]);

  const getTitle = useMemo(() => {
    switch (mode) {
      case 'create':
        return 'Add Task';
      case 'edit':
        return 'Edit Task';
      case 'show':
        return 'Detail Task';
      default:
        return 'task';
    }
  }, [mode, task]);

  const getButtonName = useMemo(() => {
    switch (mode) {
      case 'create':
        return '送信';
      case 'show':
        return '編集';
      case 'edit':
        return '更新';
    }
  }, [mode]);

  return (
    <>
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-title">
            <h2 className="card-title">{getTitle}</h2>
            <br />
          </div>

          <form action={getActionUrl} method="POST">
            {mode === 'edit' && <input type="hidden" name="_method" value="PUT" />}

            <fieldset className="fieldset">
              <legend class="fieldset-legend">what's your task?</legend>
              <textarea
                placeholder="内容"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                disabled={mode === 'show'} //詳細ページでは編集不可
              ></textarea>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">when is your task date?</legend>
              <input
                type="date"
                className="input w-full mb-2"
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                disabled={mode === 'show'}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">How's your task staus?</legend>
              <select
                defaultValue="Pick a browser"
                className="select w-full mb-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                disabled={mode === 'show'}
              >
                <option value="未">未</option>
                <option value="進行中">進行中</option>
                <option value="完了">完了</option>
              </select>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">How long does your task finish?</legend>
              <input
                type="time"
                className="input w-full mb-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={mode === 'show'}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">What's your category?</legend>
              <select
                className="select w-full mb-2"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                disabled={mode === 'show'}
              >
                {categoryList.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </fieldset>

            <input type="hidden" name="_token" value={csrfToken} />

            <div className="flex flex-col gap-2  my-4">
              {/* showモードのときのみ編集ボタンだけ表示 */}
              <button
                type={mode === 'show' ? 'button' : 'submit'}
                className="btn btn-info md:btn-md w-full"
                onClick={(e) => {
                  if (mode === 'show') {
                    e.preventDefault(); // リロード防止
                    if (task) {
                      onEdit(task);
                    }
                  }
                }}
              >
                {mode === 'show' ? '編集' : getButtonName}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default TaskModal;
