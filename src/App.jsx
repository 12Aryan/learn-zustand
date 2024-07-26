import React, { useState } from "react";
import { useCounter } from "./counterStore";

const App = () => {
  const count = useCounter((state) => state.count);
  const users = useCounter((state) => state.users);
  const addUser = useCounter((state) => state.addUser);
  const deleteUser = useCounter((state) => state.deleteUser);
  const updateUser = useCounter((state) => state.updateUser);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddUser = () => {
    if (input.trim()) {
      addUser(input);
      setInput("");
    }
  };

  const handleUpdateClick = (item, index) => {
    setEditId(index);
    setInput(item);
  };

  const handleUpdateUser = () => {
    if (input.trim()) {
      updateUser(input, editId);
      setInput("");
      setEditId(null);
    }
  };

  const handleDeleteUser = (index) => {
    deleteUser(index);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={input} />
      <button onClick={handleAddUser}>Add</button>
      <button onClick={handleUpdateUser} disabled={editId === null}>
        Update
      </button>
      {users.map((item, index) => (
        <div key={item + index} style={{ display: "flex", gap: "20px" }}>
          <div>{item}</div>
          <button onClick={() => handleDeleteUser(index)}>&times;</button>
          <button onClick={() => handleUpdateClick(item, index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default App;
