import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../features/cartSlice";
import { clearInputs } from "../../features/productSlice";

export const SubmitInput = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    // useEffect(() => {
    //     dispatch(addNameError(""));
    // }, [addNameError]);

    // const validate = items => {
    //     if (!items.payload.productName) {
    //         console.log("Nazwa produktu jest wymagana!");
    //     }
    //     if (!items.payload.productDescribe) {
    //         console.log("Opis produktu jest wymagany!");
    //     }
    //     if (!items.payload.productCategory) {
    //         console.log("Kategoria produktu jest wymagana!");
    //     }
    //     if (!items.payload.productPrice) {
    //         console.log("Cena produktu jest wymagana!");
    //     }
    // };

    const resetData = {
        name: "",
        describe: "",
        category: "",
        price: "",
    };

    const submitProduct = e => {
        e.preventDefault();
        console.log(product);
        dispatch(addItemToCart(product));
        dispatch(clearInputs(resetData));

        // validate(
        //     dispatch(
        //         addItemToCart({
        //             productName: productName,
        //             productDescribe: productDescribe,
        //             productCategory: productCategory,
        //             productPrice: productPrice,
        //         })
        //     )
        // );
    };

    return <input type="submit" value="Dodaj produkt" onClick={submitProduct} />;
};
