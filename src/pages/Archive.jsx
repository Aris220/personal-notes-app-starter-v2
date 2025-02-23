import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

//File utils
import { showFormattedDate } from "../utils";
import { getArchivedNotes } from "../utils/network-data";
// import { getArchivedNotes } from "../utils/local-data";

//File css
import styles from "../styles/style.module.css";

//File component
import NotFound from "../component/Fragments/NotFound";
import CardNote from "../component/Fragments/CardNote";
import SearchNote from "../component/Fragments/SearchNote";
import LoadingNote from "../component/Fragments/Loading";
import { useLanguage } from "../context/language/LanguageContext";

const Archive = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  //? fetch data archivedNotes
  useEffect(() => {
    const fetchArchivedNotes = async () => {
      setLoading(true);
      const result = await getArchivedNotes();

      if (result.error) {
        setNotes([]);
      } else {
        setNotes(result.data || []);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setLoading(false);
    };

    fetchArchivedNotes();
  }, []);

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
      <section className={styles["homepage"]}>
        <SearchNote>
          {language === "en" ? "Archive Note" : "Catatan Arsip"}
        </SearchNote>
        {loading ? (
          <section className={styles["notes-list"]}>
            {/*//? Show 3 skeletons while loading */}
            <LoadingNote />
            <LoadingNote />
            <LoadingNote />
            <LoadingNote />
          </section>
        ) : filteredNotes.length === 0 ? (
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

// PropTypes untuk komponen Archive
Archive.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
};

export default Archive;
