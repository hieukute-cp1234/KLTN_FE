import { Input } from "antd";
import "./input.scss";

const CommonInput = (props) => {
  const { placeholder, beforeIcon, afterIcon, onChange } = props;
  return (
    <Input
      placeholder={placeholder}
      prefix={beforeIcon}
      suffix={afterIcon}
      onChange={onChange}
    />
  );
};

export default CommonInput;
