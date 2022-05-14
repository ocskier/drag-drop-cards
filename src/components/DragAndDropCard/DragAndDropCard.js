const DragAndDropCard = ({ id, status, title, handleDrag }) => {
  return (
    <div
      id={id}
      className="card m-3"
      draggable
      onDragStart={(e) => handleDrag(e, id)}
      onDragEnd={(e) => {
        e.target.closest(".card").style.backgroundColor = "#bbbbbb";
        setTimeout(
          () => (e.target.closest(".card").style.backgroundColor = "#ffffff"),
          1200
        );
      }}
    >
      <header className="card-header">
        <p className="card-header-title">
          {status[0].toUpperCase() + status.slice(1)}
        </p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          {title}
          <br />
          <time dateTime="2016-1-1">Timestamp</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          View
        </a>
      </footer>
    </div>
  );
};

export default DragAndDropCard;
