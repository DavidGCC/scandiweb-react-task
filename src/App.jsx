import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./scss/style.scss";

// COMPONENT IMPORTS
import Header from "./components/header";
import Listings from "./components/listings";
import Home from "./components/home/index";
//

import { getCategories } from "./graphql/queries";
import client from "./graphql/client";


import { CurrencyContext } from "./context/CurrencyContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrencyChange = (e) => {
            e.preventDefault();
            this.setState((prevState) => ({
                ...prevState,
                currency: e.target.value,
            }));
        }
        this.state = { 
            currency: "USD",
            setCurrency: this.handleCurrencyChange,
            categories: ["all"]
        };
    }
    componentDidMount() {
        client
            .query({
                query: getCategories,
            })
            .then((response) => {
                const uniques = response.data.category.products.reduce((acc, curr) => {
                    if (!acc.includes(curr.category)) {
                        acc.push(curr.category);
                    }
                    return acc;
                }, []);
                this.setState(prevState => ({ ...prevState, categories: ["all", ...uniques] }));
            })
    }

    render() {
        return (
            <CurrencyContext.Provider value={{ currency: this.state.currency, setCurrency: this.state.setCurrency }}>
                <Router>
                    <Header
                        selectedCurrency={this.state.selectedCurrency}
                        handleCurrencyChange={this.handleCurrencyChange}
                        categories={this.state.categories}
                    />
                    <Switch>
                        <Route path="/" exact component={() => <Home categories={this.state.categories} />} />
                        <Route path="/listings" component={Listings}/>
                    </Switch>
                </Router>
            </CurrencyContext.Provider>
        );
    }
}

export default App;
