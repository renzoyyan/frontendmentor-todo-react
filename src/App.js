import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./index.css";

const todosData = [
  {
    id: 1,
    content: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    content: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    content: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    content: "Read for 1 hour",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todosData);
  const [theme, setTheme] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState(todos);

  const changeTheme = theme ? "dark" : "light";

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilterTodo(todos.filter((todo) => !todo.completed));
          
        case "completed":
          return setFilterTodo(todos.filter((todo) => todo.completed));

        default:
          return setFilterTodo(todos);
      }
    };
    handleFilter();
  }, [todos, filterStatus]);

  return (
    <div className={`wrapper ${changeTheme}`}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <AddTodo todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filterTodo={filterTodo}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
      </div>
        <Footer />
    </div>
  );
}

export default App;
