import React from "react";
import styles from "./MiddleBar.module.css";

export default function MiddleBar(props) {
  return (
    <div>
      <div className={styles.bar}>{props.mainTitle}</div>
    </div>
  );
}
