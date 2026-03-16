import { useState } from "react";
import gayle from "../src/assets/gayle14.webp";

function ScoreCounter() {
  const [state, setState] = useState(0);
  const [four, setFour] = useState(0);
  const [six, setSix] = useState(0);
  function singleOneCount() {
    setState(state + 1);
  }
  function singleTwoCount() {
    setState(state + 2);
  }
  function singleThreeCount() {
    setState(state + 3);
  }
  function fourCount() {
    setState(state + 4);
    setFour(four + 1);
  }
  function sixCount() {
    setState(state + 6);
    setSix(six + 1);
  }
  return (
    <div className="boss">
      <img style={{ width: "160px" }} src={gayle} alt="" />
      <div
        style={{
          //   border: "1px solid white",
          padding: "24px 12px",
          borderRadius: "8px",
          margin: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            color: "darkgreen",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Chris Gayle
        </h2>
        <h3 style={{ color: "white" }}>{state}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span style={{ color: "white" }}>Four : {four}</span>
          <span style={{ color: "white" }}>Six : {six}</span>
        </div>
        <div
          style={{
            marginTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <button
            onClick={singleOneCount}
            style={{
              cursor: "pointer",
              width: "80px",
              textAlign: "center",
              padding: "12px 6px",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "8px",
              color: "white",
            }}
          >
            Single-1
          </button>
          <button
            onClick={singleTwoCount}
            style={{
              cursor: "pointer",
              width: "80px",
              textAlign: "center",
              padding: "12px 6px",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "8px",
              color: "white",
            }}
          >
            Single-2
          </button>
          <button
            onClick={singleThreeCount}
            style={{
              cursor: "pointer",
              width: "80px",
              textAlign: "center",
              padding: "12px 6px",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "8px",
              color: "white",
            }}
          >
            Single-3
          </button>
          <button
            onClick={fourCount}
            style={{
              cursor: "pointer",
              width: "80px",
              textAlign: "center",
              padding: "12px 6px",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "8px",
              color: "white",
            }}
          >
            Four
          </button>
          <button
            onClick={sixCount}
            style={{
              cursor: "pointer",
              width: "80px",
              textAlign: "center",
              padding: "12px 6px",
              backgroundColor: "transparent",
              border: "1px solid white",
              borderRadius: "8px",
              color: "white",
            }}
          >
            Six
          </button>
        </div>
      </div>
    </div>
  );
}
export default ScoreCounter;
