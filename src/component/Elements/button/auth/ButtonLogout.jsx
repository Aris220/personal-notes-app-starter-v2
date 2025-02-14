import PropTypes from "prop-types";

//File css
import styles from "../../../../styles/style.module.css";

const ButtonLogout = ({ onClick, children }) => {
  return (
    <button
      className={styles["button-logout"]}
      type="button"
      title="logout"
      onClick={onClick}
    >
      {children}
      <img src="/icons/logout.svg" alt="Logout Icon" />
    </button>
  );
};

// PropTypes validation
ButtonLogout.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonLogout;
