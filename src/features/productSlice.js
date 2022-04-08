import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    describe: "",
    category: "",
    price: "",
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            Object.assign(state, action.payload);
        },
        clearInputs: (state, action) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { addProduct, clearInputs } = productSlice.actions;

export default productSlice.reducer;
