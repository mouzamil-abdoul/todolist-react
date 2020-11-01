import React, { useState } from "react";
import "./App.css";
//Import des composants
import Formulaire from "./components/Formulaire";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Mouzamil's ToDo List {inputText}</h1>
      </header>
      <Formulaire
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
