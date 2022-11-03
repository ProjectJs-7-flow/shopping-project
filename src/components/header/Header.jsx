import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <ul className={styles.list}>
        <li>Market</li>
        <li>Discover</li>
        <li>Collection</li>
        <li>Winter</li>
        <input placeholder="Search..." />
      </ul>
    </div>
  );
};

export default Header;
