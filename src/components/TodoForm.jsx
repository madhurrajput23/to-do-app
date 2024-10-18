import { useState } from "react";
export const TodoForm = ({
  inputValue,
  setInputValue,
  handleFormSubmit,
  isEditing,
}) => {
  const handleInputChange = (e) => {
    setInputValue(e);
  };

  return (
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
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </section>
  );
};
