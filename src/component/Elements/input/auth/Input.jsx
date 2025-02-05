import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, value, onChange } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
});
export default Input;
