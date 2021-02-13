import React, { useEffect } from "react";
import MenuItem from "../common/menuItem.component";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { menuListByCategory } from "../../redux/menu/menu.selector";
import { getMenuList } from "../../redux/menu/menu.slice";

const MenuContainer = ({ menuListByCategory }) => {
  const dispatch = useDispatch();
  var { selectedCategory } = useSelector((state) => state.categorySlice);
  useEffect(() => {
    dispatch(getMenuList(selectedCategory));
  });

  return (
    <div className="menu-desktop-container-wrapper mt-3">
      <div className="title text-center text-header text-base">
        Breakfast Menu
      </div>
      <div className="menu-desktop-container grid grid-cols-1  laptop:grid-cols-2 laptop:gap-y-4  auto-rows-max h-60screen  grid-flow-row overflow-y-scroll self-stretch">
        {menuListByCategory.map((item) => (
          <MenuItem key={item.id} id={item.id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    menuListByCategory: menuListByCategory(state),
  };
};

/*const mapDispatchToProps = () => {

}
*/

export default connect(mapStatesToProps, null)(MenuContainer);
