import React from 'react'

function Button() {
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  //추가버튼
  const clickAddButtonHandler = () => {
    const newTodoItem = {
      id: todos.length + 1,
      title,
      content: content,
      isDone: false,
    };

    setTodos([...todos, newTodoItem]);
  };

  //삭제버튼
  const clickRemoveButtonHandler = (id) => {
    const newWorking = todos.filter((working) => working.id !== id);
    setTodos(newWorking);
  };

  //완료후 삭제
  const clickReRemoveButtonHandler = (id) => {
    const newDone = todos.filter((done) => done.id !== id);
    setTodos(newDone);
  };

  // 완료취소버튼

  const clickCheckButtonHandler = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    
    
  )
}

export default Button