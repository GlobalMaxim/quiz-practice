import React from "react";
import { Link } from "react-router-dom";

const FinishedQuiz = (props) => {
  const { results, quiz } = props;

  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === "success") {
      total++;
      // console.log(successCount)
    }
    return total;
  }, 0);
  console.log(successCount);

  const showPage = () => {
    return (
      <div>
        <h1>Результаты</h1>
        {/* <div className="card"> */}
        <table className="table table-light table-bordered border-secondary border-2">
          <tbody>
            {quiz.map((quizItem, index) => {
              const finalResult =
                results[quizItem.id] === "success" ? "Верно" : "Не верно";
              const cls = [
                results[quizItem.id] === "success"
                  ? "table-success"
                  : "table-danger",
              ];
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th>{quizItem.question}</th>
                  <th className={cls.join(" ")}>{finalResult}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button className="btn btn-primary btn-lg mr-3" onClick={props.onRetry}>
            Повторить
          </button>
          <Link to="/">
            <button className="btn btn-success btn-lg">Перейти в список тестов</button>
          </Link>
        </div>
      </div>
    );
  };

  return showPage();
};

export default FinishedQuiz;
