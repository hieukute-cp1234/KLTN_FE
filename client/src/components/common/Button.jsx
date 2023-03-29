import React from "react";
import "../../assets/scss/button.scss";

const CommonButton = (props) => {
  const { text, typeButton, click, classButton } = props;
  return (
    <button
      className={`base-btn ${classButton}`}
      type={typeButton || "button"}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default CommonButton;
