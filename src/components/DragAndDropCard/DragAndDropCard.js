const DragAndDropCard = ({ id, status, title, handleDrag }) => {
  return (
    <div
      id={id}
      className="card m-3"
      draggable
      onDragStart={() => {}}
      onDragEnd={() => {}}
    >
      <header className="card-header">
        <p className="card-header-title">
          {status[0].toUpperCase() + status.slice(1)}
        </p>
      </header>
    </div>
  );
};

export default DragAndDropCard;
