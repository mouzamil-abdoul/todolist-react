import React, { useState, useEffect } from "react";
import "./App.css";
//Import des composants
import Formulaire from "./components/Formulaire";
import TodoList from "./components/TodoList";

function App() {
  //useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("toutes");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Fonctions
  const filterHandler = () => {
    switch (status) {
      case "accomplies":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "inaccomplies":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //useEffect
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Sauvegarde dans localStorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(todos))
      );
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Mouzamil's ToDo List</h1>
      </header>
      <Formulaire
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
