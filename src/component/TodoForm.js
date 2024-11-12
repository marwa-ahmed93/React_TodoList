import React, { useState } from "react";
import shortid from "shortid";
function TodoForm(props) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate() ,
      text: text ,
      complete: false
    });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className=" input-field  shadow-lg p-3 mb-5 bg-body rounded text-dark"
          type="text"
          onChange={handleChange}
          value={text}
        ></input>
        <button
          onClick={handleSubmit}
          className="btn btn-dark mx-2  shadow-lg p-3  bg-body rounded text-dark"
        >
          Add todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
