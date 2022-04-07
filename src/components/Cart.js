import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemFromCart } from "../features/cartSlice";
import { Summary } from "./Summary";

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);

    const handleDelete = id => {
        dispatch(deleteItemFromCart(id));
    };

    return (
        <table className="products-list">
            <thead>
                <tr>
                    <th>Lp.</th>
                    <th>Nazwa produktu</th>
                    <th>Opis</th>
                    <th>Kategoria</th>
                    <th>Cena</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, id) => {
                    return (
                        <tr className="product" key={id}>
                            <td>{id + 1}</td>
                            <td>Nazwa produktu: {item.productName}</td>
                            <td>Opis: {item.productDescribe}</td>
                            <td>Kategoria: {item.productCategory}</td>
                            <td>Cena: {item.productPrice}zł</td>
                            <td>
                                <button onClick={() => handleDelete(id)}>
                                    Usuń
                                </button>
                            </td>
                        </tr>
                    );
                }) && (
                    <tr>
                        <td colSpan="5">Twój koszyk jest pusty!</td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <Summary />
            </tfoot>
        </table>
    );
};
