import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const changeValue = (name, value) => {
    setValues((state) => ({...state, [name]: value}));
  }

  const resetForm = () =>{
    setValues(initialValues);
  }

  return {
    values,
    changeHandler,
    resetForm,
    changeValue
  }
}
