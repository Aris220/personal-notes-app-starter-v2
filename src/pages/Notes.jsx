import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";

//File utils
import { showFormattedDate } from "../utils";
// import { addNote } from "../utils/local-data";
import { getActiveNotes } from "../utils/network-data";

//File css
import styles from "../styles/style.module.css";

//File component
import NotFound from "../component/Fragments/NotFound";
import CardNote from "../component/Fragments/CardNote";
import SearchNote from "../component/Fragments/SearchNote";
import ButtonAdd from "../component/Elements/button/ButtonAdd";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  // const loaded = useRef(false);

  // Get the search query from the URL
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query") || ""; // Default to empty string if no query

  // useEffect(() => {
  //   if (!loaded.current) {
  //     const data = getActiveNotes();
  //     setNotes(data);
  //     loaded.current = true;
  //     console.log(data);
  //   }
  // }, []);
  useEffect(() => {
    const fetchNotes = async () => {
      const result = await getActiveNotes();

      if (result.error) {
        console.error("Failed to fetch notes:", result);
        setNotes([]);
      } else {
        setNotes(result.data || []);
      }
    };

    fetchNotes();
  }, []);

  // Filter notes based on the query
  const filteredNotes = notes.filter(
    (note) => note.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
  );

  // Func AddNote
  // const handleAddNote = ({ title, body }) => {
  //   // Add the new note
  //   addNote({ title, body });

  //   // Fetch and update the notes state with the latest data
  //   const updatedNotes = getActiveNotes();
  //   setNotes(updatedNotes);
  // };

  return (
    <section className={styles["homepage"]}>
      <SearchNote>Active Note</SearchNote>
      {filteredNotes.length === 0 ? (
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
          <ButtonAdd /> {/* Link to AddNote page */}
        </section>
      </div>
    </section>
  );
};
// PropTypes Validation for Notes Component (Child components)
Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  handleAddNote: PropTypes.func,
};

export default Notes;
