import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productPrice: "",
};

export const productPriceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        addProductPrice: (state, action) => {
            state.productPrice = action.payload;
        },
    },
});

export const { addProductPrice } = productPriceSlice.actions;

export default productPriceSlice.reducer;
