import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "../ui/button";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Filter
        </Button>
      </div>
      <div className="bg-primary-gradient p-[5px] w-full p-5 h-full rounded-md">
        <div className="bg-white p-5 w-full space-y-3 rounded-lg h-full first-line:">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
        {/* <div className="bg-white p-5 flex justify-center rounded-md font-semibold items-center">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
