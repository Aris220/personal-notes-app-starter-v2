import PropTypes from "prop-types";
//File css
import styles from "../../../../styles/style.module.css";

const ButtonAuth = (props) => {
  //   const { children, onClick } = props;
  //   return (
  //     <button className={styles[""]} type="submit" title="Auth" onClick={onClick}>
  //       {children}
  //     </button>
  //   );
  // };
  const { children } = props;
  return (
    <button className={styles[""]} type="submit" title="Auth">
      {children}
    </button>
  );
};
// PropTypes validation
ButtonAuth.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonAuth;
