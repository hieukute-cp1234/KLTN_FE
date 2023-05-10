import React, { useState } from "react";
import { Sketch } from "@uiw/react-color";
import "./color-picker.scss";

const ColorPicker = (props) => {
  const { onChangeColor, value, label } = props;

  const handleChangeColorInput = (event) => {
    const value = event.target.value;
    onChangeColor(value);
  };

  const handleColorPicker = (color) => {
    const value = color.hex;
    onChangeColor(value);
  };

  return (
    <div className="ms-color-picker">
      <div className="ms-color-picker__handle">
        <span className="ms-color-picker__handle__label">{label}</span>
        <Sketch
          color={value}
          onChange={handleColorPicker}
          disableAlpha={true}
        />
      </div>
      <div className="ms-color-picker__result">
        <span></span>
        <input
          className="ms-color-picker__result__hex"
          value={value}
          onChange={handleChangeColorInput}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
