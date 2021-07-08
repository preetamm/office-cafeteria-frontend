import { createSlice } from "@reduxjs/toolkit";
import categories from "../../constants/category";
import axios from "axios";

const menu = createSlice({
  name: "category",
  initialState: {
    menuList: {
      [categories.CYCLIC_MENU]: [],
      [categories.FAST_FOOD]: [],
      [categories.DESSERT]: [],
      [categories.BEVERAGES]: [],
    },
    loading: false,
  },
  reducers: {
    increaseItemQantity: (state, action) => {
      console.log(state.menuList);
      state.menuList = increaseQuantity(state, action);
    },
    decreseItemQuantity: (state, action) => {
      state.menuList = decreaseQuantity(state, action);
    },
    getMenuStarted: (state, action) => {
      state.loading = !state.loading;
    },
    getMenuListSuccess: (state, action) => {
      state.menuList = { ...state.menuList, ...action.payload };
      state.loading = !state.loading;
    },
    getMenuListFailed: (state, action) => {
      state.loading = !state.loading;
    },
  },
});

const increaseQuantity = (state, action) => {
  const { category, id } = action.payload;
  let categoryList = state.menuList[category];

  categoryList = categoryList.map((item) => {
    if (item.id === id) {
      item.quantity++;
    }
    return item;
  });
  state.menuList[category] = categoryList;
  state.menuList = { ...state.menuList };
  return state.menuList;
};

const decreaseQuantity = (state, action) => {
  const { category, id } = action.payload;
  let categoryList = state.menuList[category];

  categoryList.forEach((item) => {
    if (item.id === id) {
      if (item.quantity > 0) {
        item.quantity--;
      }
    }
  });

  state.menuList[category] = categoryList;
  state.menuList = { ...state.menuList };
  return state.menuList;
};

export const {
  changeCategory,
  increaseItemQantity,
  decreseItemQuantity,
  getMenuStarted,
  getMenuListSuccess,
  getMenuListFailed,
} = menu.actions;

export function getMenuList(category) {
  return async (dispatch) => {
    try {
      dispatch(getMenuStarted());
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/menu/getmenulist",
        data: {
          data: { category: category },
        },
      });
      response.data.forEach((el) => {
        el.id = el._id;
        el.quantity = 0;
      });
      dispatch(getMenuListSuccess({ [categories[category]]: response.data }));
    } catch (error) {
      dispatch(getMenuListFailed());
    }
  };
}

export default menu.reducer;

//select
/* 
   [categories.CYCLIC_MENU]: [
        {
          name: "Eggs and bacon",
          Description: "Deep fried fries with a side of tomato ketchup. 20g",
          price: 9,
          quantity: 0,
          id: 1,
        },
        {
          name: "Eggs and bacon",
          Description: "Deep fried fries with a side of tomato ketchup. 20g",
          price: 5,
          quantity: 0,
          id: 2,
        },
        {
          name: "Eggs and bacon",
          Description: "Deep fried fries with a side of tomato ketchup. 20g",
          price: 4,
          quantity: 0,
          id: 3,
        },
        {
          name: "Eggs and bacon",
          Description: "Deep fried fries with a side of tomato ketchup. 20g",
          price: 8,
          quantity: 0,
          id: 4,
        },
        {
          name: "Eggs and bacon",
          Description: "Deep fried fries with a side of tomato ketchup. 20g",
          price: 3,
          quantity: 0,
          id: 5,
        },
        {
          name: "Eggs and bacon",
          Description: "Deep fried fries with a side of tomato ketchup. 20g",
          price: 1,
          quantity: 0,
          id: 6,
        },
      ],
      
      [categories.BEVERAGES]: [
        {
          name: "coka cola",
          Description: "best cola",
          price: "3",
          quantity: 0,
          id: 7,
        },
        {
          name: "coka cola",
          Description: "best cola",
          price: "$5",
          quantity: 0,
          id: 8,
        },
        {
          name: "coka cola",
          Description: "best cola",
          price: 5,
          quantity: 0,
          id: 9,
        },
        {
          name: "coka cola",
          Description: "best cola",
          price: 7,
          quantity: 0,
          id: 10,
        },
        {
          name: "coka cola",
          Description: "best cola",
          price: 8,
          quantity: 0,
          id: 11,
        },
      ],
      [categories.FAST_FOOD]: [
        {
          name: "Samosa",
          Description: "two pieces of baked samosa with savory filling. 50g",
          price: 25,
          category: "FAST_FOOD",
          quantity: 0,
          id: 12,
        },
        {
          name: "Taco",
          description: "Tortilla filled with meat, cheese and lettuce. 170g",
          price: 45,
          category: "FAST_FOOD",
          quantity: 0,
          id: 13,
        },
        {
          name: "Burger",
          description:
            "Grilled, juicy, meaty and greasily satisfying burger. 80g",
          price: 50,
          category: "FAST_FOOD",
          quantity: 0,
          id: 14,
        },
        {
          name: "Pizza",
          description:
            "Cheesy Pizza with tomato, broccoli and mushroom topping. 160g",
          price: 60,
          category: "FAST_FOOD",
          quantity: 0,
          id: 15,
        },
        {
          name: "Chicken Nuggets",
          description: "Deep-fried chicken meat with ketchup. 75g",
          price: 35,
          category: "FAST_FOOD",
          quantity: 0,
          id: 16,
        },
        {
          name: "Fast Food",
          Description: "thr bestest quality fast food in the world",
          price: 6,
          quantity: 0,
          id: 17,
        },
      ],
*/
