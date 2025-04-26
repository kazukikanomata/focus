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
      <div className="md:container md:mx-auto py-2">
        <div className="card w-96 bg-base-100 shadow-xl" style={{ width: "400px", margin: "auto" }}>
          <div className="card-body">
            <h2 className="card-title">Add Task!!</h2>
            <br />

            <form action="/tasks" method="POST">
              <div className="form-group">
                <label htmlFor="content">タスクの内容</label>
                <textarea
                  className="textarea textarea-primary form-control mb-2"
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
                  className="input input-bordered input-primary w-full max-w-xs mb-2"
                />
                <br />
              </div>
              <div className="form-group">
                <label htmlFor="status">状態</label>
                <select
                  name="status"
                  className="select select-primary w-full max-w-xs form-control mb-2"
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
                  className="input input-bordered input-primary w-full max-w-xs mb-2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <br />
                <select
                  name="category_id"
                  className="select select-primary w-full max-w-xs form-control mb-2"
                >
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <input type='hidden' name='_token' value={csrfToken} />
              <div className="button my-2">
                <button type="submit" className="btn btn-primary">
                  送信
                </button>
                <button type="button" onClick={clickBackButton} className="btn btn-secondary my-2">
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
