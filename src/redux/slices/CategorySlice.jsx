import { createSlice } from "@reduxjs/toolkit";

const CategorySlice=createSlice({
    name:"category",
    initialState:{
        category:'All',
    },
    reducers:{
        selectCategory:(state,action)=>{
            state.category=action
        }
    }
})

export const {selectCategory}=CategorySlice.actions    ;    
export default CategorySlice.reducer;