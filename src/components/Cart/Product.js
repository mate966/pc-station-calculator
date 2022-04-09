import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteItemFromCart } from "../../features/cartSlice";

export const Product = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);

    const handleDelete = id => {
        dispatch(deleteItemFromCart(id));
    };

    return (
        <>
            {cart.length === 0 ? (
                <tr>
                    <td colSpan={5}>Twój koszyk jest pusty.</td>
                </tr>
            ) : (
                <>
                    {cart.map((item, id) => (
                        <tr key={id}>
                            <td>{id + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.describe}</td>
                            <td>{item.category}</td>
                            <td>{item.price}zł</td>
                            <td>
                                <img
                                    className="remove-item"
                                    alt="trash-icon"
                                    src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"
                                    onClick={() => handleDelete(id)}
                                />
                            </td>
                        </tr>
                    ))}
                </>
            )}
        </>
    );
};
