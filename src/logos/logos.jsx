import MIST_logo from "../assets/MIST_logo.png";
import AE_logo from "../assets/AE_logo.png";

function Logos() {
  return (
    <div className="logo-container">
      <div className="MIST_logo">
        <img src={MIST_logo} />
      </div>
      <div className="AE_logo">
        <img src={AE_logo} />
      </div>
    </div>
  );
}

export default Logos;
