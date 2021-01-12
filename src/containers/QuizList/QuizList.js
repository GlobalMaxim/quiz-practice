import axios from "../../axios/axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css";

const QuizList = () => {
  const [quizes, setQuizes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getQuizes();
  }, []);

  const renderQuizes = () => {
    // console.log(quizes);
    return quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  };

  const getQuizes = async () => {
    try {
      const response = await axios.get("/quizes.json");
      // console.log(response)
      const quizesArr = [];
      Object.keys(response.data).forEach((key, index) => {
        quizesArr.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });
      setQuizes(quizesArr);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.QuizList}>
      {!isLoaded ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h1>Список тестов</h1>
          <ul>{renderQuizes()}</ul>
        </div>
      )}
    </div>
  );
};

export default QuizList;
