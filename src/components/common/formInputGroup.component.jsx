import React from "react";
import FormInput from "./formInput.component";

const FormInputgroup = ({ type }) => {
  return (
    <React.Fragment>
      <div className="registration-form items-center flex-col h-auto text-gray-400 min-w-400">
        {type === "REGISTER" && (
          <div>
            <FormInput
              label="Full Name"
              inputType="text"
              name="fullName"
            ></FormInput>

            <FormInput
              label="Employee ID"
              inputType="text"
              name="employeeID"
            ></FormInput>
            <FormInput
              label="Password"
              inputType="password"
              name="password"
            ></FormInput>
            <FormInput
              label="Confirm Password"
              inputType="password"
              name="confirmPassword"
            ></FormInput>
          </div>
        )}

        {type === "LOGIN" && (
          <div>
            <FormInput
              label="Employee ID"
              inputType="text"
              name="employeeID"
            ></FormInput>
            <FormInput
              label="Password"
              inputType="password"
              name="password"
            ></FormInput>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default FormInputgroup;
