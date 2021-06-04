import React from "react";

import CurrencySelector from "./CurrencySelector";
import CartOverlay from "./CartOverlay";

class Actions extends React.Component {

    render() {
        return(
            <div id="actions">
                <CurrencySelector />
                <CartOverlay />
            </div>
        );
    }
}

export default Actions;