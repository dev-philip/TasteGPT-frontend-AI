import React from "react";
import styles from "./loaders.module.css"; // Ensure this matches your CSS file name

export const LinearLoader: React.FC = () => {
  return (
    <div className={styles["linear-loader-wrapper"]}>
      <div className={styles["linear-loader-bar"]}></div>
    </div>
  );
};

export const SpinningLoader: React.FC = () => {
  return (
    <div className={styles["spinner-wrapper"]}>
      <div className={styles["spinner"]}>&#10024;</div> {/* Sparkle emoji ✨ */}
    </div>
  );
};
