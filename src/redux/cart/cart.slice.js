import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: {},
    order: null,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
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
      state.order = action.payload;
    },

  },
});

const _addToCart = (cart, newItem) => {
  /* console.log(cart);

  if (cart.length === 0) {
    var updatedQuantity = newItem.quantity + 1;
    var updatedItem = {...newItem, 'quantity' : updatedQuantity}
    return [updatedItem];

  }
  console.log("blaaa");
  //check if the item already in the catr
  let newCart = [];

  var isAlreadyExist = false;

  cart.map((item) => {
    if (item.id === newItem.id) {
      isAlreadyExist = true;
      var updatedItem = item;
      updatedItem.quantity++;
      newCart.push(updatedItem);
    } else {
      newCart.push(item);
    }
  });


  if (isAlreadyExist) {
    return newCart;
  } else {
    var updatedQuantity = newItem.quantity + 1;
    var updatedItem = {...newItem, 'quantity' : updatedQuantity}
    newCart = [...cart, updatedItem];
    return newCart;
  }*/
  if (Object.keys(cart).length === 0) {
    var updatedItem = { ...newItem, quantity: newItem.quantity + 1 };
    var id = newItem.id;
    return { [id]: updatedItem };
  }

  var isAlreadyExist = false;
  let updatedCart = {};
  for (const [key, value] of Object.entries(cart)) {
    if (key === newItem.id) {
      isAlreadyExist = true;
      updatedCart[key] = { ...value, ["quantity"]: newItem.quantity + 1 };
    } else {
      updatedCart[key] = { ...value };
    }
  }

  if (isAlreadyExist) {
    return updatedCart;
  } else {
    var updatedItem = { ...newItem, quantity: newItem.quantity + 1 };
    var id = newItem.id;
    updatedCart = { ...cart, [id]: updatedItem };
    return updatedCart;
  }
};

const _removeFromCart = (cart, targetItem) => {
  /*
  let newcart = [];
  cart.map((item) => {
    if (item.id === targetitem.id) {
      if (item.quantity > 1) {
        item.quantity--;
        newcart.push(item);
      }
    } else {
      newcart.push(item);
    }
  });
  return newcart;

  */
  let updatedCart = {};

  for (const [key, value] of Object.entries(cart)) {
    console.log("kkkkkkk");
    console.log(key === targetItem.id);
    if (key == targetItem.id) {
      console.log("kkkkkk222");
      if (value.quantity > 1) {
        //decrese the quanityt
        updatedCart[key] = { ...value, ["quantity"]: value.quantity - 1 };
      }
    } else {
      updatedCart[key] = { ...value };
    }
  }
  return updatedCart;
};


export function placeOrder(cartDetails) {
  return async (dispatch) => {
    dispatch(placeOrderStarted("Loading"));
    console.log(cartDetails)
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/order/placeorder",
        data: {
          data: cartDetails,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

}
export const { addToCart, removeFromCart, placeOrderStarted } = cart.actions;

export default cart.reducer;
