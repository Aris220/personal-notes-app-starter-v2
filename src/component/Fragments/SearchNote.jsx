import { useLocation, useNavigate } from "react-router";
import PropTypes from "prop-types";

//File css
import styles from "../../styles/style.module.css";

//File Context
import { useLanguage } from "../../context/language/LanguageContext";

const SearchNote = (props) => {
  const { children } = props;
  const language = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    const query = e.target.value;
    // Update the URL search query parameter
    navigate({
      pathname: location.pathname,
      search: `?query=${query}`, // Update the query parameter in the URL
    });
  };
  return (
    <>
      <h2>{children}</h2>
      <section className={styles["search-bar"]}>
        <input
          type="text"
          placeholder={
            language === "en" ? "Search by title" : "Cari berdasrkan judul"
          }
          onChange={handleSearch}
        />
      </section>
    </>
  );
};

// PropTypes validation
SearchNote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchNote;
