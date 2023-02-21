import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState:{
        selectedCategory:"SEAFOOD"
    },
    reducers: {
     
    },
  })
  export default dishesSlice.reducer;
  export const getSelectedCategory =state =>state.dishes.selectedCategory;