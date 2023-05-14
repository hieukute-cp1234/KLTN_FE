import React from "react";
import { Checkbox, Radio } from "antd";
import "./check-box.scss";

const CommonCheckbox = (props) => {
  const { label, options = [], value, onChange } = props;
  return (
    <div className="ms-checkbox">
      <span className="ms-checkbox__label">{label}</span>
      <div className="ms-checkbox__group">
        {options.map((item, index) => (
          <>
            <Checkbox
              key={index}
              options={options}
              checked={value[index]}
              onChange={(e) => onChange(index, e.target.checked)}
            >
              {item.label}
            </Checkbox>
          </>
        ))}
      </div>
    </div>
  );
};

export default CommonCheckbox;
