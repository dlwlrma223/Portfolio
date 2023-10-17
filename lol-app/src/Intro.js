import React from "react";
import styles from "./Intro.module.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MiddleBar from "./MiddleBar";
import { useState } from "react";
import Menu from "./Menu";
import FinallyBar from "./FinallyBar";
import Carousell from "./Carousell";

export default function Intro() {
  let images = [
    { src: "/img/event1.jpeg" },
    { src: "/img/event2.jpeg" },
    { src: "/img/event3.jpeg" },
  ];

  let gameplay = [
    {
      intro:
        "最受歡迎的遊戲模式努力擊潰對線敵軍,投身驚險刺激的5v5團戰,並搶先對手一步摧毀敵方主堡！",
      src: "/img/gameplay1.jpeg",
    },
    {
      intro:
        "全部隨機,全部中路在這個5v5模式中操作隨機英雄,在冰天雪地中的大橋上衝向敵方主堡,體驗大混戰的樂趣！",
      src: "/img/gameplay2.png",
    },
  ];

  const [game, setgame] = useState(null);

  const handleButtonClick = (index) => {
    setgame(gameplay[index]);
  };

  return (
    <div>
      <Menu />
      <MiddleBar mainTitle="英雄聯盟" />
      <div className={styles.all}>
        <div className={styles.photo}>
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className={styles.title}>遊戲簡介</div>
        <div className={styles.intro}>
          《英雄聯盟》英語:League of
          Legends,簡稱LoL是由拳頭遊戲開發及發行的一款5v5多人線上戰鬥技術型MOBA遊戲,遊戲為免費模式進行並提供付費道具服務。該遊戲是受到《魔獸爭霸III:寒冰霸權》中一個名為DotA的第三方自定義地圖啟發而誕生,且至今仍不斷定期更新。
          在《英雄聯盟》裡,玩家扮演一個不可見的召喚師,並操控具有獨特能力的「英雄」與電腦AI或真人玩家控制的英雄對戰,遊戲通常的勝利目標是要摧毀對方的主要基地「主堡」，英雄在每場遊戲開始時都比較弱，他們會隨著遊戲進展而升級，但這些數值會在下一場遊戲重新開始時重置。
        </div>
      </div>
      <MiddleBar mainTitle="遊戲玩法" />
      <div className={styles.next}>
        <div className={styles.text}>
          <div
            style={{
              fontSize: "35px",
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            多款玩法
          </div>
          <div
            style={{
              fontSize: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            任君選擇
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          {game && (
            <>
              <img
                src={process.env.PUBLIC_URL + game.src}
                style={{ width: "550px", height: "350px", margin: "50px" }}
                alt="Gameplay"
              />
              <div style={{ color: "white" }}>{game.intro}</div>
            </>
          )}
        </div>
        <div className={styles.button}>
          <button
            style={{ marginBottom: "50px" }}
            onClick={() => handleButtonClick(0)}
          >
            召喚峽谷
          </button>
          <button onClick={() => handleButtonClick(1)}>隨機單中</button>
        </div>
      </div>
      <FinallyBar />
      <Carousell />
    </div>
  );
}
