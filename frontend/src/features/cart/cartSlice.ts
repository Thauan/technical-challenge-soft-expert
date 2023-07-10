import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        cart: [],
        openDrawer: false,
    },
    reducers: {
        addToCart: (state: any, action: any) => {
            state.cart = [...state.cart, action.payload];
        },
        removeToCart: (state: any, action: any) => {
            state.cart = state.cart.filter((item: any) => item !== action.payload);
        },
        toggleDrawer: (state: any) => {
            state.openDrawer = !state.openDrawer;
        },
    },
});

export const { addToCart, removeToCart, toggleDrawer } = productSlice.actions

export default productSlice.reducer