import React from "react";
import { NameInput } from "./ProductNameInput";
import { DescribeInput } from "./DescribeInput";
import { CategoryInput } from "./CategoryInput";
import { PriceInput } from "./PriceInput";
import { SubmitInput } from "./SubmitInput";

export const Form = () => {
    return (
        <form className="form">
            <h1 className="heading">Media Master</h1>
            <h2 className="subheading">
                Szeroki Wybór Asortymentu. Wyjątkowe Okazje i Atrakcyjne Ceny.
            </h2>
            <div className="form__content">
                <NameInput />
                <DescribeInput />
                <PriceInput />
                <CategoryInput />
                <SubmitInput />
            </div>
        </form>
    );
};
