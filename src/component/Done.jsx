import React from 'react'

const Done = ({
  clickReRemoveButtonHandler,
  clickCheckButtonHandler,
  dones,
}) => {
  return (
    <div className="box">
    {dones.map(function (done) {
      return (
        <div className="todo-container" key={done.id}>
          <h3>{done.title}</h3>
          <p>{done.content}</p>
          <div className="button-set">
          <button className="button"
            onClick={() => {
              clickReRemoveButtonHandler(done.id);
            }}
          >
            삭제하기
          </button>
          <button className="button"
            onClick={() => {
              clickCheckButtonHandler(done.id);
            }}
          >
            취소
          </button>
          </div>
        </div>
      );
    })}
  </div>
  
  )
}

export default Done