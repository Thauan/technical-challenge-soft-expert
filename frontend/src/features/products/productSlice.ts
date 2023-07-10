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
        onUpdateListProducts: (state: any, action: any) => {
            state.products = [...state, action.payload]
        }
    },
});

export const { onSuccessProducts, onErrorProducts, onUpdateListProducts } = productSlice.actions

export default productSlice.reducer