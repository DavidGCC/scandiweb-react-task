import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "../../context/Context";
import client from "../../graphql/client";
import { getCurrencies } from "../../graphql/queries";

import { CurrencySelect } from "./header.styles";

class CurrencySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currencies: [] };
    }
    componentDidMount() {
        client.query({ query: getCurrencies }).then((res) =>
            this.setState((ps) => ({
                ...ps,
                currencies: res.data.currencies,
            }))
        );
    }
    render() {
        return (
            <StoreContext.Consumer>
                {({ currency, setCurrency }) => {
                    return (
                        <CurrencySelect
                            id="currency-select"
                            onChange={setCurrency}
                            defaultValue={currency}>
                            {this.state.currencies.map((i) => (
                                <option value={i} key={i}>
                                    {getSymbolFromCurrency(i)} {i}
                                </option>
                            ))}
                        </CurrencySelect>
                    );
                }}
            </StoreContext.Consumer>
        );
    }
}

export default CurrencySelector;
