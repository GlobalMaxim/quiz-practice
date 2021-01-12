import React from "react";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
  const { answers, onAnswerClick, activeQuestion, state, image } = props;
  return (
    <div className="align-middle">
      <h1>Ответьте на вопросы</h1>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{activeQuestion}</h5>
        </div>

        {image?.length ? (
          <img
            src={image}
            className="mx-auto mb-5"
            style={{ width: "50%", height: "auto" }}
            alt="Image"
          />
        ) : null}

        <AnswersList
          state={state}
          onAnswerClick={onAnswerClick}
          answers={answers}
        />
      </div>
    </div>
  );
};

export default ActiveQuiz;
