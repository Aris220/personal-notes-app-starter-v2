import { Outlet, Navigate } from "react-router";

//File css
import styles from "../../styles/style.module.css";

//File component
import Navbar from "../Fragments/Navbar";
import { useTheme } from "../../context/theme/ThemeContext";
//File context

const AuthLayout = (props) => {
  const {} = props;
  const { theme } = useTheme();
  const token = localStorage.getItem("accessToken");

  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className={`${styles["app-container"]} ${styles[theme]}`}>
        <Navbar type="auth" />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
