import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(
    Object.keys(initialValues).reduce((result, key) => {
      result[key] = "";
      return result;
    }, {})
  );

  const validateForm = (validator) => {
    let isValid = true;
    for (let prop in values) {   
      let value = values[prop];
      let error = validator(prop, value);
      setErrors((state) => ({...state, [prop]: error}));
      if(error !== ""){
        isValid = false;
      }
    }

    return  isValid;
  };

  const validateField = (validator, fieldName) => {
    let value = values[fieldName];
    let error = validator(fieldName, value);
    setErrors((state) => ({...state, [fieldName]: error}));
  }

  const setError = (key, error) => {
    setErrors((state) => ({ ...state, [key]: error }));
  };

  const getErrors = Object.entries(errors)
    .filter(([, value]) => value !== "")
    .map(([key, error]) => ({key, error}));

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const changeValue = (name, value) => {
    setValues((state) => ({ ...state, [name]: value }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    changeHandler,
    resetForm,
    changeValue,
    setError,
    validateForm,
    validateField,
    getErrors,
    errors
  };
}
