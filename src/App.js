import { useState } from "react";

import DragAndDropCard from "@components/DragAndDropCard";
import testData from "@data";

import "./App.css";

function App() {
  const [dragTgt, setdragTgt] = useState(null);
  const [targetStatus, setTargetStatus] = useState(null);
  const [todos, setTodos] = useState(testData);

  return (
    <div className="App">
      <header className="App-header">
        <strong className="has-text-black">Todos</strong>
      </header>
      <div className="container is-flex is-justify-content-space-evenly is-fluid cols-wrapper">
        <div id="opened" className="type mx-2">
          {todos
            .filter(({ status }) => status.toLowerCase() === "opened")
            .map(({ status }, i) => (
              <DragAndDropCard key={i} handleDrag={() => {}} status={status} />
            ))}
        </div>
        <div id="in progress" className="type mx-2">
          {todos
            .filter(({ status }) => status.toLowerCase() === "in progress")
            .map(({ status }, i) => (
              <DragAndDropCard key={i} handleDrag={() => {}} status={status} />
            ))}
        </div>
        <div id="completed" className="type mx-2">
          {todos
            .filter(({ status }) => status.toLowerCase() === "completed")
            .map(({ status }, i) => (
              <DragAndDropCard key={i} handleDrag={() => {}} status={status} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

