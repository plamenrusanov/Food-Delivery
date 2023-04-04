import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { AuthContext } from "../../contexts/AuthContext";

import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import Button from "../Shared/Button/Button";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";

import "./ShoppingCart.css";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const { values, calcTotal, count, clearCart } =
    useContext(ShoppingCartContext);
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  function showDeliveryDetails() {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      setShowModal(true);
    }
  }

  return (
    <>
      <div className="sc">
        {count > 0 ? (
          <>
            {values.map((x) => (
              <ShoppingCartItem key={x._id} product={x} />
            ))}
            {
              <div className="sc_total_holder">
                <Button onClickHandler={showDeliveryDetails}>
                  Delivery Details
                </Button>
                <div className="sc_total">
                  Total {calcTotal().toFixed(2)} EUR
                </div>
              </div>
            }
          </>
        ) : (
          <div className="sc_empty">
            <h2>Shopping cart is empty!</h2>
          </div>
        )}
      </div>

      {showModal && (
        <DeliveryDetails
          closeModal={closeModal}
          shoppingCartItems={values}
          clearCart={clearCart}
        />
      )}
    </>
  );
}
