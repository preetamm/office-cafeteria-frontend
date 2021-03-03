import React, {useState}  from "react";
import authType from '../../constants/auth';
import LoginForm from "../../components/common/login.component";
import RegistrationForm from "../../components/common/registration.component";

const OnBoardingSelector = () => {
    
    const [onBoardingType, setOnBoardingType] = useState(authType.LOGIN);
    return(
        <div className='onBoarding'>
            {onBoardingType === authType.LOGIN ? (<LoginForm setOnBoardingType={setOnBoardingType}/>) : (<RegistrationForm setOnBoardingType={setOnBoardingType}/>)}
        </div>
    )
}

export default OnBoardingSelector