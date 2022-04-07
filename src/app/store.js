import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/cartSlice";
import productNameSlice from "../features/productNameSlice";
import productDescribeSlice from "../features/productDescribeSlice";
import productCategorySlice from "../features/productCategorySlice";
import productPriceSlice from "../features/productPriceSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        name: productNameSlice,
        describe: productDescribeSlice,
        category: productCategorySlice,
        price: productPriceSlice,
    },
});
