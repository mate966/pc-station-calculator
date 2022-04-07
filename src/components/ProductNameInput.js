import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductName } from "../features/productNameSlice";

export const NameInput = () => {
    const dispatch = useDispatch();
    const productName = useSelector(state => state.name.productName);

    const handleName = e => {
        dispatch(addProductName(e.target.value));
    };

    return (
        <>
            <label htmlFor="name-input">Nazwa produktu: </label>
            <input
                type="text"
                id="name-input"
                onChange={handleName}
                value={productName}
            />
        </>
    );
};
