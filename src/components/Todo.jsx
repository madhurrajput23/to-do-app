import "./todo.css";
import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoDate } from "./TodoDate.jsx";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleClearAllData = () => {
    setTask([]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    if (isEditing) {
      const updatedTasks = task.map((item, index) =>
        index === currentTaskIndex ? inputValue : item
      );
      setTask(updatedTasks);
      setIsEditing(false);
      setInputValue("");
      setCurrentTaskIndex(null);
    } else {
      if (task.includes(inputValue)) {
        setInputValue("");
        return;
      }
      setTask((prevTask) => [...prevTask, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (value) => {
    const updatedTasks = task.filter((currElem) => currElem !== value);
    setTask(updatedTasks);
  };

  const handleEditTask = (index) => {
    setInputValue(task[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo list App</h1>
        <TodoDate />
      </header>
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleFormSubmit={handleFormSubmit}
        isEditing={isEditing}
      />
      <section className="myUnOrdList">
        <ul>
          {task.map((currElem, index) => {
            return (
              <TodoList
                key={index}
                index={index}
                data={currElem}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button
          className="clear-btn"
          style={{ marginTop: "5px" }}
          onClick={handleClearAllData}
        >
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
