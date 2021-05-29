import React from "react";


class CurrencySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedCurrency: "USD" }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            selectedCurrency: e.target.value
        });
    }

    render() {
        return (
            <select id="currency-select" onChange={this.handleChange} value={this.state.selectedCurrency}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="JPY">JPY</option>
                <option value="RUB">RUB</option>
            </select>
        );
    }
}

export default CurrencySelector;