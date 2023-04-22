import { useState, useEffect } from "react";

import "../TextField/TextField.css";

export default function NumberField({
  label,
  value,
  onChangeValue,
  validate,
  name,
  error
}) {
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState(value?.toFixed(2));
  
  useEffect(() => {
    setFocus(value === "" ? false : true);
  },[value]);

  const onFocusHandler = (e) => {
    setFocus(true);
  };

  const onBlurHandler = (e) => {
    validate(name);
    setFocus(value === "" ? false : true);
    setInputValue(value?.toFixed(2))
  };

  return (
    <div>
      <label htmlFor={name} className={focus ? "label" : "label-base"}>
        {label}
      </label>
      <input
        className="form-input"
        type="text"
        name={name}
        id={name}
        value={inputValue}
        onChange={onChangeValue}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );
}
