import { createSelector } from "reselect";

const selectCartSlice = (state) => state.cartSlice;

const cartList = createSelector([selectCartSlice], (cartSlice) => {
  return cartSlice.cart;
});


export const getItemQuantity = (id) => {
  return createSelector([cartList], (cart) => {
    let cartLength = Object.keys(cart).length;
    if (cartLength === 0) {
      return 0;
    }

    //check if the menu present in cart
    if (cart[id]) {
      return cart[id].quantity;
    } else {
      return 0;
    }
  });
};

export const getTotalAmount =  createSelector([cartList], (cart) => {
    let totalAmount = 0;
    let cartLength = Object.keys(cart).length;
    if(cartLength === 0) return 0
    for (const [key, value] of Object.entries(cart)){
        var price = value.price
        var quantity = value.quantity
        totalAmount = totalAmount + (price * quantity)
        console.log(totalAmount, price, quantity)

    }

    return totalAmount

});


export default cartList;
