import { Link } from "react-router";
import { useState, useEffect } from "react";

//File css
import styles from "../../../../styles/style.module.css";

const ButtonAdd = () => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/icons/add.svg")
      .then((res) => res.text())
      .then(setSvgContent);
  }, []);
  return (
    <Link to={`/notes/new`}>
      <button className={styles["action"]} type="button" title="add">
        <span dangerouslySetInnerHTML={{ __html: svgContent }} />
      </button>
    </Link>
  );
};
export default ButtonAdd;
