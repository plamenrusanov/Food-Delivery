import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { editProduct } from "../../services/productService";

import TextField from "../Shared/TextField/TextField";
import Button from "../Shared/Button/Button";
import FileUpload from "../Shared/FileUpload/FileUpload";

import "../CreateProduct/CreateProduct.css";

export default function EditProduct() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [submitError, setSubmitError] = useState("");
  const { _id } = useParams();
  const { products, replaceProduct } = useContext(ProductsContext);
  const product = products.find((x) => x._id === _id);
  const { values, changeHandler, resetForm, changeValue, validateField, validateForm, errors } = useForm({
    ...product,
  });


  function onValidation(key, value) {
    let result = "";
    switch (key) {
      case "name":
        if (value.length < 3 || value.length > 20) {
          result = "The product name must be between 3 and 20 symbols!";
        }
        break;

      case "price":
        let num = Number(value);
        if (!num) {
          result = "The price is not correct number!";
        }else if(num < 0){
          result = "The price can't be negative number!";
        }
        break;

      case "description":
        if (value === "") {
          result = "Plase provide some description!";
        }
        break;

      default:
        break;
    }
    return result;
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {  
      if(validateForm(onValidation)) {
        var responce = await editProduct(token, {...values, price: Number(values.price)});
        replaceProduct(responce);
        resetForm();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setSubmitError(error.message);
    }
  };

  return (
    <div className="form-holder">
      <h1 className="form-header">Edit Prodict</h1>
      {submitError && <p className="submit-error">{submitError}</p>}
      <form className="form" onSubmit={onSubmitHandler}>
        <TextField
          name="name"
          label="Name"
          inputType="text"
          value={values.name}
          onChangeValue={changeHandler}
          validate={validateField.bind(null, onValidation)}
          error={errors.name}
        />

        <TextField
          name="price"
          label="Price"
          inputType="number"
          value={values.price}
          onChangeValue={changeHandler}
          validate={validateField.bind(null, onValidation)}
          error={errors.price}
        />

        <TextField
          name="description"
          label="Description"
          inputType="text"
          value={values.description}
          onChangeValue={changeHandler}
          validate={validateField.bind(null, onValidation)}
          error={errors.description}
        />

        <FileUpload
          name="imageUrl"
          label="Image"
          value={values.imageUrl}
          onChangeValue={changeHandler}
          changeValue={changeValue}
        />

        <Button type="submit">Edit</Button>
      </form>
    </div>
  );
}
