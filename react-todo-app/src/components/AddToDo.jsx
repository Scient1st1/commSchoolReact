import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddToDo = ({ onAddToDo }) => {
  const [title, setTitle] = useState("");
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
          onAddToDo(title);
          setTitle("");
        }}
        disabled={title.length === 0 ? true : false}
      >
        Add To Do
      </Button>
    </div>
  );
};

export default AddToDo;
