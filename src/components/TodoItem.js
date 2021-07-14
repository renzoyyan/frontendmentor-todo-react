import { useState } from "react";
import iconCheck from "../images/icon-check.svg";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [isComplete, setIsComplete] = useState(todo);

  const complete = isComplete.completed ? "completed" : "";
  const checkIcon = isComplete.completed ? (
    <img src={iconCheck} alt="Complete" />
  ) : (
    ""
  );

  const toggleCompleted = () => {
    setIsComplete({ ...isComplete, completed: !isComplete.completed });
    const updateTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );

    setTodos(updateTodos);
  };

  return (
    <li className={complete}>
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        className="input-checkbox"
        defaultChecked={isComplete.completed}
      />
      <label htmlFor={`todo-${todo.id}`}>Complete the Javascript course</label>
      <div className="checkbox-wrapper">
        <span className="checkbox" onClick={toggleCompleted}>
          {checkIcon}
        </span>
      </div>
      <p onClick={toggleCompleted}>{todo.content}</p>
    </li>
  );
};

export default TodoItem;
