import React from "react";
import Todo from "./Todo";
import  TodoForm  from "./TodoForm";

function TodoWrapper({todos})  {

  return (
    <div className="TodoWrapper">
      <h1>TODO LIST  CRUD APP!</h1>
      <TodoForm />
      <div>
       { 
        todos.map((todo, index) => {
          return (
            <Todo Todo = {todo} /> 
          )
      })}
    </div>
    </div>
  );
};

export default TodoWrapper