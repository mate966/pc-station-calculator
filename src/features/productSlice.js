import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    describe: "",
    category: "",
    price: "",
    errors: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            Object.assign(state, action.payload);
        },
        clearForm: (state, action) => {
            Object.assign(state, action.payload);
        },
        handleErrors: (state, action) => {
            Object.assign(state.errors, action.payload);
        },
    },
});

export const { addProduct, clearForm, handleErrors } = productSlice.actions;

export default productSlice.reducer;
