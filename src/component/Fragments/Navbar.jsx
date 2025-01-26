import { Link } from "react-router";

//File css
import styles from "../../styles/style.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1>
          <Link to="/" className={styles["link-style"]}>
            Notes Aplication
          </Link>
        </h1>

        <nav className={styles["flex-nav"]}>
          <Link to="/">Notes</Link>
          <Link to="/archive">Archive</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
