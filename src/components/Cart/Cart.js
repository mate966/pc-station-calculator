import React from "react";
import { Product } from "./Product";
import { Summary } from "./Summary";

export const Cart = () => {
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
            <Product />
            <Summary />
        </table>
    );
};
