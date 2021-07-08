
import Button from "./button.component";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  increaseItemQantity,
  decreseItemQuantity,
} from "../../redux/menu/menu.slice";

import { addToCart, removeFromCart } from "../../redux/cart/cart.slice";
import { itemQuantity } from "../../redux/menu/menu.selector";
import { getItemQuantity } from "../../redux/cart/cart.selector";


const QuantityToggler = ({ id, quantity, item, isCart }) => {

  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categorySlice);
  var { auth } = useSelector((state) => state.authSlice);
  if (isCart) console.log({ cartQuantity: quantity })
  //console.log(`quantity is : ${quantity == 0 }`)
  return (
    <div
      className="quanity rounded bg-white shadow-lg  items-center  flex"
      id={id}
    >
      <Button
        label="-"
        text-base
        className={` px-2 rounded text-white`}
        onclick={() => {
          dispatch(decreseItemQuantity({ category: selectedCategory, id: id }));
          dispatch(removeFromCart({item, quantity}));
        }}
        isDisabled={auth.login && quantity > 0 ? false : true}
      ></Button>
      <div className="quantity px-2">{quantity}</div>
      <Button
        label="+"
        text-base
        className={` px-2 rounded text-white`}
        onclick={() => {
          dispatch(increaseItemQantity({ category: selectedCategory, id: id }));
          dispatch(addToCart({item, quantity}));
        }}
        isDisabled={auth.login ? false : true}
      ></Button>
    </div>
  );
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state, ownProp) => {
    //if(ownProp.isCart) console.log({'itscart' : ownProp})
    let ItemQuantity;
    let id = ownProp.id
   // ownProp.isCart ? ItemQuantity = getItemQuantity(id) : ItemQuantity = itemQuantity(id)
     console.log(id);
     ItemQuantity = getItemQuantity(id);
    const quantity = ItemQuantity(state);
    if (ownProp.isCart) console.log(`i rerendere map amd qaintiut is : ${quantity}`)
    // if(ownProp.isCart) console.log({'myquantity' : quantity})
    return {
      quantity: quantity,
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(QuantityToggler);
