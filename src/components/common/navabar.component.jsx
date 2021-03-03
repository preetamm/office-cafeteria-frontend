import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CartLogo } from "../../icons/cartIcon.svg";
import { ReactComponent as MenuLogo } from "../../icons/menuIcon.svg";
import { isMobile } from "react-device-detect";

const NavigationBar = ({toggleNavBar, isOpen}) => {
  var { auth } = useSelector((state) => state.authSlice);
  let toggleNav = () => {
    console.log(isOpen);
    isOpen? toggleNavBar(false) : toggleNavBar(true)
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
              <Link className="nav mx-10 sm:mx-6" to="/">
                Menu
            </Link>

              {auth.login?.user ? (
                <Link className="nav-item mx-10 sm:mx-6" to="/profile">
                  Profile
                </Link>
              ) : (
                  <Link className="nav-item mx-10 sm:mx-6" to="/onBoarding">
                    Login/Register
                  </Link>
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
