import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/productSlice";

export const NameInput = () => {
    const dispatch = useDispatch();
    const productName = useSelector(state => state.product.name);
    const errorMsg = useSelector(state => state.product.errors.map(err => err.nameError));

    const handleName = e => {
        dispatch(addProduct({ name: e.target.value }));
    };

    return (
        <div className="price-input">
            <label htmlFor="name">Nazwa produktu: </label>
            <input type="text" id="name" onChange={handleName} value={productName} />
            <span className="error-msg">{errorMsg && errorMsg}</span>
        </div>
    );
};
