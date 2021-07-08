import React from "react";

const CategoryItem = ({ className, label, selectedCategory, changeCategory }) => {
  const isSelected = selectedCategory === label ? true : false;
  return (
    <div
      className={`category-item  ${className || 'py-3 px-6 text-base font-medium'}  ${isSelected? 'bg-secondary text-white' : 'bg-white'}`}
      id={label}
      onClick={() => changeCategory(label)}
    >
      {label}
    </div>
  );
};

export default CategoryItem;
