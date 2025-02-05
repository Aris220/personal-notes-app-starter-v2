import { forwardRef } from "react";

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
export default InputForm;
