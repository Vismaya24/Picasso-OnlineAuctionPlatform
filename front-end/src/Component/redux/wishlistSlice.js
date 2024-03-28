import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wish: [],
  },
  reducers: {
    addToWishList: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.wish.find(wish => wish.aid === newItem.aid);

      if (existingItem) {

    } else {
        state.wish.push({ ...newItem, artQty: 1 });
      }
    },
    removeFromWishList: (state, action) => {
      const itemId = action.payload;
      state.wish = state.wish.filter(wish => wish.aid !== itemId);
    },
  
  },
});

export const { addToWishList, removeFromWishList} = wishListSlice.actions;

export default wishListSlice.reducer;