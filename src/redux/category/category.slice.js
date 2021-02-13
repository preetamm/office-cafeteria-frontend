import { createSlice } from '@reduxjs/toolkit'
import categories from  '../../constants/category'

const category = createSlice({
    name: 'category',
    initialState : {
        selectedCategory : categories.CYCLIC_MENU
    },
    reducers : {
        changeCategory : (state, action) =>{
            console.log(state.selectedCategory)
           //state. = action.payload
           state.selectedCategory = action.payload
        }
    }
})



export const {changeCategory} = category.actions;

export default category.reducer