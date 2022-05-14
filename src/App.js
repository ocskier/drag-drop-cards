import "./App.css";
import DragAndDropCard from "@components/DragAndDropCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong className="has-text-black">Todos</strong>
      </header>
      <div className="container is-flex is-justify-content-space-evenly is-fluid cols-wrapper">
        <div id="opened" className="type mx-2">
          {[1, 2, 3].map((val) => (
            <DragAndDropCard
              key={val}
              handleDrag={() => {}}
              status={"opened"}
            />
          ))}
        </div>
        <div id="in progress" className="type mx-2">
          {[1, 2, 3].map((val) => (
            <DragAndDropCard
              key={val}
              handleDrag={() => {}}
              status={"in progress"}
            />
          ))}
        </div>
        <div id="completed" className="type mx-2">
          {[1, 2, 3].map((val) => (
            <DragAndDropCard
              key={val}
              handleDrag={() => {}}
              status={"completed"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

