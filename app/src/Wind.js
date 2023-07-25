import React, { useEffect, useState } from "react";
import axios from "axios";
const Wind = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  function findSubstrings(str, length) {
    let ans = "";
    for (var i = 0; i < 10; i++) {
      ans += str[i];
    }
    return ans;
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/weather")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    const value = prompt("Enter the data in YYYY-MM-DD");
    setInput(value);
  }, []);

  console.log(data);
  console.log(input);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>WindSpeed</h1>
      <ul>
        {data.map((item) => {
          const temp = item.dt_txt;
          const result = findSubstrings(temp, 10);
          return (
            <>
              {input === result && (
                <li
                  style={{
                    fontSize: "25px",
                    background: "wheat",
                    border: "5px solid",
                    borderRadius: "10px",
                    listStyle: "none",
                    padding: "15px",
                    margin: "15px",
                    width: "50vh",
                    textAlign: "center",
                  }}
                  key={item.dt}
                >
                  {item.wind.speed} m/s
                  <br />
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Wind;
