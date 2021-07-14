import { useState, useEffect } from "react";
import TodoFilters from "./TodoFilters";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  setTodos,
  filterTodo,
  filterStatus,
  setFilterStatus,
}) => {
  const [leftTodo, setLeftTodo] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed)
    setLeftTodo(unCompletedTodos.length)
  }, [todos])

  const noCompletedTodo = filterStatus === "completed" ? "completed task" : "task"

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
    setFilterStatus("all")
  }



  return (
    <>
      {/* todolist */}
      <section className="todo-list-section">
        {filterTodo.length < 1 ? (
          <p className='text'>There's no {noCompletedTodo}</p>
        ) :
          (
            <ul className="todo-list">
            {filterTodo.map((todo) => (
              <TodoItem todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
            ))}
          </ul>
          )
      }

        <div className="todo-filter-control">
          <div className="todo-left">{leftTodo} {leftTodo !==0 ? 'items' : 'item'} left</div>

          <div className="filter-control-desktop">
            <TodoFilters
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </div>

          <div className="todo-clear-complete">
            <button className="btn" onClick={clearCompletedTodos}>Clear completed</button>
          </div>
        </div>
      </section>

      {/* mobile filter */}
      <section className="filter-control-mobile">
        <TodoFilters
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </section>
    </>
  );
};

export default TodoList;
