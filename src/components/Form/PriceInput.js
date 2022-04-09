import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/productSlice";

export const PriceInput = () => {
    const dispatch = useDispatch();
    const productPrice = useSelector(state => state.product.price);
    const errorMsg = useSelector(state => state.product.errors.map(err => err.priceError));
    //
    const handlePrice = e => {
        dispatch(addProduct({ price: e.target.value }));
    };

    return (
        <div className="price-input">
            <label htmlFor="price">Cena produktu: </label>
            <input type="number" id="price" onChange={handlePrice} value={productPrice} />
            <span className="error-msg">{errorMsg && errorMsg}</span>
        </div>
    );
};
