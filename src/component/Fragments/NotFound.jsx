import PropTypes from "prop-types";

//File css
import styles from "../../styles/style.module.css";
//File context
import { useLanguage } from "../../context/language/LanguageContext";
const NotFound = (props) => {
  const { type } = props;
  const { language } = useLanguage();
  return (
    <div>
      <section className={styles["notes-list-empty"]}>
        <p className={styles["notes-list-empty"]}>
          {type === "archive"
            ? language === "en"
              ? "Archive Not Found"
              : "Arsip Tidak Ditemukan"
            : language === "en"
            ? "Notes Not Found"
            : "Catatan Tidak Ditemukan"}
        </p>
      </section>
    </div>
  );
};

// PropTypes validation
NotFound.propTypes = {
  type: PropTypes.string,
};
export default NotFound;
