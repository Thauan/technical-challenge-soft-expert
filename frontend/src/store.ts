import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice';
import productReducer from './features/products/productSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        products: productReducer
    },
});