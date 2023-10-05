import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function Quantity({ productInfo }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  //看購物車內有冇產品
  let productIndexInCart = cartItems.findIndex((element) => {
    return element.id === productInfo.id;
  });
  //這個function做的 是找出Quantity存在購物車內嗎？
  //findIndexx
  //如果購物車內找到對應ID的產品 => 購物車的什麼Index
  //如果沒有 => -1

  let [num, setnum] = useState(
    productIndexInCart === -1 ? 0 : cartItems[productIndexInCart].quantity
  );
  //完全不懂

  const handleAdd = () => {
    if (productIndexInCart === -1) {
      //購物車本身沒有，在cartItems array中加個新element (object)
      setCartItems([
        {
          id: productInfo.id,
          name: productInfo.name,
          price: productInfo.price,
          description: productInfo.description,
          img: productInfo.img,
          quantity: 1,
        },
        ...cartItems,
      ]);
    } else {
      //購物車有的話，只加quantity
      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity++;
      setCartItems(newCartArray);
    }

    setnum(num + 1);
  };

  const handleSubtract = () => {
    if (cartItems[productIndexInCart].quantity === 1) {
      //購物車只有一件 就要直接remove object
      let newCartArray = [...cartItems];
      newCartArray.splice(productIndexInCart, 1);
      setCartItems(newCartArray);
    } else {
      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity--;
      setCartItems(newCartArray);
    }
    setnum(num - 1);
  };

  return (
    <>
      {num === 0 ? (
        <button onClick={handleAdd}>Add {productInfo.name} in Cert</button>
      ) : (
        <div>
          <button onClick={handleSubtract}>-</button>
          {num}Piece
          <button onClick={handleAdd}>+</button>
        </div>
      )}
    </>
  );
}
