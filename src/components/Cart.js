import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
    const cart = useSelector(state => state.cart.cartItems);

    const handleDelete = id => {
        console.log(id);
    };

    return (
        <div>
            {cart.map((item, id) => {
                return (
                    <>
                        <ul>
                            <li>Nazwa produktu: {item.productName}</li>
                            <li>Opis: {item.productDescribe}</li>
                            <li>Kategoria: {item.productCategory}</li>
                            <li>Cena: {item.productPrice}zł</li>
                        </ul>
                        <button onClick={() => handleDelete(id)}>Usuń</button>
                    </>
                );
            })}
        </div>
    );
};
