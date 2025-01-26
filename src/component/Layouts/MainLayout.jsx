import PropTypes from "prop-types";
import { Outlet } from "react-router";

//File css
import styles from "../../styles/style.module.css";

//File component
import Navbar from "../Fragments/Navbar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className={styles["app-container"]}>
        <Navbar />
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

export default MainLayout;
