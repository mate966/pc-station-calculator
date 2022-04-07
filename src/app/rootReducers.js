import { combineReducers } from "redux";

import cartSlice from "../features/cartSlice";
import productNameSlice from "../features/productNameSlice";
import productDescribeSlice from "../features/productDescribeSlice";
import productCategorySlice from "../features/productCategorySlice";
import productPriceSlice from "../features/productPriceSlice";

export const rootReducer = combineReducers({
    cart: cartSlice,
    name: productNameSlice,
    describe: productDescribeSlice,
    category: productCategorySlice,
    price: productPriceSlice,
});
