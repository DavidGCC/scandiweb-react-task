import React from "react";

import { CurrencyContext } from "../../context/CurrencyContext";

class CurrencySelector extends React.Component {
    render() {
        // let currency = this.context;
        // console.log(currency);
        return (
            <CurrencyContext.Consumer>
                {({currency, setCurrency}) => {
                    return (
                        <select
                            id="currency-select"
                            onChange={setCurrency}
                            defaultValue={currency}>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="AUD">AUD</option>
                            <option value="JPY">JPY</option>
                            <option value="RUB">RUB</option>
                        </select>
                    );
                }}
            </CurrencyContext.Consumer>
        );
    }
}

export default CurrencySelector;
