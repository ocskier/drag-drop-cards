const DragAndDropCard = ({ id, status, title, handleDrag }) => {
  return (
    <div
      id={id}
      className="card m-3"
      draggable
      onDragStart={() => {}}
      onDragEnd={() => {}}
    ></div>
  );
};

export default DragAndDropCard;
