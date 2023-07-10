import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        logged: false,
    },
    reducers: {
        onSuccessAuth: (state, action) => {
            state.user = action.payload;
            state.logged = true;
        },
        onErrorAuth: (state, action) => {
            state.user = action.payload;
            state.logged = false;
        },
        onLogout: (state) => {
            state.user = {};
            state.logged = false;
        },
    },
});

export const { onSuccessAuth, onErrorAuth, onLogout } = userSlice.actions

export default userSlice.reducer