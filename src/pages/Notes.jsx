import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

//File utils
import { showFormattedDate } from "../utils";
import { getActiveNotes } from "../utils/network-data";

//File css
import styles from "../styles/style.module.css";

//File context
import { useLanguage } from "../context/language/LanguageContext";

//File component
import NotFound from "../component/Fragments/NotFound";
import CardNote from "../component/Fragments/CardNote";
import SearchNote from "../component/Fragments/SearchNote";
import ButtonAdd from "../component/Elements/button/notes/ButtonAdd";
import LoadingNote from "../component/Fragments/Loading";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      const result = await getActiveNotes();

      if (result.error) {
        setNotes([]);
      } else {
        setNotes(result.data || []);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchNotes();
  }, []);

  // Get the search query from the URL
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query") || ""; // Default to empty string if no query

  // Filter notes based on the query
  const filteredNotes = notes.filter(
    (note) => note.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
  );

  return (
    <section className={styles["homepage"]}>
      <SearchNote>
        {language === "en" ? "Active Note" : "Catatan Aktif"}
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
        <NotFound type="notes" />
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
              type="notes"
            />
          ))}
        </section>
      )}
      <div>
        <section className={styles["homepage__action"]}>
          <ButtonAdd />
        </section>
      </div>
    </section>
  );
};

// PropTypes untuk CardNote
CardNote.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

// PropTypes untuk NotFound
NotFound.propTypes = {
  type: PropTypes.string.isRequired,
};

// PropTypes untuk SearchNote
SearchNote.propTypes = {
  children: PropTypes.node.isRequired,
};

// PropTypes untuk ButtonAdd (jika menerima props)
ButtonAdd.propTypes = {
  onClick: PropTypes.func,
};

export default Notes;
