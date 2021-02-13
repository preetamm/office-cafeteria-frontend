import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/common/navabar.component";
//pages
import Homepage from "./pages/homePage/homePage.page";
import CartPage from "./pages/cartPage/cartPage.page";
import ProfilePage from "./pages/profilePage/profilePage.page";
import OnBoarding from "./pages/onBoardingPage/onboardingPage.page";
import { MobileView } from "react-device-detect";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div className="navBarMobile absolute w-70screen z-10  h-100screen bg-secondary">
        <div className="menu-item  flex flex-col text-white">
            <Link className="nav mx-10 sm:mx-6 my-7 " to="/">
              Menu
            </Link>
            <Link className="nav-item mx-10 sm:mx-6" to="/cart">
              Login/Register
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/profile" component={ProfilePage}  />
          <Route path="/onBoarding" component={OnBoarding}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/" component={Homepage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
