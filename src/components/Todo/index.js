import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Form from "../../Form";
import axios from "../../axios";
import TodoList from "../TodoList";
import Key from "../Key";
import Author from "../Author";

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
    if (input.length === 0) return null;
    await axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
  };

  return (
    <Container>
      <h2>List of Todos</h2>
      {/* Form Component */}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/* TodoList */}
      <TodoList todos={todos} fetchData={fetchData} />
      {/* Key */}
      <Key />
      {/* Author Component */}
      <Author />
    </Container>
  );
}

export default Todo;
