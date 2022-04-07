import React from "react";
import { useSelector } from "react-redux";

export const Summary = () => {
    const totalProducts = useSelector(state => state.cart.cartItems.length);
    const totalPrice = useSelector(state =>
        state.cart.cartItems
            .map(item => Number(item.productPrice))
            .reduce((a, b) => a + b, 0)
    );

    return (
        <div>
            <p>Łącznie produktów: {totalProducts}</p>
            <p>Razem do zapłaty: {totalPrice}zł</p>
        </div>
    );
};
