import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/productSlice";

export const CategoryInput = () => {
    const dispatch = useDispatch();
    const productCategory = useSelector(state => state.product.category);

    const handleCategory = e => {
        switch (e.target.value) {
            case "pc-components":
                dispatch(addProduct({ category: "Podzespoły komputera" }));
                break;
            case "peripherals":
                dispatch(addProduct({ category: "Urządzenia peryferyjne" }));
                break;
            case "software":
                dispatch(addProduct({ category: "Oprogramowanie" }));
                break;
            case "other":
                dispatch(addProduct({ category: "Inne" }));
                break;
            default:
                break;
        }
    };

    return (
        <div className="category-input">
            <label htmlFor="category">Kategoria produktu: </label>
            <select id="category" onChange={handleCategory} defaultValue={productCategory}>
                <option disabled hidden value={productCategory}>
                    Wybierz kategorię
                </option>
                <option value="pc-components">Podzespoły komputera</option>
                <option value="peripherals">Urzadzenia peryferyjne</option>
                <option value="software">Oprogramowanie</option>
                <option value="other">Inne</option>
            </select>
            <span className="error-msg">Kategoria produktu jest wymagana!</span>
        </div>
    );
};
