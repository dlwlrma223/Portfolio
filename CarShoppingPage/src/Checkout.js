import React, { useContext } from "react";
import Choose from "./Choose";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
import { CartContext } from "./CartContext";

export default function Checkout() {
  let { cartItems } = useContext(CartContext);
  let cartEmpty = cartItems.length <= 0 ? true : false;
  //檢查cart內是否至小有一樣野//

  let total = cartItems.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);

  const price = 59;
  //計總價

  return (
    <>
      <Choose mainTitle="Your Cart" />
      {cartEmpty && (
        <div style={{ fontSize: "100px" }}>
          Cart is Nothing
          <Link to="/">Go Back</Link>
        </div>
      )}

      {!cartEmpty && (
        <div>
          <div id="cartSection">
            {
              /*產品列表*/
              cartItems.map((product) => (
                <div key={product.id}>
                  {/*一定要有一個唯一的數*/}
                  <img
                    src={process.env.PUBLIC_URL + "/carphoto/" + product.img}
                    alt="car"
                    style={{ width: "500px", height: "auto" }}
                  />
                  <div style={{ fontSize: "25px" }}>
                    <br />
                    {product.name}
                    <br />
                    {product.description}
                    <br />
                    {product.price}
                    數量＝{product.quantity}
                    <Quantity productInfo={product} />
                  </div>
                </div>
              ))
            }
          </div>
          <div
            id="checkOutSection"
            style={{
              marginTop: "50px",
              textAlign: "center",
              fontSize: "60px",
            }}
          >
            <div>All car Total</div>
            <div>{total}$</div>
            {
              /*價錢總數＋送貨*/
              total >= price ? (
                <div>You have 10% discount</div>
              ) : (
                <div>
                  59$ Up have 10% discount
                  <br />
                  Pls Add ${price - total}
                </div>
              )
            }
          </div>
        </div>
      )}
    </>
  );
}
