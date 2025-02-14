import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

//File utils
import { showFormattedDate } from "../utils";
// import { getArchivedNotes } from "../utils/local-data";

//File css
import styles from "../styles/style.module.css";

//File component
import NotFound from "../component/Fragments/NotFound";
import CardNote from "../component/Fragments/CardNote";
import SearchNote from "../component/Fragments/SearchNote";
import ButtonAdd from "../component/Elements/button/ButtonAdd";

const Archive = () => {
  const [notes, setNotes] = useState([]);
  const loaded = useRef(false);

  // useEffect(() => {
  //   if (!loaded.current) {
  //     const data = getArchivedNotes();
  //     setNotes(data);
  //     loaded.current = true;
  //   }
  // }, []);

  //search
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query") || "";

  // Filter notes based on the query
  const filteredNotes = notes.filter(
    (note) => note.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
  );

  return (
    <>
      {/* <div className={styles["app-container"]}>
        <Navbar />
        <main> */}
      <section className={styles["homepage"]}>
        <SearchNote>Archive Note</SearchNote>
        {filteredNotes.length === 0 ? (
          <NotFound type="archive" />
        ) : (
          <section className={styles["notes-list"]}>
            {filteredNotes.map((note) => (
              <CardNote
                key={note.id}
                id={note.id}
                title={note.title}
                createdAt={showFormattedDate(note.createdAt)}
                body={note.body}
                archived={note.archived}
                type="archive"
              />
            ))}
          </section>
        )}
      </section>
      {/* </main>
      </div> */}
    </>
  );
};

//Validation
CardNote.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};
export default Archive;
