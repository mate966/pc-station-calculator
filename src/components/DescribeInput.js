import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductDescribe } from "../features/productDescribeSlice";

export const DescribeInput = () => {
    const dispatch = useDispatch();
    const productDescribe = useSelector(
        state => state.describe.productDescribe
    );

    const handleDescribe = e => {
        dispatch(addProductDescribe(e.target.value));
    };

    return (
        <>
            <label htmlFor="describe-input">Opis produktu: </label>
            <input
                type="text"
                id="describe-input"
                onChange={handleDescribe}
                value={productDescribe}
            />
        </>
    );
};
