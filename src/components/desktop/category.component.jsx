import React from "react";
import Category from "../common/category.component";

const CategoryDesktop = () => {
 

  return (
    <div className="category-desktop py-3  rounded-lg w-5/7 min-w-170 justify-self-center text-left bg-danger">
      <h3 className="px-6 py-3 pb-3  text-lg font-bold">Category</h3>
      <div className="menu-list content-start">
        <Category isMobile={false}></Category>
      </div>
    </div>
  );
};


export default CategoryDesktop;
