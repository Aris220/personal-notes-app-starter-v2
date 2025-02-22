import PropTypes from "prop-types";
import { useState, useEffect } from "react";

//File css
import styles from "../../../../styles/style.module.css";

const ButtonDelete = ({ onClick }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/icons/delete.svg")
      .then((res) => res.text())
      .then(setSvgContent);
  }, []);
  return (
    <button
      className={styles["action"]}
      type="button"
      title="delete"
      onClick={onClick}
    >
      <span dangerouslySetInnerHTML={{ __html: svgContent }} />
    </button>
  );
};

// PropTypes validation
ButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonDelete;
