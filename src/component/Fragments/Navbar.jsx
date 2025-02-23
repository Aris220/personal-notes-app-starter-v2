import { Link } from "react-router";
import PropTypes from "prop-types";

//File css
import styles from "../../styles/style.module.css";

import ButtonLanguage from "../Elements/button/ButtonLanguage";
import ButtonTheme from "../Elements/button/ButtonTheme";
import ButtonLogout from "../Elements/button/auth/ButtonLogout";

//File Custom Hook
import useAuth from "../../hooks/useAuth";

//File Context
import { useLanguage } from "../../context/language/LanguageContext";

const Navbar = (props) => {
  const { type, auth } = props;
  const { language } = useLanguage();

  const { logout, user } = auth;

  return (
    <>
      <header className={styles["header"]}>
        <h1>
          <Link to="/" className={styles["link-style"]}>
            {language === "en" ? "Notes App" : "Aplikasi Catatan"}
          </Link>
        </h1>

        <nav className={styles["flex-nav"]}>
          {type === "auth" ? (
            <>
              <ButtonTheme /> <ButtonLanguage />
            </>
          ) : (
            <>
              <Link to="/">{language === "en" ? "Notes" : "Catatan"}</Link>
              <Link to="/archive">
                {language === "en" ? "Archive" : "Arsip"}
              </Link>
              <ButtonTheme /> <ButtonLanguage />
              {logout && (
                <ButtonLogout onClick={logout}>
                  {user ? user.name : "User"}
                </ButtonLogout>
              )}
            </>
          )}
        </nav>
      </header>
    </>
  );
};
Navbar.propTypes = {
  type: PropTypes.oneOf(["auth", "main"]).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
  }).isRequired,
};
export default Navbar;
