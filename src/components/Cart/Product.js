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
                <tbody>
                    <tr>
                        <td colSpan={5}>Twój koszyk jest pusty</td>
                    </tr>
                </tbody>
            ) : (
                <tbody>
                    {cart.map((item, id) => (
                        <tr className="product" key={id}>
                            <td>{id + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.describe}</td>
                            <td>{item.category}</td>
                            <td>{item.price}zł</td>
                            <td>
                                <button onClick={() => handleDelete(id)}>Usuń</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            )}
        </>
    );
};
