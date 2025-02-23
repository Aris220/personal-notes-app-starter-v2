import PropTypes from "prop-types";
const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 yext-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

// PropTypes validation
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Label;
