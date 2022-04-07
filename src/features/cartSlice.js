import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
        },
        deleteItemFromCart: (state, action) => {
            console.log(action.payload);
            state.cartItems.splice(action.payload, 1);
        },
    },
});

export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
