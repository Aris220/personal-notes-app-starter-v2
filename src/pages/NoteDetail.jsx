import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import PropTypes from "prop-types";

//File css
import styles from "../styles/style.module.css";
//File utils
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";
//File component
import ButtonArchive from "../component/Elements/button/notes/ButtonActive";
import ButtonDelete from "../component/Elements/button/notes/ButtonDelete";
import ButtonActive from "../component/Elements/button/notes/ButtonActive";
import LoadingNote from "../component/Fragments/Loading";
const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dnote, setDnote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGetNote = async () => {
      setLoading(true);
      const note = await getNote(id);
      if (!note) {
        navigate("/*", { replace: true });
      } else {
        setDnote(note.data);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchGetNote();
  }, [id, navigate]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const deleteN = await deleteNote(id);
    navigate(dnote.archived ? "/archive" : "/");
  };

  const handleArchiveNote = async (e) => {
    e.preventDefault();
    const archiveN = await archiveNote(id);
    navigate("/archive");
  };

  const handlerUnarchiveNota = async (e) => {
    e.preventDefault();
    unarchiveNote(id);
    const unarchiveN = await unarchiveNote(id);
    navigate("/");
  };

  if (loading) return <LoadingNote />;
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
