import React from "react";
import QuantityToggler from "./quanityToggle.component";


const OrderItem = ({name, price, quantity, id, item}) => {
  return (
    <div className="order-item font-medium text-sm flex px-2 py-2 ">
      <div className="order-name mr-auto">{name}</div>
      <div className="order-price mr-4">${price}</div>
      <QuantityToggler id={id} isCart={true} item={item}></QuantityToggler>
    </div>
  );
};


export default OrderItem;
