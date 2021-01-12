import React from "react";

const AnswerItem = (props) => {

  return (
    <li
      className="list-group-item list-group-item-action"
      style={{cursor: "pointer"}}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
