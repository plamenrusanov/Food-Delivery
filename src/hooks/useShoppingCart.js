import { useState, useEffect } from "react";

export function useShoppingCart() {
  const lsKey = "cart";
  const [values, setValues] = useState([]);

  useEffect(() => {
    let cart = window.localStorage.getItem(lsKey);
    if (cart) {
      cart = JSON.parse(cart);
      setValues(cart);
    }
  }, []);

  useEffect(
    () => {
      return  () => { let data = JSON.stringify(values);
      window.localStorage.setItem(lsKey, data); }
    },
    [values]
  );

  const addItem = (item) => {
    let current = values.find(x => x._id === item._id);
    if(current){
        setValues((state) => state.map(x => ({...x, qty: (x.qty + item.qty)})));
    }else{
        setValues((state) => ([ ...state, item ]));
    }
  };

  const calcTotal = () => {
    return values.reduce((accumulator, el) => {
      return accumulator += Number(el.Price) * el.qty;
    }, 0);
  };

  const clearCart = () => {
    setValues([]);
  };

  const removeItem = (id) => {
    setValues((state) => state.filter((x) => x._id !== id));
  };

  const count = values.length;

  return {
    count,
    values,
    addItem,
    calcTotal,
    clearCart,
    removeItem,
  };
}
