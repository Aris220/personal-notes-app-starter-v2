import { Link } from "react-router";
import PropTypes from "prop-types";

//File css
import styles from "../../styles/style.module.css";

const CardNote = (props) => {
  const { id, title, createdAt, body } = props;
  return (
    <>
      <article className={styles["note-item"]}>
        <h3 className={styles["note-item__title"]} id={id}>
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className={styles["note-item__createdAt"]}>{createdAt}</p>
        <p className={styles["note-item__body"]}>{body}</p>
      </article>
    </>
  );
};

// PropTypes validation
CardNote.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default CardNote;
