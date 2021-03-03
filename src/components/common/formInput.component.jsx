import { Field } from "formik";
import React from "react";

const FormInput = ({ label, inputType, name, value }) => {
  return (
    <React.Fragment>
      <div className="relative w-full h-12 mb-4 md:mb-2 ">
        <Field
          type={inputType}
          className=" form-input mb-5 mb z-10  w-full px-4 text-base outline-none border-b-2 absolute bg-transparent border-green-500 text-black "
          name={name}
          value={value}
        />
        <label htmlFor={name} className=" form-label z-0 w-auto absolute md:text-sm">
          {label}
        </label>
      </div>
    </React.Fragment>
  );
};

export default FormInput;
