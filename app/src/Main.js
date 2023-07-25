import React from "react";
import Pressure from "./Pressures";
import Temp from "./Temp";
import Wind from "./Wind";
export const Main = (props) => {
  if (props.value === "0") {
    return null; // Terminate the program
  }
  return (
    <>
      {props.value === "1" && <Temp />}
      {props.value === "2" && <Wind />}
      {props.value === "3" && <Pressure />}
    </>
  );
};
