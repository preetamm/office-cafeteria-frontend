
import Button from "./button.component";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  increaseItemQantity,
  decreseItemQuantity,
} from "../../redux/menu/menu.slice";

import { addToCart, removeFromCart } from "../../redux/cart/cart.slice";
import { getItemQuantity } from "../../redux/cart/cart.selector";

const QuantityToggler = ({ id, quantity, item }) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categorySlice);
  var { auth } = useSelector((state) => state.authSlice);

  return (
    <div
      className="quanity rounded bg-white shadow-lg  items-center  flex"
      id={id}
    >
      <Button
        label="-"
        text-base
        className={` px-2 rounded text-white ${auth.login?.user? 'bg-secondary' : 'bg-gray-400'}`}
        onclick={() => {
          dispatch(decreseItemQuantity({ category: selectedCategory, id: id }));
          dispatch(removeFromCart(item));
        }}
        isDisabled={auth.login?.user? false : true}
      ></Button>
      <div className="quantity px-2">{quantity}</div>
      <Button
        label="+"
        text-base
        className={` px-2 rounded text-white ${auth.login?.user? 'bg-secondary' : 'bg-gray-400'}`}
        onclick={() => {
          dispatch(increaseItemQantity({ category: selectedCategory, id: id }));
          dispatch(addToCart(item));
        }}
        isDisabled={auth.login?.user ? false : true}
      ></Button>
    </div>
  );
};

const makeMapStateToProps = () => {
  const mapStateToProps = (state, ownProp) => {
  
    const ItemQuantity = getItemQuantity(ownProp.id);
    return {
      quantity: ItemQuantity(state),
    };
  };

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(QuantityToggler);
