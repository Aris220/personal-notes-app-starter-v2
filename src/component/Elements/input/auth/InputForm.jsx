import { forwardRef } from "react";
import PropTypes from "prop-types";
//File component
import Label from "./Label";
import Input from "./Input";

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder, value, onChange } = props;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </>
  );
});
InputForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
export default InputForm;
