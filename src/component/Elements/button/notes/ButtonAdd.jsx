import { Link } from "react-router";

//File css
import styles from "../../../../styles/style.module.css";

const ButtonAdd = () => {
  return (
    <button className={styles["action"]} type="button" title="add">
      <Link to={`/notes/new`}>
        <img src="/icons/add.svg" alt="Add Icon" />
      </Link>
    </button>
  );
};
export default ButtonAdd;
