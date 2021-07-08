import React from "react";
import { menuItem } from "../../redux/menu/menu.selector";
import QuantityToggler from "./quanityToggle.component";
import { connect } from "react-redux";
import img from '../../icons/food.png'


const MenuItem = ({ item,  id }) => {

  //const dispatch = useDispatch();
  //const { selectedCategory } = useSelector((state) => state.categorySlice);

  return (
    <React.Fragment>
      <div className="menu-item flex bg-trasparent h-28 tablet:max-h-24 items-center mt-5  ">
        <div className="img  w-27 h-full rounded-full py-3 ">
          <img
            src='https://www.dropbox.com/s/7lif3ve33rf9r1i/food.png?raw=1'
            alt=""
            className="w-full h-full object-contain relative left-7 "
          />
        </div>
        <div className="decription-wrapper pr-6 w-3/4">
          <div className="description flex flex-col py-2 items-start bg-white pl-8 pr-5  rounded-lg ">
            <div className="title text-base font-bold">{item.name}</div>
            <div className="tagline text-xs text-left text-secondary ">
             {item.description}
            </div>
            <div className="price-quantity items-center  self-stretch  flex mt-4">
              <div className="price mr-auto">${item.price}</div>
              <QuantityToggler  id={id}  item={item} ></QuantityToggler>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const makeMapStateToProps = () => {

  const mapStateToProps = (state, ownProp) => {
    //console.log(state, ownProp);
    const selectItem = menuItem(ownProp.id);
    return {
      item: selectItem(state),
    };
  };

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(MenuItem);
