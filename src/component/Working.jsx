const Working = ({
  clickRemoveButtonHandler,
  clickCheckButtonHandler,
  workings,

}) => {
  return (
    <div>
    {workings.map(function (working) {
      return (
        <div className="todo-container" key={working.id}>
         <h3>{working.title}</h3>
          <p>{working.content}</p>
          <div className="button-set">
          <button className="button"
            onClick={() => {
              clickRemoveButtonHandler(working.id);
            }}
          >
            삭제하기
          </button>
          <button className="button"
            onClick={() => {
              clickCheckButtonHandler(working.id);
            }}
          >
            완료
          </button>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Working