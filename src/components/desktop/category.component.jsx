import React from "react";
import { useDispatch, useSelector } from "react-redux";
import categories from "../../constants/category";
import CategoryItem from "./categoryItem.component";
import { changeCategory } from "../../redux/category/category.slice";

const CategoryDesktop = () => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector((state) => state.categorySlice);
  //const  { menuList} = useSelector((state) => state.menuListSlice);
  //console.log(selectedCategory, menuList['BEVERAGES'])
  const categoriesArray = [];

  const updateCategory = (id) => {
    console.log(id);
    dispatch(changeCategory(id));
  };

  for (var key in categories) {
    categoriesArray.push(categories[key]);
  }


  return (
    <div className="category-desktop py-3  rounded-lg w-5/7 min-w-170 justify-self-center text-left bg-danger">
      <h3 className="px-6 py-3 pb-3  text-lg font-bold">Category</h3>
      <div className="menu-list content-start">
        {categoriesArray.map((category) => (
          <CategoryItem
            label={category}
            selectedCategory={selectedCategory}
            changeCategory={updateCategory}
          ></CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryDesktop;
