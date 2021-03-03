import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import Button from "./button.component";
import FormInputgroup from "./formInputGroup.component";
import { Formik, Form } from "formik";
import { registerUser } from "../../redux/auth/auth.slice";
import authType from '../../constants/auth';

const RegistrationForm = ({setOnBoardingType}) => {
  const dispatch = useDispatch();
  var {auth} = useSelector((state) => state.authSlice)

  return (
    <Formik
      initialValues={{
        fullName : '',
        employeeID : '',
        password : '',
        confirmPassword : ''
      }}
      onSubmit={async (values) => {
        dispatch(registerUser(values));
      }}
    >
      <Form>
        <div className="relative px-10 py-8">
          <div className="registration flex flex-col items-start w-auto">
            <h1 className="mb-10 font-lg font-weight-800 text-xl ">
              Create Account
            </h1>
            <FormInputgroup type="REGISTER"></FormInputgroup>
            <div className="uid-group flex w-2/4  justify-around">
              <div className="w-2/5 mr-4  ">
                <Button
                  label="Upload UID"
                  className={" ml-2 mr-6 w-full bg-secondary text-white px-4"}
                ></Button>
              </div>
              <div className="photo-col border-gray-400 border-2 h-28 w-3/5"></div>
            </div>
            <Button
              label={!auth.register ? 'Register' : "Loading"}
              className={
                "self-center bg-primary mt-8 px-8 py-2 text-white text-lg font-medium rounded-md"
              }
            ></Button>
            {isMobile && (
              <div className="mt-4 self-center">
                ALready have an account?
                <span className="text-blue-600" onClick={() => {setOnBoardingType(authType.LOGIN)}}>Login</span>
              </div>
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
