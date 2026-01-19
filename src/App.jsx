import "./App.css";
import React, { useReducer } from "react";
import { countReducer, SCENARIOS } from "./reducers/counterReducer";

function App() {
  const [state, dispatch] = useReducer(countReducer, SCENARIOS.CASE_4);

  return (
    <>
      <div style={{ padding: "40px" }}>
        <h1>Redux Logic Tester</h1>

        {/* 1. Display current structure */}
        <div style={{ padding: "20px", textAlign: "center" }}>
          {state.map((item, index) => (
            <div key={index}>
              {/* If it's a number (Case 1) */}
              {typeof item === "number" && <p>Value: {item}</p>}

              {/* If it's an object (Case 2, 3, 4) */}
              {typeof item === "object" && (
                <>
                  {"count" in item && <p>Count 1: {item.count}</p>}
                  {"count2" in item && <p>Count 2: {item.count2}</p>}
                </>
              )}
            </div>
          ))}
        </div>

        {/* 2. Control Buttons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "20px"}}>
          <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
            Count +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT_COUNT" })}>
            Count -
          </button>
          <button onClick={() => dispatch({ type: "INCREMENT_COUNT2" })}>
            Count2 +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT_COUNT2" })}>
            Count2 -
          </button>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            style={{ marginLeft: "20px" }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
