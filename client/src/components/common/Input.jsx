import { Input } from "antd";

const CommonInput = (props) => {
  const { placeholder, beforeIcon, afterIcon } = props;
  return (
    <Input placeholder={placeholder} prefix={beforeIcon} suffix={afterIcon} />
  );
};

export default CommonInput;
