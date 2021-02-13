import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInputgroup from "./formInputGroup.component";
import Button from "./button.component";
import { isMobile, MobileView, BrowserView } from "react-device-detect";
import { Formik, Field, Form } from "formik";
import { loginUser } from "../../redux/auth/auth.slice";


const LoginForm = () => {
  const dispatch = useDispatch();
  var { auth } = useSelector((state) => state.authSlice);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        dispatch(loginUser(values))
      }}
    >
      <Form>
        <div className="relative px-10  py-8 login-form">
          <div className="registration flex flex-col items-start w-auto">
            <h1 className="mb-10 font-lg font-weight-800 text-xl ">Login</h1>
            <FormInputgroup type="LOGIN"></FormInputgroup>
            <Button
              label={auth.login === 'Loading' ? 'Loading' : "Login"}
              type="submit"
              className={
                "self-center bg-primary mt-8 px-8 py-2 text-white text-lg"
              }
            ></Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

/*
 <div className="relative px-10  py-8 login-form">
            <div className="registration flex flex-col items-start w-auto">
              <h1 className="mb-10 font-lg font-weight-800 text-xl ">Login</h1>
              <form className="registration-form w-full flex flex-col">
                <div className="registration-form items-center flex-col h-auto text-gray-400 min-w-400">
                  <div className="relative w-full h-12 mb-4 md:mb-2 ">
                    <Field
                      type="text"
                      id ='employeeID'
                      className=" form-input mb-5 mb z-10  w-full px-4 text-base outline-none border-b-2 absolute bg-transparent border-green-500 "
                      name="employeeID"
                    />
                    <label
                      htmlFor="fullName"
                      className=" form-label z-0 w-auto absolute md:text-sm"
                    >
                      employeeID
                    </label>
                  </div>
                  <div className="relative w-full h-12 mb-4 md:mb-2 ">
                    <Field
                      type="text"
                      id="password"
                      className=" form-input mb-5 mb z-10  w-full px-4 text-base outline-none border-b-2 absolute bg-transparent border-green-500 "
                      name="password"
                    />
                    <label
                      htmlFor="fullName"
                      className=" form-label z-0 w-auto absolute md:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <Button
                    label="Login"
                    className={
                      "self-center bg-primary mt-8 px-8 py-2 text-white text-lg"
                    }
                  ></Button>
                  {isMobile && (
                    <div className="mt-4">
                      Don't have an account?
                      <span className="text-blue-600">Register</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          */
export default LoginForm;
