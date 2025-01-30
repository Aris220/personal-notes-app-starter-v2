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
      <img src="/icons/language.svg" alt="Labguage Icon" />
    </button>
  );
};
// PropTypes validation
ButtonSave.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLanguage;
