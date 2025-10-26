import { useState, useEffect } from "react";
import AddToDo from "./AddToDo";
import EditToDo from "./EditToDo";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

let initialId = 1;
let initialTodos = [];

const ToDo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [editingTodoId, setEditingTodoId] = useState(null);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function addToDo(title) {
    setTodos([...todos, { id: initialId++, title: title, completed: false }]);
  }

  function handleEditToDo(id, newTitle) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle };
        }
        return todo;
      })
    );
    setEditingTodoId(null);
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeStatus(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <div>
        <AddToDo onAddToDo={addToDo} />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              <EditToDo todo={todo} onEditToDo={handleEditToDo} />
            ) : (
              <>
                <Checkbox onClick={() => changeStatus(todo.id)} />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {" "}
                  {todo.title}
                </span>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setEditingTodoId(todo.id);
                  }}
                >
                  edit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleDeleteTodo(todo.id);
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
