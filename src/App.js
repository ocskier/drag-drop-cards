import "./App.css";
import DragAndDropCard from "@components/DragAndDropCard";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container is-flex is-justify-content-space-evenly is-fluid cols-wrapper">
        {[1, 2, 3].map((val) => (
          <DragAndDropCard />
        ))}
      </div>
    </div>
  );
}

export default App;

