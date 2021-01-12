import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";

const Quiz = (props) => {
  const [currentQuiz, setQuiz] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [results, setResults] = useState({});
  const [isFinished, setFinished] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getQuiz();
  }, []);

  const onAnswerClickHandler = (answerId) => {
    const question = currentQuiz[activeQuestion];
    const answersResults = results;

    if (answerId === question.rightAnswerId) {
      answersResults[question.id] = "success";
      setResults(answersResults);
    } else {
      answersResults[question.id] = "incorrect";
      setResults(answersResults);
    }

    const timeout = window.setTimeout(() => {
      if (activeQuestion + 1 === currentQuiz.length) {
        setFinished(true);
      } else {
        setActiveQuestion(activeQuestion + 1);
        setResults(answersResults);
      }
      console.log(results);
      window.clearTimeout(timeout);
    }, 1000);
  };

  const getQuiz = async () => {
    try {
      const response = await axios.get(`/quizes/${props.match.params.id}.json`);
      const quiz = response.data;
      console.log("quiz: ", currentQuiz);
      setQuiz(quiz);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const retryHandler = () => {
    setActiveQuestion(0);
    setFinished(false);
    setResults({});
  };

  const showQuiz = () => {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {isFinished ? (
            <FinishedQuiz
              results={results}
              quiz={currentQuiz}
              onRetry={retryHandler}
            />
          ) : !isLoaded ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : currentQuiz?.length ? (
            <ActiveQuiz
              answers={currentQuiz[activeQuestion].answers}
              onAnswerClick={onAnswerClickHandler}
              activeQuestion={currentQuiz[activeQuestion].question}
              image={currentQuiz[activeQuestion].img}
            />
          ) : (
            <div> NUll</div>
          )}
        </div>
      </div>
    );
  };

  return showQuiz();
};

export default Quiz;
