import { createSlice } from "@reduxjs/toolkit";


const order = createSlice({
    name: 'order',
    initialState : {
        currentOrder: null,
    },
    reducers: {
        updateCurrentOrder : (state, action) =>{
            state.currentOrder = updateOrder(state, action.payload)
        }
    }
})


export const  {updateCurrentOrder} = order.actions


const updateOrder = (state, newOrder) => {
    if(state.currentOrder){
        return [...state.currentOrder, newOrder]
    }else{
        
        return [newOrder]
    }
}
export default order.reducer