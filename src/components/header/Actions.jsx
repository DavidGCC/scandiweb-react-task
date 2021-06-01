import React from "react";

import CurrencySelector from "./CurrencySelector";
import CartIcon from "./CartIcon";

class Actions extends React.Component {

    render() {
        return(
            <div id="actions">
                <CurrencySelector />
                <CartIcon />
            </div>
        );
    }
}

export default Actions;