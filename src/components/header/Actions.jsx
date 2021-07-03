import React from "react";

import CurrencySelector from "./CurrencySelector";
import CartOverlay from "./CartOverlay";

import { ActionContainer } from "./header.styles";

class Actions extends React.PureComponent {

    render() {
        return(
            <ActionContainer id="actions">
                <CurrencySelector />
                <CartOverlay />
            </ActionContainer>
        );
    }
}

export default Actions;