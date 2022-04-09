import "./css/main.css";

import { Form } from "./components/Form/Form";
import { Cart } from "./components/Cart/Cart";

export const App = () => {
    return (
        <div className="app">
            <div className="container">
                <div className="image"></div>
                <div className="content">
                    <Form />
                    <Cart />
                </div>
            </div>
        </div>
    );
};
