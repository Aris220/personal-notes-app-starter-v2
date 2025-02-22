import PropTypes from "prop-types";
//File css
import styles from "../../../../styles/style.module.css";

const ButtonSave = ({ onClick }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/icons/archive.svg")
      .then((res) => res.text())
      .then(setSvgContent);
  }, []);
  return (
    <button
      className={styles["action"]}
      type="button"
      title="save"
      onClick={onClick}
    >
      <span dangerouslySetInnerHTML={{ __html: svgContent }} />
    </button>
  );
};

// PropTypes validation
ButtonSave.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSave;
