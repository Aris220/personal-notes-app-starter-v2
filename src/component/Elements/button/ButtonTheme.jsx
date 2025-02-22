import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//File css
import styles from "../../../styles/style.module.css";
//File context
import { useTheme } from "../../../context/theme/ThemeContext";

const ButtonTheme = (props) => {
  // const { onClick, theme } = props;
  const { theme, toggleTheme } = useTheme();
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    const svgPath =
      theme === "light" ? "/icons/themeMoon.svg" : "/icons/themeSun.svg";

    fetch(svgPath)
      .then((res) => res.text())
      .then(setSvgContent);
  }, [theme]);

  return (
    <button
      className={styles["toggle-theme"]}
      type="button"
      title="Theme"
      onClick={toggleTheme}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    ></button>
  );
  console.log(theme);
};
// PropTypes validation
ButtonTheme.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonTheme;
