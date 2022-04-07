import React from "react";
import { NameInput } from "./NameInput";
import { DetailsInput } from "./DetailsInput";
import { CategoryInput } from "./CategoryInput";
import { PriceInput } from "./PriceInput";

export const Form = () => {
    return (
        <div>
            <NameInput />
            <DetailsInput />
            <CategoryInput />
            <PriceInput />
        </div>
    );
};
