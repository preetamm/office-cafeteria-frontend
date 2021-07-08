import React from "react";
import img2 from "../../icons/food-2.png";
import img from "../../icons/food.png";
import img3 from "../../icons/food-3.png";
import Button from "../../components/common/button.component";
import CyclicMenuTiming from "../../components/common/cyclicMenuTiming.component";
import { menuItem } from "../../redux/menu/menu.selector";
import { connect } from "react-redux";
import { menuListByCategory } from "../../redux/menu/menu.selector";
import MenuContainer from "../../components/desktop/menu-container.component";
import Category from "../../components/common/category.component";


const HomePageMobile = ({menuListByCategory}) => {
  return (
    <React.Fragment>
      <div className="wrapper py-5 px-6 mobileL:px-20 ">
        <div className="category text-lg font-bold max-w-500 flex rounded-lg overflow-x-auto bg-white ">
          <Category isMobile={true}></Category>
        </div>
        <div className="mt-3">
          <CyclicMenuTiming />
        </div>
      </div>
      <div className="menu-container h-62screen mx-3">
        <MenuContainer/>
      </div>
    </React.Fragment>
  );
};

const mapStatesToProps = (state) => {
  return {
    menuListByCategory: menuListByCategory(state),
  };
};

export default connect(mapStatesToProps)(HomePageMobile);

