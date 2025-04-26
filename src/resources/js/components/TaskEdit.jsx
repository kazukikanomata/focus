import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskEdit = ({ categories, task }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    content: task.content || '',
    due_time: task.due_time?.slice(0, 10) || '',
    status: task.status || '未',
    time: task.time?.slice(0, 5) || '',
    category_id: task.category_id || '',
  });

  const clickBackButton = () => {
    navigate(-1);
  };

  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  // categoriesをオブジェクトから配列に変換
  const categoryList = Object.entries(categories).map(([id, name]) => ({
    id,
    name,
  }));

  return (
    <>
      <div className="md:container md:mx-auto py-2">
        <div className="card w-96 bg-base-100 shadow-xl" style={{ width: '400px', margin: 'auto' }}>
          <div className="card-body">
            <h2 className="card-title">Task Content</h2>
            <br />

            <form action={`/tasks/${task.id}`} method="POST">
              <div className="form-group">
                <label htmlFor="content">タスクの内容</label>
                <textarea
                  name="content"
                  className="textarea textarea-primary form-control mb-2"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                ></textarea>
                <br />
              </div>
              <div className="form-group">
                <label htmlFor="due_time" className="my-2">
                  期限
                </label>
                <input
                  type="date"
                  name="due_time"
                  className="input input-bordered input-primary w-full max-w-xs mb-2"
                  value={formData.due_time}
                  onChange={(e) => setFormData({ ...formData, due_time: e.target.value })}
                />
                <br />
              </div>
              <div className="form-group">
                <label htmlFor="status">状態</label>
                <select
                  name="status"
                  className="select select-primary w-full max-w-xs form-control mb-2"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="未">未</option>
                  <option value="進行中">進行中</option>
                  <option value="完了">完了</option>
                </select>
                <br />
              </div>
              <div className="form-group">
                <label htmlFor="time">h:m</label>
                <br />
                <input
                  type="time"
                  name="time"
                  className="input input-bordered input-primary w-full max-w-xs mb-2"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <br />
                <select
                  name="category_id"
                  className="select select-primary w-full max-w-xs form-control mb-2"
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                >
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <input type="hidden" name="_token" value={csrfToken} />
              <div className="button my-2">
                <button type="submit" className="btn btn-primary">
                  更新
                </button>
                <button type="button" onClick={clickBackButton} className="btn btn-secondary my-2">
                  戻る
                </button>
              </div>
              <input type="hidden" name="_method" value="PUT" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskEdit;
