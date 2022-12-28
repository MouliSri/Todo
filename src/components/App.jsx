import React from "react";
import { useState } from "react";
import List from "./list";

function App() {
  const [item, setItem] = useState("");
  const [val, setval] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleClick(event) {
    setval((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
    event.preventDefault();
  }
  function deleteItem(id) {
    setval((prevValues) => {
      return prevValues.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {val.map((it, index) => {
            return (
              <List key={index} id={index} value={it} onChecked={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
