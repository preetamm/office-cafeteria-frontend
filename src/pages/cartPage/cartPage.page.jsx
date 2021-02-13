import React from "react";
import { ReactComponent as GoogleLogo } from "../../icons/googleIcon.svg";
import { ReactComponent as PaypalLogo } from "../../icons/paypalIcon.svg";
import { ReactComponent as DebitLogo } from "../../icons/debitIcon.svg";
import { ReactComponent as PayOnCounterLogo } from "../../icons/payOnCounterIcon.svg";
import Button from "../../components/common/button.component";
import OrderItem from "../../components/common/orderItem.component";
import OrderList from "../../components/common/orderList.component";
import OrderForm from "../../components/common/orderForm.component";

const CartPage = () => {
  return (
    <div className="cart-page h-92screen">
      <div className="wrapper flex  flex-col mobileS:px-10 mobileM:px-14 mobileL:px-20 px-5 py-4 tablet:px-40">
        <div className="header font-bold text-lg text-header  self-center">
          Your Order
        </div>
        <OrderList></OrderList>
        <OrderForm></OrderForm>
      </div>
    </div>
  );
};

export default CartPage;
