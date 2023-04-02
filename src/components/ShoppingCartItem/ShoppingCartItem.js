import { useEffect, useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

import Button from "../Shared/Button/Button";

import "./ShoppingCartItem.css";

export default function ShoppingCartItem({ product }) {
    
  const { removeItem, increaseQty, decreaseQty } =
    useContext(ShoppingCartContext);
  const [subTotal, setSubTotal] = useState(product.qty * Number(product.price));

  useEffect(() => {
    setSubTotal(Number(product.price) * product.qty);
  }, [product.qty, product.price]);

  return (
    <main className="sci_body">
      <div className="sci_img_holder">
        <img className="sci_img" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="sci_body_content">
        <h3>{product.name}</h3>
        <p className="sci_body_price">
          <span className="sci_label">Price</span>
          {product.price} EUR
        </p>
        <div className="sci_body_qty">
          <span className="sci_label">Quantity</span>
          <Button onClickHandler={() => decreaseQty(product._id, product.qty)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <span className="sci_qty">{product.qty}</span>
          <Button onClickHandler={() => increaseQty(product._id, product.qty)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
      </div>
      <div className="sci_div_sub_total">
        <div className="sci_body_sub_total">
          <p className="sci_label">Subtotal</p>
          <p>{subTotal.toFixed(2)} EUR</p>
        </div>
      </div>
      <div className="sci_trash">
        <Button onClickHandler={() => removeItem(product._id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </div>
    </main>
  );
}
