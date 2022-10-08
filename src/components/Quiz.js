/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import "./App.css"

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetGame = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="app">
      {showScore ? (
        <>
          <div className="question-text-card">
            You scored {score} out of {questions.length}
            <br />
            <button
              className="reset-game-button"
              onClick={() => handleResetGame()}
            >
              Play again
            </button>
          </div>
        </>
      ) : (
        <>
          {/* <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div> */}

          <div className="question-text-card">
            {questions[currentQuestion].questionText}
          </div>
          <br />

          <div class="some-page-wrapper">
            <div className="row">
              <div className="column">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      onClick={() =>
                        handleAnswerButtonClick(answerOption.isCorrect)
                      }
                    className="button-of-answers">
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
