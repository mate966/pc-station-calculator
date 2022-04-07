import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProductPrice } from "../features/productPriceSlice";

export const PriceInput = () => {
    const dispatch = useDispatch();
    const productPrice = useSelector(state => state.price.productPrice);

    const handlePrice = e => {
        dispatch(addProductPrice(e.target.value));
    };

    return (
        <>
            <label htmlFor="price-input">Cena produktu: </label>
            <input
                type="number"
                id="price-input"
                onChange={handlePrice}
                value={productPrice}
            />
        </>
    );
};
