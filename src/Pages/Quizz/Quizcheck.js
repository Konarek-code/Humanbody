import React, { useState } from 'react';

import '../../App.css';
import questions from './Question';

import charizard from '../../images/charizard.svg';
import charmander from '../../images/charmanderlvl.png';
import charmelon from '../../images/charmeleon.svg';

const Quizcheck = () => {
  const [finalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onClickNext = points => {
    setScore(score + points);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  return (
    <div className="App-quizz" style={{ backgroundColor: '#000000' }}>
      {finalResult ? (
        <div className="final-results">
          <h2 className="info">
            At each exercise, you'll find an icon representing the difficulty
            level of that exercise. Please select exercises that are tailored to
            your level, determined based on the test.
          </h2>
          <h1>Your Result:</h1>
          <h2 className="leveltext">
            {score > 6
              ? 'you are experienced'
              : score <= 6 && score > 4
              ? 'middle-advanced'
              : 'Beginner'}
          </h2>
          <img
            className="charmander"
            src={
              score > 6
                ? charizard
                : score <= 6 && score > 4
                ? charmelon
                : charmander
            }
            alt="level"
          />
        </div>
      ) : (
        <div className="question-card">
          <h1 className="quizz-start">Do quick test to check your advanced</h1>
          <h2 className="question-text">
            {questions[currentQuestion].question}
          </h2>
          <ul className="quzier">
            {questions[currentQuestion].choices.map(choice => (
              <button
                className="quizer"
                key={choice.id}
                onClick={() => onClickNext(choice.points)}
              >
                {choice.text}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quizcheck;
