import { useState } from "react";

export function useShoppingCart() {
  const [values, setValues] = useState([]);

  const addItem = (item) => {
    let current = values.find(x => x._id === item._id);
    if(current){
        setValues((state) => state.map(x => ({...x, qty: (x.qty + item.qty)})));
    }else{
        setValues((state) => ([ ...state, item ]));
    }
  };

  const calcTotal = () => {
    return values.reduce((accumulator, el) =>  accumulator += Number(el.price) * el.qty, 0);
  };

  const clearCart = () => {
    setValues([]);
  };

  const removeItem = (id) => {
    setValues((state) => state.filter((x) => x._id !== id));
  };

  const count = values.length;

  function increaseQty(id, quantity) {
    quantity++;
    setValues((state) => state.map(el => el._id === id ? {...el, qty: quantity } : el));
  }

  function decreaseQty(id, quantity) {
    quantity--;
    if (quantity < 1) {
      quantity = 1;
    }
    setValues((state) => state.map(el => el._id === id ? {...el, qty: quantity } : el));
  }

  return {
    count,
    values,
    addItem,
    calcTotal,
    clearCart,
    removeItem,
    increaseQty,
    decreaseQty,
  };
}
