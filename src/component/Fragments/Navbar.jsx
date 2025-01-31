import { Link } from "react-router";

//File css
import styles from "../../styles/style.module.css";
import ButtonSave from "../Elements/button/ButtonSave";
import ButtonLanguage from "../Elements/button/ButtonLanguage";
import ButtonTheme from "../Elements/button/ButtonTheme";

const Navbar = (props) => {
  const { type } = props;
  return (
    <>
      <header className={styles["header"]}>
        <h1>
          <Link to="/" className={styles["link-style"]}>
            Notes Aplication
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
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
