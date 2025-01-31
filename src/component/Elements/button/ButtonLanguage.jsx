import PropTypes from "prop-types";

//File css
import styles from "../../../styles/style.module.css";

const ButtonLanguage = ({ onClick }) => {
  return (
    <button
      className={styles["toggle-locale"]}
      type="button"
      title="language"
      onClick={onClick}
    >
      <img src="/icons/language.svg" alt="Language Icon" />
    </button>
  );
};

// PropTypes validation
ButtonLanguage.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonLanguage;
