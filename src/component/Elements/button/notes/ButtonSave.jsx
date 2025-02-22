import PropTypes from "prop-types";
//File css
import styles from "../../../../styles/style.module.css";

const ButtonSave = ({ onClick }) => {
  return (
    <button
      className={styles["action"]}
      type="button"
      title="save"
      onClick={onClick}
    >
      <img src="/icons/archive.svg" alt="Save Icon" />
    </button>
  );
};

// PropTypes validation
ButtonSave.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSave;
