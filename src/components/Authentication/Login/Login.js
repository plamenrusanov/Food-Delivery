import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../../services/authService";
import { useForm } from "../../../hooks/useForm";

import { AuthContext } from "../../../contexts/AuthContext";
import TextField from "../../Shared/TextField/TextField";
import Button from "../../Shared/Button/Button";

import "./Login.css";

export default function Login() {
  const [submitError, setSubmitError] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { values, changeHandler, resetForm } = useForm({
    email: "",
    password: "",
  });

  function validateField(key, value) {
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    let result = "";
    switch (key) {
      case "email":
        if (!regex.test(String(value).toLowerCase())) {
          result = "Please provide a valid email!";
        }
        break;

      case "password":
        if (value.length < 6) {
          result = "The password length must be at list 6 symbols!";
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
      let data = await login(values.email, values.password);
      debugger
      setUser(data);
      resetForm();
      setSubmitError("");
      navigate("/");
    } catch (error) {
      debugger
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
          onValidation={validateField}
        />

        <TextField
          name="password"
          label="Password"
          inputType="password"
          value={values.password}
          onChangeValue={changeHandler}
          onValidation={validateField}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
