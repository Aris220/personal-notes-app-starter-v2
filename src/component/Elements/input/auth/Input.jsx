import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      ref={ref}
    />
  );
});
export default Input;
