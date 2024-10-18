import { MdEdit, MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ index, data, handleDeleteTask, handleEditTask }) => {
  return (
    <li key={index} className="todo-item">
      <span>{data}</span>
      <button className="check-btn" onClick={() => handleEditTask(index)}>
        <MdEdit />
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTask(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
