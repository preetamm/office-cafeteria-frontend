import React, { useEffect } from "react";
import MenuItem from "../common/menuItem.component";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { menuListByCategory } from "../../redux/menu/menu.selector";
import { getMenuList } from "../../redux/menu/menu.slice";

const MenuContainer = () => {
  const dispatch = useDispatch();
  var { selectedCategory } = useSelector((state) => state.categorySlice);
  var { menuList, loading } = useSelector((state) => state.menuListSlice)
  var menuListByCategory = menuList[selectedCategory]
  console.log(menuListByCategory)
  useEffect(() => {
    dispatch(getMenuList(selectedCategory))
  }, [selectedCategory])
  //dispatch(getMenuList(selectedCategory));
  console.log({ menu: menuListByCategory })


  return (
    <React.Fragment>
    
      { menuListByCategory && menuListByCategory.map((item) => (
        <MenuItem key={item.id} id={item.id}></MenuItem>
      ))}
      {(menuListByCategory.length === 0 && !loading) && <h1>no Item found</h1>}
    </React.Fragment>
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
