import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    }
});

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;


/**
 *  updateQuantity(state,action){
            
            const updatedProduct=state.find(product=>product.id==action.payload.id)
            updatedProduct.quantity+=1

        }
 */