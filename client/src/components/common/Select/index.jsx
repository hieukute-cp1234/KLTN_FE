import React from "react";
import { Select } from "antd";
import "./select.scss";

const { Option } = Select;

const CommonSelect = (props) => {
  const { placeholder, label, options = [], onChange, value } = props;

  return (
    <div className="ms-select">
      <span className="ms-select__label">{label}</span>
      <Select
        classNames="ms-select__custom"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      >
        {options.map((item, index) => (
          <Option value={item.value} key={index}>
            {item.icon && <div>icon</div>}
            {item.text}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CommonSelect;
