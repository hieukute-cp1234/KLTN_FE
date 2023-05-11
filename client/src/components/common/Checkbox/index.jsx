import React from "react";
import { Checkbox, Radio } from "antd";
import "./check-box.scss";

const CommonCheckbox = (props) => {
  const { label, options = [], value, onChange, isRadio } = props;
  return (
    <div className="ms-checkbox">
      <span className="ms-checkbox__label">{label}</span>
      <div className="ms-checkbox__group">
        {options.map((item, index) => (
          <>
            <Checkbox
              key={index}
              options={options}
              value={item.value}
              onChang={(e) => onChange(e.target.checked)}
            >
              {item.label}
            </Checkbox>
            {isRadio && <Radio value={item.valueRadio}></Radio>}
          </>
        ))}
      </div>
    </div>
  );
};

export default CommonCheckbox;
