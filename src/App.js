import React, { useState } from "react";
import "./App.css";

export default function App() {
  const match = ["123", "456", "789", "147", "159", "258", "369", "357"];

  const [zeroArray, setZeroArray] = useState([]);
  const [crossArray, setCrossArray] = useState([]);
  const [count, setCount] = useState(0);

  const [buttonFlag, setButtonFlag] = useState(false);

  const [winFlag, setWinFlag] = useState(false);
  const [text, setText] = useState("X's turns -");
  const [winner, setWinner] = useState("");
  const styleObj = {
    getStyle1: { width: "20px" },
    getStyle2: { width: "20px" },
    getStyle3: { width: "20px" },
    getStyle4: { width: "20px" },
    getStyle5: { width: "20px" },
    getStyle6: { width: "20px" },
    getStyle7: { width: "20px" },
    getStyle8: { width: "20px" },
    getStyle9: { width: "20px" },
  };
  const styleObj2 = {
    getStyle1: { width: "20px", backgroundColor: "red" },
    getStyle2: { width: "20px", backgroundColor: "red" },
    getStyle3: { width: "20px", backgroundColor: "red" },
    getStyle4: { width: "20px", backgroundColor: "red" },
    getStyle5: { width: "20px", backgroundColor: "red" },
    getStyle6: { width: "20px", backgroundColor: "red" },
    getStyle7: { width: "20px", backgroundColor: "red" },
    getStyle8: { width: "20px", backgroundColor: "red" },
    getStyle9: { width: "20px", backgroundColor: "red" },
  };

  const [styleCell, setStyleCell] = useState(styleObj);
  const obj = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  };

  const [foo, setFoo] = useState(obj);

  const startAgainFn = () => {
    setZeroArray([]);
    setCrossArray([]);
    setButtonFlag(false);
    setWinFlag(false);
    setText("X's turns -");
    setCount(0);
    setFoo(obj);
    setWinner("");
    setStyleCell(styleObj);
  };
  let s = styleCell;
  if (winFlag === true) {
    const arr = winner.split("");
    const arr2 = arr.map((ele) => parseInt(ele));

    // s = styleCell;
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === 1) {
        s = {
          ...s,
          getStyle1: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 2) {
        s = {
          ...s,
          getStyle2: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 3) {
        s = {
          ...s,
          getStyle3: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 4) {
        s = {
          ...s,
          getStyle4: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 5) {
        s = {
          ...s,
          getStyle5: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 6) {
        s = {
          ...s,
          getStyle6: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 7) {
        s = {
          ...s,
          getStyle7: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 8) {
        s = {
          ...s,
          getStyle8: { width: "20px", backgroundColor: "green" },
        };
      } else if (arr2[i] === 9) {
        s = {
          ...s,
          getStyle9: { width: "20px", backgroundColor: "green" },
        };
      }
    }
    setStyleCell(s);
    setWinFlag(false);
  }

  if (count === 9 && buttonFlag === false) {
    count === 9 && winner === "" && setStyleCell(styleObj2);
    count === 9 && winner === "" && setButtonFlag(true);
    count === 9 && winner === "" && setText("Match Tied");
  }

  const clickHandler = (value) => {
    winner !== "" && alert(`Game is Over,${text}, Click Play Again button `);
    winner === "" &&
      count === 9 &&
      alert("Match Tied, Click Play Again button");
    if (foo[value] === "" && winner === "") {
      setCount(count + 1);
      if (count % 2 === 0) {
        crossArray.push(value);
        setText("O's turns -");
        setCrossArray(crossArray);
        if (value === 1) {
          setFoo({ ...foo, 1: "X" });
        } else if (value === 2) {
          setFoo({ ...foo, 2: "X" });
        } else if (value === 3) {
          setFoo({ ...foo, 3: "X" });
        } else if (value === 4) {
          setFoo({ ...foo, 4: "X" });
        } else if (value === 5) {
          setFoo({ ...foo, 5: "X" });
        } else if (value === 6) {
          setFoo({ ...foo, 6: "X" });
        } else if (value === 7) {
          setFoo({ ...foo, 7: "X" });
        } else if (value === 8) {
          setFoo({ ...foo, 8: "X" });
        } else if (value === 9) {
          setFoo({ ...foo, 9: "X" });
        }
      } else if (count % 2 !== 0) {
        zeroArray.push(value);
        setText("X's turns -");
        setZeroArray(zeroArray);
        if (value === 1) {
          setFoo({ ...foo, 1: "O" });
        } else if (value === 2) {
          setFoo({ ...foo, 2: "O" });
        } else if (value === 3) {
          setFoo({ ...foo, 3: "O" });
        } else if (value === 4) {
          setFoo({ ...foo, 4: "O" });
        } else if (value === 5) {
          setFoo({ ...foo, 5: "O" });
        } else if (value === 6) {
          setFoo({ ...foo, 6: "O" });
        } else if (value === 7) {
          setFoo({ ...foo, 7: "O" });
        } else if (value === 8) {
          setFoo({ ...foo, 8: "O" });
        } else if (value === 9) {
          setFoo({ ...foo, 9: "O" });
        }
      }
    }

    if (crossArray.length === 3) {
      crossArray.sort();
      const a = crossArray.join("");

      match.includes(a) && setText("X is the Winner");
      match.includes(a) && setButtonFlag(true);
      match.includes(a) && setWinner(a);
      match.includes(a) && setWinFlag(true);
    }

    if (zeroArray.length === 3) {
      zeroArray.sort();
      const b = zeroArray.join("");
      match.includes(b) && setText("O is the Winner");
      match.includes(b) && setButtonFlag(true);
      match.includes(b) && setWinner(b);
      match.includes(b) && setWinFlag(true);
    }
    let flag1;
    if (crossArray.length > 3) {
      for (let i = 0; i < match.length; i++) {
        let s = match[i];

        const arr = s.split("");
        for (let j = 0; j < arr.length; j++) {
          let n = parseInt(arr[j]);
          if (crossArray.includes(n)) {
            flag1 = true;
          } else {
            flag1 = false;
            break;
          }
        }
        if (flag1 === true) {
          setWinner(s);
          break;
        }
      }

      flag1 && setText("X is the Winner");
      flag1 && setButtonFlag(true);
      flag1 && setWinFlag(true);
    }

    let flag2;
    if (zeroArray.length > 3) {
      for (let i = 0; i < match.length; i++) {
        let s = match[i];
        const arr = s.split("");
        for (let j = 0; j < arr.length; j++) {
          let n = parseInt(arr[j]);
          if (zeroArray.includes(n)) {
            flag2 = true;
          } else {
            flag2 = false;
            break;
          }
        }
        if (flag2 === true) {
          setWinner(s);
          break;
        }
      }
      flag2 && setText("O is the Winner");
      flag2 && setButtonFlag(true);
      flag2 && setWinFlag(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Tic Tac Toe...</h1>

      {buttonFlag && (
        <span>
          <button onClick={startAgainFn}>Play Again</button>
        </span>
      )}
      <p>{text}</p>
      <div>
        <table
          style={{
            border: "2px solid black",
            height: "300px",
            width: "300px",
            textAlign: "center",
          }}
        >
          <tr>
            <td
              onClick={() => clickHandler(1)}
              value={1}
              style={styleCell.getStyle1}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[1]}
              />
            </td>
            <td
              onClick={() => clickHandler(2)}
              value={2}
              style={styleCell.getStyle2}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[2]}
              />
            </td>
            <td
              onClick={() => clickHandler(3)}
              value={3}
              style={styleCell.getStyle3}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[3]}
              />
            </td>
          </tr>
          <tr>
            <td
              onClick={() => clickHandler(4)}
              value={4}
              style={styleCell.getStyle4}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[4]}
              />
            </td>
            <td
              onClick={() => clickHandler(5)}
              value={5}
              style={styleCell.getStyle5}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[5]}
              />
            </td>
            <td
              onClick={() => clickHandler(6)}
              value={6}
              style={styleCell.getStyle6}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[6]}
              />
            </td>
          </tr>
          <tr>
            <td
              onClick={() => clickHandler(7)}
              value={7}
              style={styleCell.getStyle7}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[7]}
              />
            </td>
            <td
              onClick={() => clickHandler(8)}
              value={8}
              style={styleCell.getStyle8}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[8]}
              />
            </td>
            <td
              onClick={() => clickHandler(9)}
              value={9}
              style={styleCell.getStyle9}
            >
              <input
                style={{ width: "65%", height: "70%", textAlign: "center" }}
                disabled
                value={foo[9]}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
