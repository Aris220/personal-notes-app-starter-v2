import { Link } from "react-router";

//File css
import styles from "../../styles/style.module.css";

import ButtonLanguage from "../Elements/button/ButtonLanguage";
import ButtonTheme from "../Elements/button/ButtonTheme";
import ButtonLogout from "../Elements/button/auth/ButtonLogout";

import useAuth from "../../hooks/useAuth";

const Navbar = (props) => {
  const { type } = props;
  const { logout, user } = useAuth();
  return (
    <>
      <header className={styles["header"]}>
        <h1>
          <Link to="/" className={styles["link-style"]}>
            Notes App
          </Link>
        </h1>

        <nav className={styles["flex-nav"]}>
          {type === "auth" ? (
            <>
              <ButtonTheme /> <ButtonLanguage />
            </>
          ) : (
            <>
              <Link to="/">Notes</Link>
              <Link to="/archive">Archive</Link>
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
