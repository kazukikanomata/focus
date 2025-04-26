import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskShow = ({ task }) => {
  const navigate = useNavigate();

  const clickBackButton = () => {
    navigate(-1);
  };

  console.log('TaskShow props', task);
  return (
    <>
      <div className="md:container md:mx-auto py-2">
        <div className="row justify-center-center mx-auto">
          <div className="col-md-10 mx-auto">
            <div className="card">
              <div className="card bg-base-100 w-96 shadow-sm">
                <p>内容</p>
                <p>{task.content}</p>
                <br />

                <p>期限</p>
                <p>{task.due_time?.slice(0, 10)}</p>
                <br />

                <p>状態</p>
                <p>{task.status}</p>
                <br />

                <p>H:M</p>
                <p>{task.time?.slice(0, 5)}</p>
                <br />

                <p>カテゴリー</p>
                <p>{task.category_id}</p>
                {/* TODO: ここはカテゴリーの名前が呼び出される */}
                <br />

                <form method="post" action={`/tasks/${task.id}`}>
                  {/* _methodを指定して擬似的にDELETEリクエストをする */}
                  <input type="hidden" name="_method" value="DELETE" />
                  <input
                    type="hidden"
                    name="_token"
                    value={document
                      .querySelector('meta[name="csrf-token"]')
                      .getAttribute('content')}
                  />
                  <button type="submit" className="btn btn-info my-2">
                    削除
                  </button>
                </form>
                <a href={`/tasks/${task.id}/edit`} className="btn btn-success">
                  編集
                </a>
                <br />
                <button type="button" onClick={clickBackButton} className="btn btn-secondary my-2">
                  戻る
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskShow;
