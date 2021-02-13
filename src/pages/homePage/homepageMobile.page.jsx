import React from "react";
import img2 from "../../icons/food-2.png";
import img from "../../icons/food.png";
import img3 from "../../icons/food-3.png";
import Button from "../../components/common/button.component";
import CyclicMenuTiming from "../../components/common/cyclicMenuTiming.component";
import { menuItem } from "../../redux/menu/menu.selector";
import { connect } from "react-redux";
import MenuItem from "../../components/common/menuItem.component";
import menuContainerComponent from "../../components/desktop/menu-container.component";
import { menuListByCategory } from "../../redux/menu/menu.selector";


const HomePageMobile = ({menuListByCategory}) => {
  return (
    <React.Fragment>
      <div className="wrapper py-5 px-6 mobileL:px-20 ">
        <div className="category text-lg font-bold max-w-500 flex rounded-lg overflow-x-auto bg-white ">
          <div className="category-item py-3 px-2">Cycle Menu</div>
          <div className="category-item py-3 px-2">Fast Food</div>
          <div className="category-item  py-3 px-2">Desserts</div>
          <div className="category-item py-3 px-2">Beverages</div>
        </div>
        <div className="mt-3">
          <CyclicMenuTiming />
        </div>
      </div>
      <div className="menu-container h-62screen mx-3">
      {menuListByCategory.map((item) => <MenuItem key={item.id}  id={item.id}></MenuItem>)}

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

/*
<div className="notifier-bar fixed  bg-white py-2 w- h-4 flex items-center bottom-0  w-100screen ">
        <div className="amount-group w-2/4">
          <h3 className="text-xs">Subtotal</h3>
          <h2 className="text-base font-semibold">$9.5</h2>
        </div>
        <div className="button text-white px-5 w-2/4">
          <Button
            label="ADD TO BAG"
            className="bg-primary px-2 py-2 rounded-lg text-danger text-base"
          ></Button>
        </div>
      </div>
*/
