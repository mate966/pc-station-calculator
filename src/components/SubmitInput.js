import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/cartSlice";

export const SubmitInput = () => {
    const dispatch = useDispatch();
    const productName = useSelector(state => state.name.productName);
    const productDescribe = useSelector(
        state => state.describe.productDescribe
    );
    const productCategory = useSelector(
        state => state.category.productCategory
    );
    const productPrice = useSelector(state => state.price.productPrice);

    const submitProduct = e => {
        e.preventDefault();
        dispatch(
            addItemToCart({
                productName: productName,
                productDescribe: productDescribe,
                productCategory: productCategory,
                productPrice: productPrice,
            })
        );
    };

    return (
        <input type="submit" value="Dodaj produkt" onClick={submitProduct} />
    );
};
