import { useEffect, useMemo, useState } from "react";
import Iteration from "./components/iteration/Iteration";
import Timer from "./components/timer/Timer";
import "./App.scss";

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

  const data = [
    {
      id: 1,
      question: "What does HTML stand for?",
      answers: [
        {
          text: "Hyper Text Markup Language",
          correct: true,
        },
        {
          text: "High Tech Markup Language",
          correct: false,
        },
        {
          text: "Home Tool Markup Language",
          correct: false,
        },
        {
          text: "Hyperlink and Text Markup Language",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What does CSS stand for?",
      answers: [
        {
          text: "Cascading Style Syntax",
          correct: false,
        },
        {
          text: "Cascading Style Sheets",
          correct: true,
        },
        {
          text: "Cascading Style System",
          correct: false,
        },
        {
          text: "Cascading Style Script",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What does JS stand for?",
      answers: [
        {
          text: "JavaScripting",
          correct: true,
        },
        {
          text: "JavaSuper",
          correct: false,
        },
        {
          text: "JavaStyle",
          correct: false,
        },
        {
          text: "JavaScript",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following is not a programming language?",
      answers: [
        {
          text: "Java",
          correct: false,
        },
        {
          text: "CSS",
          correct: true,
        },
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Ruby",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "What is the purpose of the `else` statement in Python's `if` conditional structure?",
      answers: [
        {
          text: "It defines a block of code to be executed if the condition is true",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed if the condition is false",
          correct: true,
        },
        {
          text: "It defines a block of code to be executed regardless of the condition",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed repeatedly",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the purpose of the `elif` statement in Python?",
      answers: [
        {
          text: "It defines a block of code to be executed if the condition is true",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed if the condition is false",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed regardless of the condition",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed if the previous condition is false",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "What is the purpose of the `for` loop in Python?",
      answers: [
        {
          text: "It defines a block of code to be executed if the condition is true",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed if the condition is false",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed regardless of the condition",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed repeatedly",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "What is the purpose of the `while` loop in Python?",
      answers: [
        {
          text: "It defines a block of code to be executed if the condition is true",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed if the condition is false",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed regardless of the condition",
          correct: false,
        },
        {
          text: "It defines a block of code to be executed repeatedly",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following is not a valid programming paradigm?",
      answers: [
        {
          text: "Calculational",
          correct: true,
        },
        {
          text: "Object-Oriented",
          correct: false,
        },
        {
          text: "Procedural",
          correct: false,
        },
        {
          text: "Functional",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "What is the primary purpose of version control systems like Git?",
      answers: [
        {
          text: "To manage and track changes to user interfaces",
          correct: false,
        },
        {
          text: "To manage and track changes to databases",
          correct: false,
        },
        {
          text: "To manage and track changes to code",
          correct: true,
        },
        {
          text: "To manage and track changes to servers",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which of the following is not a valid JavaScript data type?",
      answers: [
        {
          text: "String",
          correct: false,
        },
        {
          text: "Character",
          correct: true,
        },
        {
          text: "Boolean",
          correct: false,
        },
        {
          text: "Number",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Which of the following is an example of a front-end JavaScript framework/library?",
      answers: [
        {
          text: "React",
          correct: true,
        },
        {
          text: "Express",
          correct: false,
        },
        {
          text: "Django",
          correct: false,
        },
        {
          text: "Flask",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "Which programming language is often used for building dynamic web applications and server-side scripting?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "PHP",
          correct: true,
        },
        {
          text: "Java",
          correct: false,
        },
        {
          text: "Ruby",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "What is the term used to describe the process of finding and fixing errors in a program's code?",
      answers: [
        {
          text: "Debugging",
          correct: true,
        },
        {
          text: "Testing",
          correct: false,
        },
        {
          text: "Compiling",
          correct: false,
        },
        {
          text: "Running",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "What is the term used to describe the process of writing code?",
      answers: [
        {
          text: "Debugging",
          correct: false,
        },
        {
          text: "Testing",
          correct: false,
        },
        {
          text: "Compiling",
          correct: false,
        },
        {
          text: "Programming",
          correct: true,
        },
      ],
    },
  ];

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
