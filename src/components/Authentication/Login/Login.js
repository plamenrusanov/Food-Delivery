import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { login } from "../../../services/authService";
import { useForm } from "../../../hooks/useForm";

import { AuthContext } from "../../../contexts/AuthContext";
import TextField from "../../Shared/TextField/TextField";
import Button from "../../Shared/Button/Button";

import "./Login.css";

export default function Login() {
  const location = useLocation();
  const [submitError, setSubmitError] = useState("");
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    values,
    changeHandler,
    resetForm,
    validateField,
    validateForm,
    errors,
  } = useForm({
    email: "",
    password: "",
  });

  function onValidation(key, value) {
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    let result = "";
    switch (key) {
      case "email":
        if (!regex.test(String(value).toLowerCase())) {
          result = "Please provide a valid email!";
        }
        break;

      case "password":
        if (value === "") {
          result = "The field is requared!";
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
      if (validateForm(onValidation)) {
        let data = await login(values.email, values.password);
        updateUser(data);
        resetForm();
        setSubmitError("");
        if (location?.state?.url) {
          navigate(location.state.url, {
            replace: true,
            state: { showDialog: true },
          });
        } else {
          navigate("/");
        }
      }
    } catch (error) {  
      setSubmitError(error.message);
    }
  };

  return (
    <div className="form-holder">
      <h1 className="form-header">Login</h1>
      {submitError && <p className="submit-error">{submitError}</p>}
      <form className="form" onSubmit={onSubmitHandler}>
        <TextField
          name="email"
          label="Email"
          inputType="email"
          value={values.email}
          onChangeValue={changeHandler}
          error={errors.email}
          validate={validateField.bind(null, onValidation)}
        />

        <TextField
          name="password"
          label="Password"
          inputType="password"
          value={values.password}
          onChangeValue={changeHandler}
          error={errors.password}
          validate={validateField.bind(null, onValidation)}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
