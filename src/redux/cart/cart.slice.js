import { createSlice } from "@reduxjs/toolkit";
import { LOADING } from '../../constants/constant'
import { updateCurrentOrder } from '../order/order.slice'
import axios from "axios";
import { message } from "antd";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: {},
    order: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = _addToCart(state.cart, action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = _removeFromCart(state.cart, action.payload);
    },
    placeOrderStarted: (state, action) => {
      state.order = action.payload;
    },
    placeOrderSuccess: (state, action) => {
      state.order = action.payload;
    },
    placeOrderFailed: (state, action) => {
      state.order = null;
    },

  },
});

const _addToCart = (cart, { item, quantity }) => {

  if (Object.keys(cart).length === 0) {
    var updatedItem = { ...item, quantity: quantity + 1 };
    console.log(typeof item.id)
    var id = item.id;
    console.log({ 'lolitem': { [id]: updatedItem } })
    return { [id]: updatedItem };
  }

  var isAlreadyExist = false;
  let updatedCart = {};
  for (const [key, value] of Object.entries(cart)) {
    if (key === item.id) {
      isAlreadyExist = true;
      updatedCart[key] = { ...value, ["quantity"]: quantity + 1 };
    } else {
      updatedCart[key] = { ...value };
    }
  }

  if (isAlreadyExist) {
    return updatedCart;
  } else {
    updatedItem = { ...item, quantity: quantity + 1 };
    id = item.id;
    updatedCart = { ...cart, [id]: updatedItem };
    return updatedCart;
  }
};

const _removeFromCart = (cart, { item, quantity }) => {
  let newCart;
  var id = item.id
  // var quantity = targetItem.quantity--
  /* for (const [key, value] of Object.entries(cart)) {
    var id = parseInt(key)
    console.log(id === targetItem.id);
    console.log([key, targetItem.id])
    if (id === targetItem.id) {
      console.log(value.quantity)
      if (value.quantity > 1) {
        //decrese the quantity
        console.log(`yes i reach if block`)
        var updatedQuantity = value.quantity - 1
        updatedCart[key] = { ...value, ["quantity"]: updatedQuantity };
        console.log(updatedCart[key])
      }
    } else {
      console.log(`yes i reach else block`)
      updatedCart[key] = { ...value }
    }
  }
  console.log(updatedCart) */
  //check if id exist in cart incase 
  if (!cart[id]) {
    return cart
  }
  if (quantity > 1) {

    let updatedItem = { ...item, quantity: quantity - 1 }
    newCart = { ...cart, [`${id}`]: updatedItem }
    return newCart
    //newCart[targetItem.id] = { ...targetItem, quantity : targetItem.quantity-- }
  } else {
    delete cart[id]
    return cart
  }



  //select item using id
  //put that into new object with other objects
};


export function placeOrder(cartDetails) {
  return async (dispatch) => {
    dispatch(placeOrderStarted(LOADING));
    // console.log(cartDetails);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/order/placeorder",
        data: {
          data: cartDetails,
        },
      });

      console.log(response);
      dispatch(placeOrderSuccess(null))
      dispatch(updateCurrentOrder(response.data.ordertails))
      message.success('Order Placed successfully')
    } catch (error) {
      dispatch(placeOrderFailed())
      message.error('order Failed!')
      console.log(error);
    }

  };


}
export const { addToCart, removeFromCart, placeOrderStarted, placeOrderSuccess, placeOrderFailed } = cart.actions;

export default cart.reducer;
