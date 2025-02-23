import { forwardRef } from "react";
import PropTypes from "prop-types";

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
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
export default Input;
