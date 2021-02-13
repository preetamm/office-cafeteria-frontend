import React from "react";

const CategoryItem = ({ label, selectedCategory, changeCategory }) => {
  const isSelected = selectedCategory === label ? true : false;
  return (
    <div
      className={`category-item text-base font-medium py-3 px-6 ${isSelected? 'bg-secondary text-white' : 'bg-white'}`}
      id={label}
      onClick={() => changeCategory(label)}
    >
      {label}
    </div>
  );
};

export default CategoryItem;
