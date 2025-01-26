import PropTypes from "prop-types";

//File css
import styles from "../../../styles/style.module.css";

const ButtonActive = ({ onClick }) => {
  return (
    <button
      className={styles["action"]}
      type="button"
      title="active"
      onClick={onClick}
    >
      <img src="/icons/active.svg" alt="Archive Icon" />
    </button>
  );
};
// PropTypes validation
ButtonActive.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonActive;
