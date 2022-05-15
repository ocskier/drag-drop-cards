import { useState } from "react";

import DragAndDropCard from "@components/DragAndDropCard";
import testData from "@data";

import "./App.css";

function App() {
  const [dragTgt, setDragTgt] = useState(null);
  const [targetStatus, setTargetStatus] = useState(null);
  const [todos, setTodos] = useState(testData);

  // change background color and set drag target on drag drop
  const handleDrag = (e, id) => {
    e.target.closest(".card").style.backgroundColor = "rgb(159, 220, 248)";
    setDragTgt(id);
  };

  return (
    <div
      className="App"
      onDragEnter={(e) => e.preventDefault()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        if (
          todos.find((task) => task.id === dragTgt).status !==
          e.target.closest(".type").id
        ) {
          setTargetStatus(e.target.closest(".type").id);
          setTodos(
            todos.map((todo) =>
              todo.id === dragTgt
                ? { ...todo, status: e.target.closest(".type").id }
                : todo
            )
          );
        }
      }}
    >
      <header className="App-header">
        <strong className="has-text-black">Todos</strong>
      </header>
      <div className="container is-flex is-justify-content-space-evenly is-fluid cols-wrapper">
        <div id="Opened" className="type mx-2">
          {todos
            .filter((todo) => todo.status.toLowerCase() === "opened")
            .map((todo, i) => (
              <DragAndDropCard key={i} handleDrag={handleDrag} {...todo} />
            ))}
        </div>
        <div id="In progress" className="type mx-2">
          {todos
            .filter((todo) => todo.status.toLowerCase() === "in progress")
            .map((todo, i) => (
              <DragAndDropCard key={i} handleDrag={handleDrag} {...todo} />
            ))}
        </div>
        <div id="Completed" className="type mx-2">
          {todos
            .filter((todo) => todo.status.toLowerCase() === "completed")
            .map((todo, i) => (
              <DragAndDropCard key={i} handleDrag={handleDrag} {...todo} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

