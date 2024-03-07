import "./buttons.css";

function Buttons({ text, dimention, margin = "0 120px", onClick }) {
  return (
    <button
      className="kave-btn"
      style={{ height: `${dimention.height}px`, width: `${dimention.width}px`, margin: `${margin}` }}
      onClick={onClick}
    >
      <span className="kave-line"></span>
      {text}
    </button>
  );
}

export default Buttons;
