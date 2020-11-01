import React from "react";
//Import des composants
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
