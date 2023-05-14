import React from "react";
import "./button.scss";

const CommonButton = (props) => {
  const {
    text,
    typeButton,
    click,
    classButton = "",
    beforeIcon,
    afterIcon,
    largeSize,
    defaultSize,
    smallSize,
    disabled,
  } = props;

  const size = {
    "ms-large": largeSize,
    "ms-default": defaultSize,
    "ms-small": smallSize,
  };

  const classSizeButton = Object.entries(size)
    .filter(([_key, value]) => !!value)
    .map(([key, _value]) => key)
    .join(" ");

  const stringClass = `base-btn ${classSizeButton} ${classButton}`.trim();

  return (
    <button
      className={stringClass}
      type={typeButton || "button"}
      disabled={disabled}
      onClick={click}
    >
      {beforeIcon && <div className="base-btn__before-icon">{beforeIcon}</div>}
      {text}
      {afterIcon && <div className="base-btn__after-icon">{afterIcon}</div>}
    </button>
  );
};

export default CommonButton;
