import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { create } from "../../services/orderService";
import { AuthContext } from "../../contexts/AuthContext";

import Button from "../Shared/Button/Button";
import TextField from "../Shared/TextField/TextField";
import ModalDialogCloseButton from "../Shared/ModalDialogCloseButton/ModalDialogCloseButton";

import "./DeliveryDetails.css";

export default function DeliveryDetails({ closeModal, shoppingCartItems, clearCart }) {
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();
  const { token, userName } = useContext(AuthContext);
  const {
    values,
    changeHandler,
    resetForm,
    validateForm,
    validateField,
    errors,
  } = useForm({
    name: userName,
    address: "",
    phone: "",
  });

  const onValidation = (key, value) => {
    let errorText = "";
    switch (key) {
      case "name":
        if (value === "") {
          errorText = "The field 'Name' is requared!";
        }
        break;
      case "address":
        if (value === "") {
          errorText = "The field 'Address' is requared!";
        }
        break;
      case "phone":
        if (value === "") {
          errorText = "The field 'Phone Number' is requared!";
        }
        break;
      default:
        break;
    }
    return errorText;
  };

  async function sendOrder() {
    if (validateForm(onValidation)) {
      try {
        await create(token, values, shoppingCartItems);
        clearCart();
        resetForm();
        navigate("/my-orders");
      } catch (error) {
        setSubmitError(error?.message);
        console.log(error);
      }
    }
  }
  return (
    <div className="dd_holder">
      <section className="dd">
        <header className="dd_header">
          <h2 className="dd_title">Delivery Details</h2>
          <ModalDialogCloseButton clickHandler={() => closeModal()} />
        </header>
        {submitError && <p className="submit-error">{submitError}</p>}
        <main className="dd_body">
          <TextField
            inputType="text"
            value={values?.name}
            label="Name"
            name="name"
            onChangeValue={changeHandler}
            error={errors.name}
            validate={validateField.bind(null, onValidation)}
          />
          <TextField
            inputType="text"
            value={values.address}
            label="Address"
            name="address"
            onChangeValue={changeHandler}
            error={errors.address}
            validate={validateField.bind(null, onValidation)}
          />
          <TextField
            inputType="text"
            value={values.phone}
            label="Phone Number"
            name="phone"
            onChangeValue={changeHandler}
            error={errors.phone}
            validate={validateField.bind(null, onValidation)}
          />
        </main>
        <footer className="dd_actions">
          <Button onClickHandler={() => closeModal()}>Close</Button>
          <Button onClickHandler={sendOrder}>Send Order</Button>
        </footer>
      </section>
    </div>
  );
}
