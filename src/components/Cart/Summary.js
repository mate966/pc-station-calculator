import React from "react";
import { useSelector } from "react-redux";

export const Summary = () => {
    const totalProducts = useSelector(state => state.cart.cartItems.length);
    const totalPrice = useSelector(state =>
        state.cart.cartItems.map(item => Number(item.price)).reduce((a, b) => a + b, 0)
    );

    return (
        <tfoot>
            <tr>
                <th>Łącznie produktów:</th>
                <td>{totalProducts} szt.</td>
                <th>Razem do zapłaty:</th>
                <td>{totalPrice.toFixed(2)}zł</td>
            </tr>
        </tfoot>
    );
};
