import { Outlet } from "react-router";

//File css
import styles from "../../styles/style.module.css";

//File component
import Navbar from "../Fragments/Navbar";
//File context
import { useTheme } from "../../context/theme/ThemeContext";
const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${styles["app-container"]} ${styles[theme]}`}>
        <Navbar type="main" />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
