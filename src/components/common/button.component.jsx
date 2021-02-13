import React from "react";

const Button = ({ label, color, className, onclick, type, isDisabled }) => {
  return (
    <button
      className={` md:text-base ${className}`}
      type={type}
      onClick={onclick ? () => onclick() : null}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
export default Button;
