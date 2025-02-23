import { Outlet, Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

//File css
import styles from "../../styles/style.module.css";

//File component
import Navbar from "../Fragments/Navbar";
import { useTheme } from "../../context/theme/ThemeContext";
//File context

const AuthLayout = () => {
  const { theme } = useTheme();
  const token = localStorage.getItem("accessToken");
  const auth = useAuth({ skipFetch: true });

  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className={`${styles["app-container"]} ${styles[theme]}`}>
        <Navbar type="auth" auth={auth} />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
