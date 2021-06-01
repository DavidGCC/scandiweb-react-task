import React from "react";

import CurrencySelector from "./CurrencySelector";
import CartPreview from "./CartPreview";

class Actions extends React.Component {

    render() {
        return(
            <div id="actions">
                <CurrencySelector />
                <CartPreview />
            </div>
        );
    }
}

export default Actions;