import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ProductsContext } from "../../contexts/ProductsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { GetAll } from "../../services/productService";

import CreateProduct from "../CreateProduct/CreateProduct";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Home from "../Home/Home";
import Logout from "../Authentication/Logout/Logout";

import "./Main.css";

export default function Main() {
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    GetAll(token)
    .then(data => setProducts(data))
    .catch(error => console.log(error))

  }, [token, setProducts]);

  const addProduct = (product) => {
    setProducts((state) => [...state, product]);
  };

  const contextValues = {
    products,
    addProduct,
  };

  return (
    <ProductsContext.Provider value={contextValues}>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </main>
    </ProductsContext.Provider>
  );
}
