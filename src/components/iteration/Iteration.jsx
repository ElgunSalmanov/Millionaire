import { useState, useEffect } from "react";
import useSound from "use-sound";
import correct from "../../sounds/src_sounds_correct.mp3";
import wrong from "../../sounds/src_sounds_wrong.mp3";
import play from "../../sounds/src_sounds_play.mp3";
import "./iteration.scss";

function Iteration({ data, setTime, number, setNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("iteration-answers-answer");
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [letsPlay] = useSound(play);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setClassName("iteration-answers-answer button-active");
    delay(3000, () => {
      setClassName(
        answer.correct
          ? "iteration-answers-answer correct"
          : "iteration-answers-answer wrong"
      );
    });
    delay(5000, () => {
      if (answer.correct) {
        correctAnswer();
        delay(1000, () => {
          setNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTime(true);
        });
      }
    });
  };

  useEffect(() => {
    setQuestion(data[number - 1]);
  }, [data, number]);

  return (
    <div className="iteration">
      <div className="iteration-question">{question?.question}</div>
      <div className="iteration-answers">
        {question?.answers.map((item) => (
          <div
            key={item.text}
            className={
              selectedAnswer === item ? className : "iteration-answers-answer"
            }
            onClick={() => handleAnswer(item)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iteration;
