import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { ProductsContext } from "../../contexts/ProductsContext";
import { getAll } from "../../services/productService";

import CreateProduct from "../CreateProduct/CreateProduct";
import EditProduct from "../EditProduct/EditProduct";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Home from "../Home/Home";
import Logout from "../Authentication/Logout/Logout";

import "./Main.css";

export default function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
     getAll()
     .then(data => setProducts(data))
     .catch(e => console.log(e));
  }, []);

  const addProduct = (product) => {
    setProducts((state) => [...state, product]);
  };

  const replaceProduct = (product) => {
    var index = products.findIndex(x => x._id === product._id);
    if(index !== -1){
      products[index] = product;
    }
  };

  const removeProduct = (id) => {
    setProducts(products.filter(x => x._id !== id));
  };

  const contextValues = {
    products,
    addProduct,
    replaceProduct,
    removeProduct
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
          <Route path="/edit-product/:_id" element={<EditProduct />} />
        </Routes>
      </main>
    </ProductsContext.Provider>
  );
}
