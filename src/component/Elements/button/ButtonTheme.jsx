import PropTypes from "prop-types";

//File css
import styles from "../../../styles/style.module.css";
//File context
import { useTheme } from "../../../context/theme/ThemeContext";

const ButtonTheme = (props) => {
  // const { onClick, theme } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={styles["toggle-theme"]}
      type="button"
      title="Theme"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <img src="/icons/themeMoon.svg" alt="ThemeMoon Icon" />
      ) : (
        <img src="/icons/themeSun.svg" alt="ThemeSun Icon" />
      )}
    </button>
  );
  console.log(theme);
};
// PropTypes validation
ButtonTheme.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonTheme;
