import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProductCategory } from "../features/productCategorySlice";

export const CategoryInput = () => {
    const dispatch = useDispatch();
    const productCategory = useSelector(
        state => state.category.productCategory
    );

    const handleCategory = e => {
        switch (e.target.value) {
            case "pc-components":
                dispatch(addProductCategory("Podzespoły komputera"));
                break;
            case "peripherals":
                dispatch(addProductCategory("Urządzenia peryferyjne"));
                break;
            case "software":
                dispatch(addProductCategory("Oprogramowanie"));
                break;
            case "other":
                dispatch(addProductCategory("Inne"));
                break;
            default:
                break;
        }
    };

    return (
        <div className="category-input">
            <label htmlFor="category">Kategoria produktu: </label>
            <select
                id="category"
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
        </div>
    );
};
