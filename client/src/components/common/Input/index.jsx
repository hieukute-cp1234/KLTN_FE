import React from 'react';
import { Input } from "antd";
import "./input.scss";

const CommonInput = (props) => {
  const { placeholder, label, beforeIcon, afterIcon, onChange, value, onKeyDown } = props;
  return (
    <div className="ms-input">
      {label && <span className="ms-input__label">{label}</span>}
      <Input
        classNames="ms-input__custom"
        placeholder={placeholder}
        prefix={beforeIcon}
        suffix={afterIcon}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
    </div>
  );
};

export default CommonInput;
