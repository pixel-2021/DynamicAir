import React, { useState } from "react";

export function FormInput(props) {
  // const [inputState, setInput] = useState({ value :  });
  const [isTouched, setTouched] = useState(false);
  const [inputValue, setValue] = useState("");
  const [isValid, setValid] = useState(true);
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidNumber, setValidNumber] = useState(false);

  const handleInput = e => {
    setValue(e.target.value);
    validate(e.target.value);
  };

  const validate = val => {
    if (props.type === "email") {
      if (emailIsValid(val)) setValidEmail(true);
      else setValid(false);
    }
    if (props.type === "number") {
      if (isNum(val)) setValidNumber(true);
      else setValid(false);
    }
  };
  return (
    <div>
     
      <input
        type={props.type}
        className="form-control"
        value={inputValue}
        placeholder={props.placeholder}
        onChange={handleInput}
        onBlur={() => setTouched(true)}
      />
      {props.required && isTouched && !inputValue && (
        <p style={{ color: "red" }}>Please enter {props.label}</p>
      )}
      {props.label == 'email' && inputValue && isTouched && !isValidEmail && (
        <p style={{ color: "red" }}>Please enter valid {props.label}</p>
      )}
       {props.label == 'phone number' && inputValue && isTouched && !isValidNumber && (
        <p style={{ color: "red" }}>Please enter valid {props.label}</p>
      )}
    </div>
  );
}


function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isNum(val) {
  return /^[0-9]{10}$/.test(val);
}
