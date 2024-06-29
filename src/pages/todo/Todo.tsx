import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";
import React from "react";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl my-10 font-semibold">My Todos</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
