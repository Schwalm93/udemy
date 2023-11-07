import { useState } from "react";
import "./App.css";

import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  // const myCallbackFunction = (myParam: string) => {
  //   setMyUse(myParam);
  // }

  const [todos, setTodos] = useState( [
    { rowNr: 1, rowDes: "Feed puppy", rowAssign: "User One" },
    { rowNr: 2, rowDes: "Feed puppy", rowAssign: "User Two" },
    { rowNr: 3, rowDes: "Feed Mummy", rowAssign: "User One" },
  ]);

  const addTodo = (des: string, assign: string) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNr: todos.length + 1, 
        rowDes: des, 
        rowAssign: assign
      }
      setTodos([...todos, newTodo]);
    }
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
