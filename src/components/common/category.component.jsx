import React from "react";
import { useDispatch, useSelector } from "react-redux";
import categories from "../../constants/category";
import { changeCategory } from "../../redux/category/category.slice";
import CategoryItemDesktop from "../desktop/category-item.component";
import CategoryItem from "../desktop/categoryItem.component";




const Category = ({ isMobile }) => {
    const dispatch = useDispatch();
    const { selectedCategory } = useSelector((state) => state.categorySlice);
    //const  { menuList} = useSelector((state) => state.menuListSlice);
    //console.log(selectedCategory, menuList['BEVERAGES'])
    const categoriesArray = [];
    var categoryStyle = isMobile ? 'py-3 px-2' : 'py-3 px-6 text-base font-medium'
    const updateCategory = (id) => {
        console.log(id);
        dispatch(changeCategory(id));
    };

    for (var key in categories) {
        categoriesArray.push(categories[key]);
    }


    return (
        <React.Fragment>
            {categoriesArray.map((category) => (
                <CategoryItem
                    label={category}
                    className={categoryStyle}
                    selectedCategory={selectedCategory}
                    changeCategory={updateCategory}
                ></CategoryItem>
            ))}
        </React.Fragment>
    );
};

export default Category;
