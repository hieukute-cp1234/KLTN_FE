import React from "react";
import "./button.scss";

const CommonButton = (props) => {
  const { text, typeButton, click, classButton, beforeIcon, afterIcon } = props;
  return (
    <button
      className={`base-btn ${classButton}`}
      type={typeButton || "button"}
      onClick={click}
    >
      {beforeIcon && <div className="base-btn__before-icon">{beforeIcon}</div>}
      {text}
      {afterIcon && <div className="base-btn__after-icon">{afterIcon}</div>}
    </button>
  );
};

export default CommonButton;
