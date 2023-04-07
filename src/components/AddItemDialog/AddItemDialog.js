import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

import ModalDialogCloseButton from "../Shared/ModalDialogCloseButton/ModalDialogCloseButton";
import Button from "../Shared/Button/Button";

import "./AddItemDialog.css";

export default function AddItemDialog({ product, hideDialog }) {
  const [subTotal, setSubTotal] = useState(Number(product.price));
  const [qty, setQty] = useState(1);
  const { addItem } = useContext(ShoppingCartContext);

  function onAddItem() {
    addItem({ ...product, qty, subTotal });
    hideDialog();
  }

  function closeDialog() {
    hideDialog();
  }

  function increaseQty() {
    let quantity = qty + 1;
    setQty(quantity);
    setSubTotal(Number(product.price) * quantity);
  }

  function decreaseQty() {
    let quantity = qty - 1;
    if (quantity < 1) {
      quantity = 1;
    }
    setQty(quantity);
    setSubTotal(Number(product.price) * quantity);
  }

  return (
    <div className="ai_holder">
      <section className="ai">
        <header className="ai_header">
          <h2 className="ai_title">Add to shopping cart</h2>
          <ModalDialogCloseButton clickHandler={closeDialog} />
        </header>
        <main className="ai_body">
          <h2>{product.name}</h2>
          <div className="img_holder">
            <img className="img" src={product.imageUrl} alt={product.name} />
          </div>
          <div className="body_content">
            <p className="body_price">
              <span className="ai_label">Price</span>
              {product.price.toFixed(2)} EUR
            </p>
            <div className="body_qty">
              <span className="ai_label">Quantity</span>
              <Button onClickHandler={decreaseQty}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <span className="qty">{qty}</span>
              <Button onClickHandler={increaseQty}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
            <p className="body_sub_total">
              <span className="ai_label">Subtotal</span>
              {subTotal.toFixed(2)} EUR
            </p>
          </div>
        </main>
        <footer className="ai_actions">
          <Button onClickHandler={closeDialog}>Close</Button>
          <Button onClickHandler={onAddItem}>Add</Button>
        </footer>
      </section>
    </div>
  );
}
