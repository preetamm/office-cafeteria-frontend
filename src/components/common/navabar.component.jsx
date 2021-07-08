import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CartLogo } from "../../icons/cartIcon.svg";
import { ReactComponent as MenuLogo } from "../../icons/menuIcon.svg";
import { isMobile } from "react-device-detect";
import NavItem from "./navItem.component";



const NavigationBar = ({ toggleNavBar, isOpen }) => {
  var { auth } = useSelector((state) => state.authSlice);
  let toggleNav = () => {
    console.log(isOpen);
    isOpen ? toggleNavBar(false) : toggleNavBar(true)
  }
  return (
    <React.Fragment>
      <div className="flex text-primary font-medium   bg-white w-full h-8screen items-center px-6  sm:px-24">
        {isMobile && (
          <div className="menu-logo" onClick={() => { toggleNav() }}>
            <MenuLogo />
          </div>
        )}
        <div
          className={`${isMobile ? "mx-auto " : "sm:mr-auto"
            } text-primary font-medium`}
        >
          Pantry Pals
        </div>

        {isMobile ? (
          <div className="cart-logo">
            <Link to="/cart">
              <CartLogo />
            </Link>
          </div>
        ) : (
          <div className="menu-item  flex ">
            <NavItem urlPath={'/'} label={'Menu'}></NavItem>
            {auth.login?.user ? (
              <NavItem urlPath={'/profile'} label={'Profile'}></NavItem>
            ) : (
              <NavItem urlPath={'/onBoarding'} label={'Register'}></NavItem>
            )}
          </div>
        )}
      </div>
    </React.Fragment>

    /* <React.Fragment>
      <Link to="/menu">Menu</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">Cart</Link>
    </React.Fragment>*/
  );
};

export default NavigationBar;
