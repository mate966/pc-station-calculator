import { Form } from "./components/Form";
import { Cart } from "./components/Cart";
import { Summary } from "./components/Summary";

export const App = () => {
    return (
        <div className="App">
            <Form />
            <Cart />
            <Summary />
        </div>
    );
};
