import "./todo.css";
import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

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

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    setDateTime(`${formattedDate} - ${formattedTime}`);
  }, 1000);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo list App</h1>
        <h2 className="date-time">{dateTime}</h2>
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
      <section className="myUnOrdList">
        <ul>
          {task.map((currElem, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{currElem}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn">
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
export default Todo;
