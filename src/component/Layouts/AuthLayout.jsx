import { Outlet } from "react-router";

//File css
import styles from "../../styles/style.module.css";

//File component
import Navbar from "../Fragments/Navbar";
import { useTheme } from "../../context/theme/ThemeContext";
//File context

const AuthLayout = (props) => {
  const {} = props;
  const { theme } = useTheme();
  return (
    <>
      <div className={`${styles["app-container"]} ${styles[theme]}`}>
        <Navbar type="auth" />
        {/* <main>{children}</main> */}
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

// PropTypes validation
// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default AuthLayout;
