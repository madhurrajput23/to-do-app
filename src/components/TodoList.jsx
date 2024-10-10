import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ index, data, handleDeleteTask }) => {
  
    return (
        <li key={index} className="todo-item">
        <span>{data}</span>
        <button className="check-btn">
          <MdCheck />
        </button>
        <button
          className="delete-btn"
          onClick={() => handleDeleteTask(data)}
        >
          <MdDeleteForever />
        </button>
      </li>
    );
}