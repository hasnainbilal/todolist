import React, {useState,useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
 
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filtertodos,setFilterTodos]=useState([]);

  useEffect(()=>{filterHandler()},[status,todos]);
 
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterTodos(todos.filter(todo=> todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo=> todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filtertodos={filtertodos}/>
    </div>
  );
}

export default App;
