import React, { useState, useEffect } from "react";
import "./App.css";

import Logos from "./logos/logos";
import MiddleText from "./menu/middle_text/middle_text";
import Credits from "./menu/credits/Credits";
import Buttons from "./menu/buttons/buttons";
import StateBar from "./state-bar/StateBar";

function App() {
  const [currentState, setCurrentState] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState(2);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {currentState !== 3 && (
        <div className="menu">
          <Logos />
          <MiddleText
            text={
              currentState === 1
                ? "AEROZ <br> ARMAMENT <br> SYSTEM"
                : "DO YOU WANT TO ENTER AND <br> ACTIVATE THE ARMAMENT <br> SYSTEM?"
            }
          />
          {currentState === 1 && <Credits />}
          {currentState === 2 && (
            <div className="buttons-container">
              <Buttons text={"Enter"} dimention={{ height: 80, width: 320 }} onClick={() => setCurrentState(3)} />
              <Buttons text={"Exit"} dimention={{ height: 80, width: 320 }} onClick={() => setCurrentState(1)} />
            </div>
          )}
        </div>
      )}
      {currentState === 3 && (
        <div className="game">
          <div className="button-set">
            <Buttons text={"Auto Swing"} dimention={{ height: 80, width: 600 }} />
            <Buttons text={"Manual Swing"} dimention={{ height: 80, width: 600 }} />
          </div>
          <div className="game-console">
            <div className="control">
              <div className="control-buttons">
                <div className="red-switch"></div>
                <div className="green-switch"></div>
              </div>
              <div className="auto-switch-btn">
                <Buttons text={"Auto Switch"} dimention={{ height: 140, width: 280 }} margin="0px" />
              </div>
            </div>
            <div className="state">
              <StateBar bar_no="1" progress={[true, true, false]} />
              <StateBar bar_no="2" />
              <StateBar bar_no="3" />
              <StateBar bar_no="4" progress={[true, true, true]} />
              <StateBar bar_no="5" progress={[true, false, false]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
