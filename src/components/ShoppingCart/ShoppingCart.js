import { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";

import "./ShoppingCart.css";

export default function ShoppingCart() {
  const { values, calcTotal, count } = useContext(ShoppingCartContext);

  return (
    <div className="sc">
      {count > 0 ? (
        <>
          {values.map((x) => (
            <ShoppingCartItem key={x._id} product={x} />
          ))}
          {
            <div className="sc_total_holder">
              Total {calcTotal().toFixed(2)}
            </div>
          }
        </>
      ) : (
        <div className="sc_empty">
          <h2>Shopping cart is empty!</h2>
        </div>
      )}
    </div>
  );
}
