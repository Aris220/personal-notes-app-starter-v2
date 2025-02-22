import styles from "../../styles/loading.module.css";

const LoadingNote = () => {
  return (
    <div className={styles["skeleton-card"]}>
      <div className={styles["skeleton-title"]}></div>
      <div className={styles["skeleton-body"]}></div>
      <div className={styles["skeleton-date"]}></div>
    </div>
  );
};

export default LoadingNote;
