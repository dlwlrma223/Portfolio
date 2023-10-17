import React from "react";
import Menu from "./Menu";
import MiddleBar from "./MiddleBar";
import FinallyBar from "./FinallyBar";
import styles from "./Update.module.css";
import { useState } from "react";

export default function UpDate() {
  let updateList = [
    {
      img: "update1.jpeg",
      type: "遊戲更新",
      name: "13.19版本更新公告",
      authorAndDate: "Riot Riru - 20小時前",
    },
    {
      img: "update2.jpeg",
      type: "遊戲更新",
      name: "13.18版本更新公告",
      authorAndDate: "Riot Riru - 2週前",
    },
    {
      img: "update3.jpeg",
      type: "遊戲更新",
      name: "13.17版本更新公告",
      authorAndDate: "Riot Riru - 4週前",
    },
    {
      img: "update4.jpeg",
      type: "遊戲更新",
      name: "13.16版本更新公告",
      authorAndDate: "Riot Riru - 上個月",
    },
    {
      img: "update5.jpeg",
      type: "遊戲更新",
      name: "13.15版本更新公告",
      authorAndDate: "Riot Riru - 2個月前",
    },
    {
      img: "update5.jpeg",
      type: "遊戲更新",
      name: "13.14版本更新公告",
      authorAndDate: "Riot Riru - 2個月前",
    },
  ];

  let updateList2 = [
    {
      img: "update7.jpeg",
      type: "遊戲更新",
      name: "13.13版本更新公告",
      authorAndDate: "Riot Riru - 3個月前",
    },
    {
      img: "update8.jpeg",
      type: "遊戲更新",
      name: "13.12版本更新公告",
      authorAndDate: "Riot Riru - 3個月前",
    },
    {
      img: "update9.jpeg",
      type: "遊戲更新",
      name: "13.11版本更新公告",
      authorAndDate: "Riot Riru - 4個月前",
    },
    {
      img: "update10.jpeg",
      type: "遊戲更新",
      name: "13.10版本更新公告",
      authorAndDate: "Riot Riru - 4個月前",
    },
    {
      img: "update11.jpeg",
      type: "遊戲更新",
      name: "13.9版本更新公告",
      authorAndDate: "Riot Riru - 5個月前",
    },
    {
      img: "update12.jpeg",
      type: "遊戲更新",
      name: "13.8版本更新公告",
      authorAndDate: "Riot Riru - 5個月前",
    },
  ];

  const [more, setMore] = useState(false);

  const handleClick = () => {
    setMore(true);
  };

  return (
    <div>
      <Menu />
      <MiddleBar mainTitle="版本更新公告" />
      <div className={styles.container}>
        {updateList.map((update) => (
          <div className={styles.all} key={update.name}>
            <img
              src={process.env.PUBLIC_URL + "/img/" + update.img}
              alt={update.name}
              className={styles.photo}
            />
            <br />
            {update.type}
            <br />
            {update.name}
            <br />
            {update.authorAndDate}
            <br />
          </div>
        ))}
      </div>
      <div className={styles.button}>
        {!more && <button onClick={handleClick}>查看更多</button>}
      </div>
      <div className={styles.container}>
        {more &&
          updateList2.map((update2) => (
            <div className={styles.all} key={update2.name}>
              <img
                src={process.env.PUBLIC_URL + "/img/" + update2.img}
                alt={update2.name}
                className={styles.photo}
              />
              <br />
              {update2.type}
              <br />
              {update2.name}
              <br />
              {update2.authorAndDate}
              <br />
            </div>
          ))}
      </div>
      <FinallyBar />
    </div>
  );
}
