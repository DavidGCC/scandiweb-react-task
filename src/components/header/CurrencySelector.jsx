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
                            <option value="USD">&#36;</option>
                            <option value="GBP">&#163;</option>
                            <option value="AUD">A&#36;</option>
                            <option value="JPY">&#165;</option>
                            <option value="RUB">&#8381;</option>
                        </select>
                    );
                }}
            </CurrencyContext.Consumer>
        );
    }
}

export default CurrencySelector;
