import { useState, useEffect } from "react";

import CloudinaryUploadWidget from "../CloudinaryUploadWidget/CloudinaryUploadWidget";

import "./FileUpload.css";

export default function FileUpload({
  label,
  value,
  onChangeValue,
  name,
  changeValue,
}) {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setFocus(value === "" ? false : true);
  }, [value]);

  const onFocusHandler = (e) => {
    setFocus(true);
  };

  const onBlurHandler = (e) => {
    setFocus(value === "" ? false : true);
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
        value={value}
        onChange={onChangeValue}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      <CloudinaryUploadWidget
        changeValue={changeValue.bind(null, name)}
        fixLabel={setFocus}
      />
    </div>
  );
}
