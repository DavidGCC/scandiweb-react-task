import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "../../context/Context";
import client from "../../graphql/client";
import { getCurrencies } from "../../graphql/queries";

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
                        <select
                            id="currency-select"
                            onChange={setCurrency}
                            defaultValue={currency}>
                            {this.state.currencies.map((i) => (
                                <option value={i} key={i}>
                                    {getSymbolFromCurrency(i)} {i}
                                </option>
                            ))}
                        </select>
                    );
                }}
            </StoreContext.Consumer>
        );
    }
}

export default CurrencySelector;
