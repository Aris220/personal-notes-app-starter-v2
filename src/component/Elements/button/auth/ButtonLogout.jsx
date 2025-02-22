import PropTypes from "prop-types";
import { useState, useEffect } from "react";

//File css
import styles from "../../../../styles/style.module.css";

// const ButtonLogout = ({ onClick, children }) => {
//   return (
//     <button
//       className={styles["button-logout"]}
//       type="button"
//       title="logout"
//       onClick={onClick}
//     >
//       {children}
//       <img src="/icons/logout.svg" alt="Logout Icon" />
//     </button>
//   );
// };

// // PropTypes validation
// ButtonLogout.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
// export default ButtonLogout;
const ButtonLogout = ({ onClick, children }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/icons/logout.svg")
      .then((res) => res.text())
      .then((data) => setSvgContent(data));
  }, []);

  return (
    <button
      className={styles["button-logout"]}
      type="button"
      title="logout"
      onClick={onClick}
    >
      {children}
      <span dangerouslySetInnerHTML={{ __html: svgContent }} />
    </button>
  );
};

// PropTypes validation
ButtonLogout.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonLogout;
