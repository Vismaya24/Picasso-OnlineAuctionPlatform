import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    art: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.art.find(art => art.aid === newItem.aid);

      if (existingItem) {
        existingItem.artQty += 1;
      } else {
        state.art.push({ ...newItem, artQty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.art = state.art.filter(art => art.aid !== itemId);
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.art.find(art => art.aid === itemId);
      if (existingItem) {
        existingItem.artQty += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.art.find(art => art.aid === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.artQty -= 1;
      }
      
    },
    removeAllFromCart: state => {
      state.art = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart} = cartSlice.actions;

export default cartSlice.reducer;