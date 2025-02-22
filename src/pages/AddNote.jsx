import { useState } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
//File css
import styles from "../styles/style.module.css";
//File utils
import { addNote } from "../utils/network-data";
//File ontext
import { useLanguage } from "../context/language/LanguageContext";
//File component
import ButtonSave from "../component/Elements/button/notes/ButtonSave";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Added loading state
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleSave = async (e) => {
    e.preventDefault();

    // Validate input
    if (!title.trim() || !body.trim()) {
      alert(
        language === "en"
          ? "Please fill out both the title and body!"
          : "Tolong isi judul dan badan catatan"
      );
      return;
    }

    setLoading(true);

    // Call API to add note
    const result = await addNote({ title, body });

    setLoading(false);

    if (result.error) {
      alert("Failed to save note. Please try again.");
      return;
    }

    navigate("/");
  };

  return (
    <section>
      <div className={styles["add-new-page__input"]}>
        <input
          className={styles["add-new-page__input__title"]}
          placeholder={language == "en" ? "Secret Note" : "Catatan Rahasia"}
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <div
          className={styles["add-new-page__input__body"]}
          contentEditable={!loading}
          data-placeholder={
            language === "en"
              ? "TOP SECRET NOTE ....."
              : "Catatan Rahasia Tingkat Tinggi"
          }
          onInput={(e) => setBody(e.currentTarget.innerText)}
        ></div>
      </div>
      <div className={styles["add-new-page__action"]}>
        <ButtonSave onClick={handleSave} disabled={loading} />
      </div>
    </section>
  );
};
// PropTypes validation
AddNote.propTypes = {
  initialTitle: PropTypes.string,
  initialBody: PropTypes.string,
};

export default AddNote;
