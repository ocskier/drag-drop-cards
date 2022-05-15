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
    <div className="App">
      <header className="App-header">
        <strong className="has-text-black">Todos</strong>
      </header>
      <div className="container is-flex is-justify-content-space-evenly is-fluid cols-wrapper">
        <div id="opened" className="type mx-2">
          {todos
            .filter((todo) => todo.status.toLowerCase() === "opened")
            .map((todo, i) => (
              <DragAndDropCard key={i} handleDrag={handleDrag} {...todo} />
            ))}
        </div>
        <div id="in progress" className="type mx-2">
          {todos
            .filter((todo) => todo.status.toLowerCase() === "in progress")
            .map((todo, i) => (
              <DragAndDropCard key={i} handleDrag={handleDrag} {...todo} />
            ))}
        </div>
        <div id="completed" className="type mx-2">
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

