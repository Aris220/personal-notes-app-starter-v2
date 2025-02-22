import PropTypes from "prop-types";
import { useState, useEffect } from "react";
//File css
import styles from "../../../styles/style.module.css";
//File context
import { useLanguage } from "../../../context/language/LanguageContext";

const ButtonLanguage = () => {
  const { language, setLanguage } = useLanguage();
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/icons/language.svg")
      .then((res) => res.text())
      .then(setSvgContent);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <button
      className={styles["toggle-locale"]}
      type="button"
      title="language"
      onClick={toggleLanguage}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

// PropTypes validation
ButtonLanguage.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonLanguage;
