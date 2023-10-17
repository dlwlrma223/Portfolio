import React from "react";
import styles from "./FinallyBar.module.css";

export default function FinallyBar() {
  return (
    <div className={styles.all}>
      <p style={{ margin: "30px" }}>聯絡客服</p>
      <p style={{ margin: "30px" }}>隱私權政策</p>
      <p style={{ margin: "30px" }}>服務條款</p>
    </div>
  );
}
