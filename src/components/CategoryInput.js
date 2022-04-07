import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProductCategory } from "../features/productCategorySlice";

export const CategoryInput = () => {
    const dispatch = useDispatch();
    const productCategory = useSelector(
        state => state.category.productCategory
    );

    const handleCategory = e => {
        dispatch(addProductCategory(e.target.value));
    };

    return (
        <>
            <label htmlFor="category-input">Kategoria produktu: </label>
            <select
                id="category-input"
                onChange={handleCategory}
                defaultValue={productCategory}
            >
                <option disabled hidden value={productCategory}>
                    Wybierz kategorię
                </option>
                <option value="pc-components">Podzespoły komputera</option>
                <option value="peripherals">Urzadzenia peryferyjne</option>
                <option value="software">Oprogramowanie</option>
                <option value="other">Inne</option>
            </select>
        </>
    );
};
