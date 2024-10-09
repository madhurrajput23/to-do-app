import "./todo.css";
import { useState } from "react";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo list App</h1>
      </header>
      <section className="form">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
export default Todo;
