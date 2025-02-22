import { Link } from "react-router";

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
  const { type } = props;
  const { logout, user } = useAuth();
  const { language } = useLanguage();
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
              <ButtonLogout onClick={logout}>
                {`${user?.name || "User"}`}
              </ButtonLogout>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
