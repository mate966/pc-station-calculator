import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { addProduct } from "../../features/productSlice";

export const CategoryInput = () => {
    const dispatch = useDispatch();
    const productCategory = useSelector(state => state.product.category);
    const errorMsg = useSelector(state => state.product.errors.map(err => err.categoryError));
    const options = [
        { value: "pc-components", label: "Podzespoły komputerowe" },
        { value: "peripherals", label: "Urządzenia peryferyjne" },
        { value: "software", label: "Oprogramowanie" },
        { value: "other", label: "Inne" },
    ];
    const customStyles = {};

    const handleCategory = e => {
        console.log(e.value);
        switch (e.value) {
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
        <div className="input-container category-input">
            <Select
                styles={customStyles}
                options={options}
                onChange={e => handleCategory(e)}
                value={
                    !productCategory ? { label: "Kategoria produktu" } : { label: productCategory }
                }
            />
            <span className="error-msg error-msg--category">{errorMsg && errorMsg}</span>
        </div>
    );
};
