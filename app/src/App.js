import { useEffect, useState } from "react";

import { Main } from "./Main";
import "./App.css";

function App() {
  const [value, setValue] = useState();

  useEffect(() => {
    const keydown = (e) => {
      setValue(e.key);
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, []);
  if (value === "0") return;
  return (
    <>
      <h1 style={{ textAlign: "center", background: "wheat" }}>Weather App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <h3 style={{ background: "red", color: "black", padding: "5px" }}>
          Press 0 for Exit
        </h3>
        <h3 style={{ background: "blue", color: "white", padding: "5px" }}>
          Press 1 for getting temperature
        </h3>

        <h3 style={{ background: "blue", color: "white", padding: "5px" }}>
          Press 2 for getting windspeed
        </h3>
        <h3 style={{ background: "blue", color: "white", padding: "5px" }}>
          Press 3 for getting pressure
        </h3>
      </div>
      <Main value={value} />
    </>
  );
}

export default App;
