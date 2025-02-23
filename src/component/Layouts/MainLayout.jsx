import { Outlet } from "react-router";
//File css
import styles from "../../styles/style.module.css";
//File utils
import useAuth from "../../hooks/useAuth";
//File component
import Navbar from "../Fragments/Navbar";
//File context
import { useTheme } from "../../context/theme/ThemeContext";
const MainLayout = () => {
  const { theme } = useTheme();
  const auth = useAuth({ skipFetch: false });
  return (
    <>
      <div className={`${styles["app-container"]} ${styles[theme]}`}>
        <Navbar type="main" auth={auth} />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
