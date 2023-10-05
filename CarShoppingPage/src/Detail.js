import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Choose from "./Choose";
import Quantity from "./Quantity";

export default function Detail() {
  let params = useParams();
  //useParams是用作當你想按入到LINK再加入，他會回到對應的ID//
  let [detail, setdetail] = useState(null);

  useEffect(() => {
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
    let productInfo = productList.find((e) => {
      return e.id === parseInt(params.id);
    });
    setdetail(productInfo);
  }, []);

  return (
    <>
      {detail && (
        <div>
          <Choose mainTitle={detail.name + "Product detail"} />
          {/* #{params.id}Product detail */}
          <img
            src={process.env.PUBLIC_URL + "/carphoto/" + detail.img}
            alt="carphoto"
            style={{ width: "400px" }}
          />
          <p>name: {detail.name}</p>
          <p>price: {detail.price}</p>
          <p>description: {detail.description}</p>
          <Quantity productInfo={detail} />
        </div>
      )}
      <Link
        to="/"
        style={{
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        Back
      </Link>
    </>
  );
}
