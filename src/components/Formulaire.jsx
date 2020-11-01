import React from "react";

const Formulaire = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <button onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div>
        <select onChange={statusHandler} name="filtres" id="">
          <option value="toutes">Toutes</option>
          <option value="accomplies">Accomplies</option>
          <option value="inaccomplies">Inaccomplies</option>
        </select>
      </div>
    </form>
  );
};

export default Formulaire;
