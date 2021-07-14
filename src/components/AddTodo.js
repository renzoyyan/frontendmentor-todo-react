import { useState } from "react";

const id = (array) => {
  const id = array.map((item) => item.id)
  return Math.max(...id) +1
}

const AddTodo = ({todos, setTodos}) => {
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo) {
      const newTodo = {
        id: id(todos),
        content: todo.trim(),
        completed: false
      }

      setTodos([ newTodo,...todos])
      setTodo('')
    }
  }

  return (
    // todoForm
    <div className="form-control">
      <div className="checkbox-wrapper">
        <span className="checkbox"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add Todo</label>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          className="todo-input"
          value={todo}
          placeholder="Create new todo..."
          onChange={handleChange}
        />

        <button id="submitNewTodo" type="submit">
            Add
        </button>
      </form>

    
    </div>
  );
};

export default AddTodo;
