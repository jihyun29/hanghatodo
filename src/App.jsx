import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Input from "./component/Input";
import Working from "./component/Working";
import Done from "./component/Done";


const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "자바스크립트공부하기", content: "자바스트립트 강의 열심히 듣기", isDone: false },
    { id: 2, title: "리액트공부하기", content: "리액트 기초를 공부해봅시다.", isDone: true },
  ]);
  console.log(todos);

  const dones = todos.filter((todo) => todo.isDone);
  const workings = todos.filter((todo) => !todo.isDone);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  //추가버튼(+미입력시 알림창)
  const clickAddButtonHandler = () => {
    const newTodoItem = {
      id: todos.length + 1,
      title,
      content: content,
      isDone: false,
    };
 
  if (title === '' || content === '')
    alert('입력하세요')   
  else setTodos([...todos, newTodoItem]);       
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
    <div className="layout">
      <Header title="My Todo List  ₍ฅ >_< ฅ₎ " />
      <Input
        titleChangeHandler={titleChangeHandler}
        contentChangeHandler={contentChangeHandler}
        clickAddButtonHandler={clickAddButtonHandler}
        title={title}
        content={content}
      />
      <div className="cardroll">
        <h1>Working.. 🔥</h1>
        <Working
        clickRemoveButtonHandler={clickRemoveButtonHandler}
        clickCheckButtonHandler={clickCheckButtonHandler}
        workings={workings}/>
        
        <h1>Done.! 🎉</h1>
        <Done
        clickReRemoveButtonHandler={clickReRemoveButtonHandler}
        clickCheckButtonHandler={clickCheckButtonHandler}
        dones={dones}/>

      </div>
    </div>
  );
};

export default App;
