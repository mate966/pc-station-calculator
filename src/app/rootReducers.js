import { combineReducers } from "redux";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";

export const rootReducer = combineReducers({
    cart: cartSlice,
    product: productSlice,
});
