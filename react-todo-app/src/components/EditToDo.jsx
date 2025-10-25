import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditToDo = ({ todo, onEditToDo }) => {
  const [title, setTitle] = useState(todo.title);
  const todoStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
  };
  return (
    <div style={todoStyles}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          onEditToDo(todo.id, title);
        }}
        disabled={title.length === 0 ? true : false}
      >
        Save
      </Button>
    </div>
  );
};

export default EditToDo;