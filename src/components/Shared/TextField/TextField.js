import { useState, useEffect } from "react";
import "./TextField.css";

export default function TextField({
  label,
  inputType,
  value,
  onChangeValue,
  validate,
  name,
  error
}) {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setFocus(value === "" ? false : true);
  },[value]);

  const onFocusHandler = (e) => {
    setFocus(true);
  };

  const onBlurHandler = (e) => {
    validate(name);
    setFocus(value === "" ? false : true);
  };

  return (
    <div>
      <label htmlFor={name} className={focus ? "label" : "label-base"}>
        {label}
      </label>
      <input
        className="form-input"
        type={inputType}
        name={name}
        id={name}
        value={value}
        onChange={onChangeValue}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );
}
