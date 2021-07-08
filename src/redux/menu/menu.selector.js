import { createSelector } from "reselect";

import categories from "../../constants/category";

const selectMenu = (state) => state.menuListSlice;

const selectCategory = (state) => state.categorySlice;

const selectMenuList = createSelector(selectMenu, (menuListSlice) => {
  console.log(menuListSlice.menuList);
  return menuListSlice.menuList;
});

const selectSelectedCategory = createSelector(
  selectCategory,
  (categorySlice) => categorySlice.selectedCategory
);

export const menuListByCategory = createSelector(
  [selectSelectedCategory, selectMenuList],
  (selectedCategory, menuList) => {
    //  var cat = 'CYCLIC_MENU';
    console.log(categories[selectedCategory]);
    console.log(menuList[selectedCategory]);
    return menuList[categories[selectedCategory]];
  }
);
export const menuItem = (id) => {

  return createSelector([menuListByCategory], (categorisedMenuList) => {
      let targetItem;
      categorisedMenuList.map((item) => {
          if(item.id  === id){
              targetItem = item
          }
      })

      return targetItem;
  });
};

export const itemQuantity = (id) => {
  return createSelector([menuListByCategory], (categoriedMenuList) => {
    let quantity;
    console.log(id);
    categoriedMenuList.map((item) => {
      //console.log(item.id);
      if (item.id === id) {
        console.log("id");
        quantity = item.quantity;
        console.log({'quantity': quantity})
      }
      console.log(quantity);
    });
    return quantity;
  });
};

export default menuListByCategory;
