import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <div className={styles.menu}>
        <Link to="/" className={styles.box}>
          <p>首頁</p>
        </Link>
        <Link to="/HeroList" className={styles.box}>
          <p>英雄列表</p>
        </Link>
        <Link to="/UpDate" className={styles.box}>
          <p>最新更新</p>
        </Link>
        <video className={styles.videoBackground} autoPlay loop muted>
          <source src="/img/BgMovie.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}
