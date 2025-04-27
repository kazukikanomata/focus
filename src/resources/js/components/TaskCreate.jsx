import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskCreate = ({ categories }) => {
  const navigate = useNavigate();

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
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl" style={{ width: '400px', margin: 'auto' }}>
          <div className="card-body">
            <h2 className="card-title">Add Task!!</h2>
            <br />

            <form action="/tasks" method="POST">
              <div className="form-group">
                <label htmlFor="content">タスクの内容</label>
                <textarea
                  className="textarea textarea-primary form-control mb-2 w-full"
                  name="content"
                  placeholder="内容"
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
                  placeholder="いつまで？"
                  className="input input-bordered input-primary w-full mb-2"
                />
                <br />
              </div>

              <div className="form-group">
                <label htmlFor="status">状態</label>
                <select
                  name="status"
                  className="select select-primary w-full form-control mb-2"
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
                  placeholder="どれくらいかかる？"
                  className="input input-bordered input-primary w-full mb-2"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <br />
                <select
                  name="category_id"
                  className="select select-primary w-full form-control mb-2"
                >
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <input type="hidden" name="_token" value={csrfToken} />
              <div className="flex flex-col gap-2  my-4">
                <button type="submit" className="btn btn-primary w-full">
                  送信
                </button>
                <button type="button" onClick={clickBackButton} className="btn btn-secondary my-2 w-full">
                  戻る
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCreate;
