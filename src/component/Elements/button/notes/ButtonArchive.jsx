import PropTypes from "prop-types";

//File css
import styles from "../../../../styles/style.module.css";

const ButtonArchive = ({ onClick }) => {
  return (
    <button
      className={styles["action"]}
      type="button"
      title="arhive"
      onClick={onClick}
    >
      <img src="/icons/archive.svg" alt="Archive Icon" />
    </button>
  );
};

// PropTypes validation
ButtonArchive.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonArchive;
