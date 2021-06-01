import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import { CurrencyContext } from "../../context/CurrencyContext";
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
            <CurrencyContext.Consumer>
                {({ currency, setCurrency }) => {
                    return (
                        <select
                            id="currency-select"
                            onChange={setCurrency}
                            defaultValue={currency}>
                            {this.state.currencies.map((i) => (
                                <option value={i} key={i}>
                                    {getSymbolFromCurrency(i)}
                                </option>
                            ))}
                        </select>
                    );
                }}
            </CurrencyContext.Consumer>
        );
    }
}

export default CurrencySelector;
