import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCategory: "",
};

export const productCategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addProductCategory: (state, action) => {
            state.productCategory = action.payload;
        },
    },
});

export const { addProductCategory } = productCategorySlice.actions;

export default productCategorySlice.reducer;
