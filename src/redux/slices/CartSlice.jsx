import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart=state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increament:(state,action)=>{
      state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
    },
    decrement:(state,action)=>{
      state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity-1}:item)
    }
  },
});

export const { addToCart, removeCart,increament,decrement } = CartSlice.actions;

export default CartSlice.reducer;
