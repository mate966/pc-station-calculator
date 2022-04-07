import React from "react";
import { NameInput } from "./ProductNameInput";
import { DescribeInput } from "./DescribeInput";
import { CategoryInput } from "./CategoryInput";
import { PriceInput } from "./PriceInput";
import { SubmitInput } from "./SubmitInput";

export const Form = () => {
    return (
        <form>
            <NameInput />
            <DescribeInput />
            <CategoryInput />
            <PriceInput />
            <SubmitInput />
        </form>
    );
};
