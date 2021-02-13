import React from "react";
import { Redirect} from "react-router";
import {  useSelector } from "react-redux";
import { BrowserView, MobileView } from "react-device-detect";
import LoginForm from "../../components/common/login.component";
import RegistrationForm from "../../components/common/registration.component";


const OnBoarding = () => {
  var { auth } = useSelector((state) => state.authSlice);

  if (auth.login?.user) return <Redirect to="/home"/>;
  return (
    <div className="onBoarding">
      <BrowserView>
        <div className="onBoarding-wrapper flex justify-around border-black px-28  ">
          <div className="login w-4/12 min-w-400">
            <LoginForm></LoginForm>
          </div>
          <div className="registration w-4/12 max-w-4/12 min-w-400">
            <RegistrationForm></RegistrationForm>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <LoginForm />
      </MobileView>
    </div>
  );
};

export default OnBoarding;
