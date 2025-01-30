import PropTypes from "prop-types";

//File css
import styles from "../../../styles/style.module.css";

const ButtonTheme = ({ onClick }) => {
  return (
    <button
      className={styles["toggle-theme"]}
      type="button"
      title="Theme"
      onClick={onClick}
    >
      {theme === "light" ? (
        <img src="/icons/themeMoon.svg" alt="ThemeMoon Icon" />
      ) : (
        <img src="/icons/themeSun.svg" alt="ThemeSun Icon" />
      )}
    </button>
  );
};
// PropTypes validation
ButtonSave.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonTheme;
