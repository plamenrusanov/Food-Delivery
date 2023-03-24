import { useState } from "react";
import "./TextField.css";

export default function TextField({
  label,
  inputType,
  value,
  onChangeValue,
  name,
  onValidation,
}) {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState("");

  const onFocusHandler = (e) => {
    setFocus(true);
  };

  const onBlurHandler = (e) => {
    if(onValidation){
      let result = onValidation(e.target.name, e.target.value);
      setError(result);
    }

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
      {error.length > 0 && <p className="text-error">{error}</p>}
    </div>
  );
}
