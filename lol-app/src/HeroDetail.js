import React from "react";
import Menu from "./Menu";
import MiddleBar from "./MiddleBar";
import FinallyBar from "./FinallyBar";
import styles from "./Hero.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeroList() {
  let params = useParams();
  let [detail, setdetail] = useState(null);

  useEffect(() => {
    let HeroList = [
      {
        id: 1,
        name: "伊澤瑞爾",
        description:
          "伊澤瑞爾是一名瀟灑帥氣的探險家，他憑藉著偶然得到的魔法祕寶洗劫失落已久的墓穴，並輕鬆擺脫那些古老的詛咒。膽量過人的他熱愛挑戰看似不可能脫逃的險境，雖然一部分可以歸功於他的機智，但他主要還是仰賴他手上那個來自古蘇瑞瑪的魔法臂鎧。這個臂鎧讓伊澤瑞爾可以憑空發射出毀滅性的祕術能量。每次見到伊澤瑞爾的時候都可以確定一件事：那就是麻煩即將找上門。",
        img: "EZ.png",
      },
      {
        id: 2,
        name: "吉茵珂絲",
        description:
          "來自佐恩的吉茵珂絲是一名衝動的瘋狂罪犯，以肆意破壞為樂，絲毫不顧後果。她使用各式危險武器，來製造響徹雲霄、火光沖天的大爆炸，留下混亂的景象與恐慌的人群。吉茵珂絲最無法忍受無聊，所以不管去到哪裡，總是會歡欣鼓舞地帶來她招牌的人間煉獄。",
        img: "JINX.png",
      },
      {
        id: 3,
        name: "李星",
        description:
          "李星是精通愛歐尼亞古代武術的大師，也是秉持著操守的鬥士，每當眼前出現挑戰，他體內蘊藏的龍魂之力就會發揮作用，帶給他超凡的力量。雖然許多年前他失去了視力，但這名武僧卻依舊致力於保護他的家鄉，消滅任何膽敢破壞愛歐尼亞神聖平衡的惡徒。見他時常沉靜冥思便低估他的人，最後不是被他的拳頭擊倒，就是慘死於他的迴旋踢之下。",
        img: "LEE.png",
      },
      {
        id: 4,
        name: "艾希",
        description:
          "艾希是艾伐洛森部落的領袖，也是寒霜之裔的戰爭之母，她統御著北方最大的遊牧部族。艾希性格堅毅、天資聰穎，而且充滿理想，但是卻不太習慣領導者這個身分，而她拿著一把真霜冰晶打造而成的冰結長弓，體內寒霜之裔的血統使她可以完美運用這珍奇的武器。人民則相信她是英雄艾伐洛森的轉世，艾希畢生的心願也同是收復他們部族在遠古時期曾經擁有的領地，並再次統一弗雷爾卓德。",
        img: "ASHE.png",
      },
      {
        id: 5,
        name: "易大師",
        description:
          "易大師磨練陶冶自己的思想與體魄，他的身心近乎合一。雖然他視暴力為迫於無奈的最後手段，但他那迅速而優雅的刀鋒總能確保問題迎刃而解。身為最後一名愛歐尼亞「無極之道」的傳人，他畢生致力於將這武術延續下去——利用他那七孔洞悉護鏡的能力來審查具有潛力的新徒弟，並找出他們之中最有前途的弟子。",
        img: "YI.png",
      },
      {
        id: 6,
        name: "拉克絲",
        description:
          "拉克絲安娜．皇冠守衛來自蒂瑪西亞，一個恐懼和懷疑著魔法能力的孤立國度。她可以隨心所欲操控光亮，因此成長過程中都害怕會被發現並遭到流放，也被迫隱瞞擁有魔法的真相，只為了維護家族崇高的聲譽。儘管如此，拉克絲擁有樂觀和堅韌的心，讓她自己欣然接受了所擁有的獨特能力，並暗中運用這些能力來為她的祖國進一份心力。",
        img: "LUX.png",
      },
    ];
    let heroInfo = HeroList.find((e) => {
      return e.id === parseInt(params.id);
    });
    setdetail(heroInfo);
  }, []);

  return (
    <>
      {detail && (
        <div>
          <Menu />
          <MiddleBar mainTitle="英雄" />
          <Link to="/HeroList">
            <div className={styles.herodetail}>
              <img
                src={process.env.PUBLIC_URL + "/img/" + detail.img}
                className={styles.herophoto}
                alt="hero"
              />
            </div>
          </Link>
          <p className={styles.herodetail}>英雄名稱: {detail.name}</p>
          <p className={styles.herodetail}>英雄描述: {detail.description}</p>
        </div>
      )}
      <FinallyBar />
    </>
  );
}
