import { useEffect, useMemo, useState } from "react";
import Iteration from "./components/iteration/Iteration";
import Timer from "./components/timer/Timer";
import "./App.scss";
import { data } from "../db.json";

function App() {
  const [number, setNumber] = useState(1);
  const [time, setTime] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const money = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    if (number === data.length + 1 && number > 1) {
      setTime(true);

      const earnedAmount =
        money.find((item) => item.id === number - 1)?.amount || "$ 0";
      setEarned(earnedAmount);
    } else {
      setEarned(money.find((item) => item.id === number - 1)?.amount || "$ 0");
    }
  }, [number, money, data]);

  const startNewGame = () => {
    setNumber(1);
    setTime(false);
    setEarned("$ 0");
  };

  return (
    <>
      <div className="app">
        <div className="app-container">
          {time ? (
            <>
              <h1 className="earned">You earned: {earned}</h1>
              <button className="app-container-restart" onClick={startNewGame}>
                Start New Game
              </button>
            </>
          ) : (
            <>
              <div className="app-container-up">
                <div className="app-container-up-timer">
                  <Timer setTime={setTime} number={number} />
                </div>
              </div>
              <div className="app-container-down">
                <Iteration
                  data={data}
                  setTime={setTime}
                  number={number}
                  setNumber={setNumber}
                />
              </div>
            </>
          )}
        </div>
        <div className="app-sidebar">
          <ul className="app-sidebar-list">
            {money.map((item) => (
              <li
                key={item.id}
                className={
                  number === item.id
                    ? "app-sidebar-list-item active"
                    : "app-sidebar-list-item"
                }
              >
                <span className="app-sidebar-list-item-number">{item.id}</span>
                <span className="app-sidebar-list-item-amount">
                  {item.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
