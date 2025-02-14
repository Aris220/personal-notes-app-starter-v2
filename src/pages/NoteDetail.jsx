import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import PropTypes from "prop-types";

//File css
import styles from "../styles/style.module.css";
//File utils
// import {
//   getNote,
//   deleteNote,
//   archiveNote,
//   unarchiveNote,
// } from "../utils/local-data";
//File component
import ButtonArchive from "../component/Elements/button/buttonArchive";
import ButtonDelete from "../component/Elements/button/buttonDelete";
import ButtonActive from "../component/Elements/button/ButtonActive";

const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dnote, setDnote] = useState(null);

  useEffect(() => {
    const note = getNote(id);
    if (!note) {
      navigate("/*", { replace: true });
    } else {
      setDnote(note);
    }
  }, [id, navigate]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(id);
    if (dnote.archived) {
      navigate("/archive");
    } else {
      navigate("/");
    }
  };

  const handleArchiveNote = (e) => {
    e.preventDefault();
    archiveNote(id);
    navigate("/archive");
  };

  const handlerUnarchiveNota = (e) => {
    e.preventDefault();
    unarchiveNote(id);
    navigate("/");
  };

  if (!dnote) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles["detail-page"]}>
      <h3 className={styles["detail-page__title"]}>{dnote.title}</h3>
      <p className={styles["detail-page__createdAt"]}>{dnote.createdAt}</p>
      <div className={styles["detail-page__body"]}>{dnote.body}</div>
      <div className={styles["detail-page__action"]}>
        {dnote.archived ? (
          <ButtonActive onClick={handlerUnarchiveNota} />
        ) : (
          <ButtonArchive onClick={handleArchiveNote} />
        )}
        <ButtonDelete onClick={handleDelete} />
      </div>
    </section>
  );
};

NoteDetail.propTypes = {
  dnote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }),
};

export default NoteDetail;
