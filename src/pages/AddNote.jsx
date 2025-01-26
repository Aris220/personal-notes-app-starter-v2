import { useState } from "react";
import { useNavigate } from "react-router";
//File css
import styles from "../styles/style.module.css";

//File component
import ButtonSave from "../component/Elements/button/ButtonSave";
//File utils
import { addNote } from "../utils/local-data";
const AddNote = () => {
  const [title, setTitle] = useState(""); // For title input
  const [body, setBody] = useState(""); // For body contentEditable
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    // Validate input
    if (!title || !body) {
      alert("Please fill out both the title and body!");
      return;
    }

    // Call addNote function and navigate back to notes page
    addNote({ title, body });
    navigate("/");
  };

  return (
    <section>
      <div className={styles["add-new-page__input"]}>
        <input
          className={styles["add-new-page__input__title"]}
          placeholder="Secret Note"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
        />
        <div
          className={styles["add-new-page__input__body"]}
          contentEditable="true"
          data-placeholder="TOP SECRET NOTE ....."
          onInput={(e) => setBody(e.currentTarget.innerText)} // Update body state on input
        ></div>
      </div>
      <div className={styles["add-new-page__action"]}>
        <ButtonSave onClick={handleSave} />
      </div>
    </section>
  );
};

export default AddNote;
