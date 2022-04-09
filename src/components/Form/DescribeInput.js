import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/productSlice";

export const DescribeInput = () => {
    const dispatch = useDispatch();
    const productDescribe = useSelector(state => state.product.describe);
    const errorMsg = useSelector(state => state.product.errors.map(err => err.describeError));

    const handleDescribe = e => {
        dispatch(addProduct({ describe: e.target.value }));
    };

    return (
        <div className="describe-input">
            <label htmlFor="describe">Opis produktu: </label>
            <input type="text" id="describe" onChange={handleDescribe} value={productDescribe} />
            <span className="error-msg">{errorMsg && errorMsg}</span>
        </div>
    );
};
