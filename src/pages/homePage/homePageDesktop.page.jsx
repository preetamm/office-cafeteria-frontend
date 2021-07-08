import React from "react";

import CyclicMenuTiming from "../../components/common/cyclicMenuTiming.component";
import MenuItem from "../../components/common/menuItem.component";
import { ReactComponent as GoogleLogo } from "../../icons/googleIcon.svg";
import { ReactComponent as PaypalLogo } from "../../icons/paypalIcon.svg";
import { ReactComponent as DebitLogo } from "../../icons/debitIcon.svg";
import { ReactComponent as PayOnCounterLogo } from "../../icons/payOnCounterIcon.svg";
import { Formik, Field, Form } from 'formik';
import Button from "../../components/common/button.component";
import OrderList from "../../components/common/orderList.component";
import CategoryDesktop from "../../components/desktop/category.component";
import MenuContainer from "../../components/desktop/menu-container.component";
import OrderForm from "../../components/common/orderForm.component";

const HomePageDesktop = () => {
  return (
    <React.Fragment>
      <div className="wrapper w-100screen h-92screen py-8  px-10 flex">
        <div className="menu-section w-73 flex  h-full ">
          <div className="category-section max-h-650 grid  justify-center content-center grid-cols-1  h-full  w-27">
            <CategoryDesktop></CategoryDesktop>
          </div>
          <div className="menu-list-section flex items-center flex-col h-full content-center w-73">
            <CyclicMenuTiming></CyclicMenuTiming>
            <div className="menu-desktop-container-wrapper mt-3">
              <div className="title text-center text-header text-base">
                Breakfast Menu
              </div>
              <div className="menu-desktop-container grid grid-cols-1  laptop:grid-cols-2 laptop:gap-y-4  auto-rows-max h-60screen  grid-flow-row overflow-y-scroll self-stretch">
                <MenuContainer></MenuContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="order-section max-h-650 bg-opacity-50 w-27 h-full px-5 bg-secondary">
          <OrderList></OrderList>
          <OrderForm></OrderForm>

        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageDesktop;
