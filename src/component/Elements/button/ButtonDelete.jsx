import PropTypes from "prop-types";

//File css
import styles from "../../../styles/style.module.css";

const ButtonDelete = ({ onClick }) => {
  return (
    <button
      className={styles["action"]}
      type="button"
      title="arhive"
      onClick={onClick}
    >
      <img src="/icons/delete.svg" alt="Delete Icon" />
    </button>
  );
};

// PropTypes validation
ButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonDelete;
