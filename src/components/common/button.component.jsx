import React from "react";

const Button = ({ label, color, className, onclick, type, isDisabled }) => {
 
  return (
    <button
      className={` md:text-base ${isDisabled ? 'bg-gray-400' : 'bg-secondary'  } ${className}`}
      type={type}
      onClick={onclick ?  () => !isDisabled && onclick() : null}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
export default Button;
