import React, { useEffect, useState } from "react";
import { Container } from "../../styles";
import Form from "../../Form";
import axios from "../../axios";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.lenght === 0) return null;
    await axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
    console.log("addedTodo");
  };

  console.log(todos, "todos");
  return (
    <Container>
      <h2>List of Todos</h2>
      {/* Form Component */}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/* TodoList */}
      {/* Key */}
      {/* Author Component */}
    </Container>
  );
}

export default Todo;
