function StateBar({ bar_no, progress = [false, false, false] }) {
  let redClass = progress[0] ? "red-active" : "red-off";
  let yellowClass = progress[1] ? "yellow-active" : "yellow-off";
  let greenClass = progress[2] ? "green-active" : "green-off";

  return (
    <div className="state-bar">
      <div className={greenClass}></div>
      <div className={yellowClass}></div>
      <div className={redClass}></div>
      <div className="bar_no">{bar_no}</div>
    </div>
  );
}

export default StateBar;
