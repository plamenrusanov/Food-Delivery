import { useState, useEffect } from "react";

import { getAll } from "../services/productService";

export function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAll()
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));
  }, []);

  const addProduct = (product) => {
    setProducts((state) => [...state, product]);
  };

  const replaceProduct = (product) => {
    var index = products.findIndex((x) => x._id === product._id);
    if (index !== -1) {
      products[index] = product;
    }
  };

  const removeProduct = (id) => {
    setProducts(products.filter((x) => x._id !== id));
  };

  return {
    products,
    addProduct,
    replaceProduct,
    removeProduct,
  };
}
