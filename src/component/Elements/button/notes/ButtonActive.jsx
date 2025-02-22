import PropTypes from "prop-types";
import { useState, useEffect } from "react";

//File css
import styles from "../../../../styles/style.module.css";

const ButtonActive = ({ onClick }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/icons/active.svg")
      .then((res) => res.text())
      .then(setSvgContent);
  }, []);
  return (
    <button
      className={styles["action"]}
      type="button"
      title="active"
      onClick={onClick}
    >
      <span dangerouslySetInnerHTML={{ __html: svgContent }} />
    </button>
  );
};
// PropTypes validation
ButtonActive.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonActive;
