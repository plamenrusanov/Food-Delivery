import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "../../../services/authService";
import { useForm } from "../../../hooks/useForm";

import { AuthContext } from "../../../contexts/AuthContext";

import "./Register.css";
import TextField from "../../Shared/TextField/TextField";
import Button from "../../Shared/Button/Button";

export default function Register() {
  const [submitError, setSubmitError] = useState("");
  const navigate  = useNavigate();
  const { setUser } = useContext(AuthContext);
  const { values, changeHandler, resetForm } = useForm({
    username: "",
    email: "",
    password: "",
    "re-pass": "",
  });

  function validateField(key, value) {
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    let result = "";
    switch (key) {
      case "username":
        if (value.length < 3 || value.length > 20) {
          result = "The username must be between 3 and 20 symbols!";
        }
        break;

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
      case "re-pass":
        if (value !== values.password) {
          result = "Confirm password don't match password!";
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
      let data = await register(values.username, values.email, values.password);
      debugger
      setUser(data);
      resetForm();
      setSubmitError("");
      navigate("/");
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  return (
    <div className="form-holder">
      <h1 className="form-header">Registration</h1>
      {submitError && <p className="submit-error">{submitError}</p>}
      <form className="form" onSubmit={onSubmitHandler}>
        <TextField
          name="username"
          label="Username"
          inputType="text"
          value={values.username}
          onChangeValue={changeHandler}
          onValidation={validateField}
        />

        <TextField
          name="email"
          label="Email"
          inputType="text"
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

        <TextField
          name="re-pass"
          label="Confirm Password"
          inputType="password"
          value={values["re-pass"]}
          onChangeValue={changeHandler}
          onValidation={validateField}
        />

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
