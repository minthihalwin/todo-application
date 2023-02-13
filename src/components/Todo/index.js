import React, { useState } from "react";
import { Container } from "../../styles";
import Form from "../../Form";

function Todo() {
  const [input, setInput] = useState("");
  return (
    <Container>
      <h2>List of Todos</h2>
      {/* Form Component */}
      <Form input={input} setInput={setInput} />
      {/* TodoList */}
      {/* Key */}
      {/* Author Component */}
    </Container>
  );
}

export default Todo;
