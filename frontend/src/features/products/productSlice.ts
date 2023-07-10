import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        error: false,
    },
    reducers: {
        onSuccessProducts: (state, action) => {
            state.products = action.payload;
        },
        onErrorProducts: (state) => {
            state.error = true;
        },
    },
});

export const { onSuccessProducts, onErrorProducts } = productSlice.actions

export default productSlice.reducer