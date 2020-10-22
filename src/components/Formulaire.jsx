import React from "react";

const Formulaire = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <form>
      <input onChange={inputTextHandler} type="text" />
      <button type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div>
        <select name="filtres" id="">
          <option value="tout">Toutes</option>
          <option value="accomplies">Accomplies</option>
          <option value="innaccomplies">Innaccomplies</option>
        </select>
      </div>
    </form>
  );
};

export default Formulaire;
