const Input = ({
  titleChangeHandler,
  contentChangeHandler,
  clickAddButtonHandler,
  title,
  content,
}) => {
  return (
    <div className="add-form">
      <h3>제목:&nbsp;</h3>
      <input className="input-group" type="text" onChange={titleChangeHandler} value={title} />
      <h3>내용:&nbsp;</h3>
      <input className="input-group"type="text" onChange={contentChangeHandler} value={content} />
      <button className="button" onClick={clickAddButtonHandler}>추가하기</button>
    </div>
  );
};

export default Input;
