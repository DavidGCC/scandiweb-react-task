import React from "react";

import CurrencySelector from "./CurrencySelector";
import Cart from "./Cart";

class Actions extends React.Component {

    render() {
        return(
            <div id="actions">
                <CurrencySelector />
                <Cart />
            </div>
        );
    }
}

export default Actions;