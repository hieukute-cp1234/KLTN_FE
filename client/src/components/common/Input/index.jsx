import { Input } from "antd";
import "./input.scss";

const CommonInput = (props) => {
  const { placeholder, label, beforeIcon, afterIcon, onChange } = props;
  return (
    <div className="ms-input">
      <span className="ms-input__label">{label}</span>
      <Input
        classNames="ms-input__custom"
        placeholder={placeholder}
        prefix={beforeIcon}
        suffix={afterIcon}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
