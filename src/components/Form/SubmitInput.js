import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../features/cartSlice";
import { clearForm, handleErrors } from "../../features/productSlice";

export const SubmitInput = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const resetData = {
        name: "",
        describe: "",
        category: "",
        price: "",
        errors: [],
    };

    const validate = product => {
        let errors = [];
        const priceReg = /^(\d+)(,\d{1,2}|\.\d{1,2})?$/;

        if (!product.name) {
            errors.push({ nameError: "Nazwa produktu jest wymagana!" });
        }
        if (!product.describe) {
            errors.push({ describeError: "Opis produktu jest wymagany!" });
        }
        if (!product.category) {
            errors.push({ categoryError: "Kategoria produktu jest wymagana!" });
        }
        if (!product.price) {
            errors.push({ priceError: "Cena produktu jest wymagana!" });
        } else if (!priceReg.test(product.price)) {
            errors.push({
                priceError: "Cena nie może mieć więcej niż 2 miejsca po przecinku!",
            });
        }

        if (errors.length !== 0) {
            dispatch(handleErrors(errors));
        } else {
            dispatch(addItemToCart(product));
            dispatch(clearForm(resetData));
        }
    };

    useEffect(() => {
        dispatch(clearForm(resetData));
    }, []);

    const submitProduct = e => {
        e.preventDefault();
        validate(product);
    };

    return <input type="submit" value="Dodaj produkt" onClick={submitProduct} className="submit" />;
};
