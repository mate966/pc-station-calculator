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
        <tr>
            <th>Łącznie produktów:</th>
            <td>{totalProducts} szt.</td>
            <th>Razem do zapłaty:</th>
            <td>{totalPrice}zł</td>
        </tr>
    );
};
