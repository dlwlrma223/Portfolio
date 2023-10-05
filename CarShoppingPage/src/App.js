import ProductList from "./ProdectList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./Detail";
import Checkout from "./Checkout";
import { CartContext } from "./CartContext";
import { useState } from "react";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <div className="top-bar">
          <Link to="/" className="bar">
            Main
          </Link>
          <br />
          <Link to="/Checkout" className="bar">
            Pay
          </Link>
          <br />
          <Link to="/Detail" className="bar">
            Cars Detail
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/Detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
