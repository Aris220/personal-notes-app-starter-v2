import PropTypes from "prop-types";
import { useState, useEffect } from "react";

//File css
import styles from "../../../../styles/style.module.css";

const ButtonArchive = ({ onClick }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/icons/archive.svg")
      .then((res) => res.text())
      .then(setSvgContent);
  }, []);
  return (
    <button
      className={styles["action"]}
      type="button"
      title="arhive"
      onClick={onClick}
    >
      <span dangerouslySetInnerHTML={{ __html: svgContent }} />
    </button>
  );
};

// PropTypes validation
ButtonArchive.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonArchive;
