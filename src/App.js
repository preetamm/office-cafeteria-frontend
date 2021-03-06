
import "./App.css";
import "antd/dist/antd.css";

import { isMobile } from "react-device-detect";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/common/navabar.component";
import NavigationBarMobile from './components/common/navigationBarMobile.component'
//pages
import Homepage from "./pages/homePage/homePage.page";
import CartPage from "./pages/cartPage/cartPage.page";
import ProfilePage from "./pages/profilePage/profilePage.page";
import OnBoarding from "./pages/onBoardingPage/onboardingPage.page";
import { useState } from "react";
import DeliveryTime from "./components/common/deliveryTime.component";
import { useSelector } from "react-redux";



function App() {
  const [isOpen, toggleNavBar] = useState(false);
  const {currentOrder} = useSelector((state) => state.orderSlice)
  var currentOrderTimeInMin = currentOrder && currentOrder[currentOrder.length - 1].timing
  return (
    <div className={`App`}> 
      <Router>
        <NavigationBar toggleNavBar={toggleNavBar} isOpen={isOpen} />
        {isMobile && <NavigationBarMobile isOpen={isOpen} toggleNavbar={toggleNavBar} /> }
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/onBoarding" component={OnBoarding}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/" component={Homepage}></Route>
        </Switch>
        {(currentOrder?.length >= 1) && <DeliveryTime hoursMinSecs={{hours: 0, minutes: currentOrderTimeInMin , seconds: 0 }} currentOrder={currentOrder}></DeliveryTime> }
      </Router>
    </div>
  );
}

export default App;

/*<div className="navBarMobile absolute w-70screen z-10  h-100screen bg-secondary">
        <div className="menu-item  flex flex-col text-white">
            <Link className="nav mx-10 sm:mx-6 my-7 " to="/">
              Menu
            </Link>
            <Link className="nav-item mx-10 sm:mx-6" to="/cart">
              Login/Register
            </Link>
          </div>
        </div>
        */
