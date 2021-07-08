import React from "react";
import OrderItem from "./orderItem.component";
import { connect } from "react-redux";
import cartList, { getTotalAmount } from "../../redux/cart/cart.selector";


const OrderList = ({ cartList, totalAmount }) => {
  console.log(cartList);
  var cartListLength = Object.keys(cartList).length;
  console.log('i rerendered ');
  if (cartListLength > 0) {
    var cartItems = [];
    for (const [key, value] of Object.entries(cartList)) {
      console.log({typeofid : typeof key , id : key})
      cartItems.push(
        <OrderItem
          key={key}
          id={key}
          name={value.name}
          price={value.price}
          item={value}
          quantity={value.quantity}
        ></OrderItem>
      );
    }
  }

  return (
    <div className="order-container max-h-56 h-56  rounded-lg max-w-400 flex-row-1 w-full bg-white mt-3 py-2">
      <div className="cart-list overflow-y-scroll  h-72  px-5">
        {cartListLength === 0 && <h2>Put some items into the cart</h2>}
        {cartListLength !== 0 && cartItems}
      </div>
      <div className="total-amount font-semibold text-lg flex px-7 pt-5  ">
        <div className="order-name mr-auto">Total</div>
        <div className="order-price mr-4">${totalAmount}</div>
        <div className="counter"></div>
      </div>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    cartList: cartList(state),
    totalAmount : getTotalAmount(state)
  };
};

export default connect(mapStatesToProps, null)(OrderList);
