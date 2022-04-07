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
        <div className="describe-input">
            <label htmlFor="describe">Opis produktu: </label>
            <input
                type="text"
                id="describe"
                onChange={handleDescribe}
                value={productDescribe}
            />
        </div>
    );
};
