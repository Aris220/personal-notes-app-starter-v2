import PropTypes from "prop-types";

//File css
import styles from "../../../styles/style.module.css";
//File context
import { useLanguage } from "../../../context/language/LanguageContext";
const ButtonLanguage = ({}) => {
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en"); // Toggle language
  };
  return (
    <button
      className={styles["toggle-locale"]}
      type="button"
      title="language"
      onClick={toggleLanguage}
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
