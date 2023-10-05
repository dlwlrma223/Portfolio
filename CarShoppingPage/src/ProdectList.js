import React from "react";
import logo from "./carlogo.webp";
import styles from "./product.module.css";
import { useState, useEffect } from "react"; //React Hook//
import { Link } from "react-router-dom";
import Choose from "./Choose";
import Quantity from "./Quantity";

export default function ProductList() {
  let productList = [
    {
      id: 1,
      name: "Tesla",
      price: 30,
      description: "Nice Car",
      img: "tesla.jpeg",
    },
    {
      id: 2,
      name: "Toyota",
      price: 5,
      description: "Good Car",
      img: "toyota.jpeg",
    },
    {
      id: 3,
      name: "BENZ",
      price: 10,
      description: "Bad Car",
      img: "benz.jpeg",
    },
  ];

  // let [productList, setProductList] = useState([]);

  //call back function
  // useEffect(() => {
  //   fetch("http://hoyinleung.github.io/demoapi/react-basic-product.json")
  //     .then((response) => response.json())
  //     .then((data) => setProductList(data));
  //1.無第二參數：component每次render都會觸發到
  //2.Dependency Array是空的時候才會觸發： 只會在第一次網頁render時觸發
  //3.Dependency Array有變數時：第一次render時 和 有關變數觸發時
  // }, []); //<== Dependency Array

  // const [show, setShow] = useState(false);

  // const handleClick = () => {
  //   setShow(false);
  // };
  //原始值為false 當setShow為true時 就可以show產品出現

  return (
    <>
      <Choose
        mainTitle="Pls Choose Your Car"
        subTitle="Before 30/9 have 90% discount"
      />

      {/* {show && <button onClick={handleClick}>Hide</button>}
      {!show && <button onClick={() => setShow(true)}>Show</button>} */}
      {/*再加入&& (如果句中有logic要加{}) */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={logo}
          style={{
            width: "70%",
            height: "50%",
          }}
          alt="logo"
        />
      </div>
      <div className={styles.all}>
        {/* {
        prodectList.map((product) => {
          return (
            <div>{product.name}</div>
        )
      })
    } 傳統寫法*/}
        {productList.map((product) => (
          <React.Fragment className={styles.product} key={product.id}>
            <Link to={"/Detail/" + product.id}>
              <img
                src={process.env.PUBLIC_URL + "/carphoto/" + product.img}
                className={styles.productPhoto}
                alt="carphoto"
              />
            </Link>
            <div className={styles.text}>
              {product.name}
              <br />
              {product.price}
              <br />
              {product.description}
              <br />
            </div>
            <div className={styles.click}>
              <Quantity productInfo={product} />
            </div>
          </React.Fragment>
          // {/*兩種加入圖片方式，將圖片flie放入public，然後用process.env.PUBLIC_URL+"檔案位置"*/}
          // {/*另一種是直接放到檔案內，以import from <img src={component}/> 使用*/}
        ))}
      </div>
    </>
  );
}
