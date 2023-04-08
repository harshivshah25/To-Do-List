import './App.css';
import React, { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "" && timeValue !== "") {
      setTodos([...todos, { task: inputValue, time: timeValue, completed: false }]);
      setInputValue("");
      setTimeValue("");
    }
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className="To-do" style={{ color: "#3be23b" }}>
        To-Do List
      </h1>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <input
          type="text"
          value={timeValue}
          onChange={handleTimeChange}
          placeholder="Add time for task"
        />
        <button className="button1" type="button" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span>
              {todo.task} - {todo.time}
            </span>
            {!todo.completed && (
              <button
                className="button2"
                type="button"
                onClick={() => handleCompleteTodo(index)}
                style={{ color: "#fff", backgroundColor: "Red" }}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
