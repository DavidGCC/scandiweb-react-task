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

import { StoreContext } from "./context/Context";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrencyChange = (e) => {
            e.preventDefault();
            this.setState((prevState) => ({
                ...prevState,
                currency: e.target.value,
            }));
        };
        this.state = {
            currency: "USD",
            setCurrency: this.handleCurrencyChange,
            categories: ["all"],
        };
    }
    componentDidMount() {
        client
            .query({
                query: getCategories,
            })
            .then((response) => {
                const uniques = response.data.category.products.reduce(
                    (acc, curr) => {
                        if (!acc.includes(curr.category)) {
                            acc.push(curr.category);
                        }
                        return acc;
                    },
                    []
                );
                this.setState((prevState) => ({
                    ...prevState,
                    categories: ["all", ...uniques],
                }));
            });
    }

    render() {
        return (
            <StoreContext.Provider value={{ ...this.state, setCurrency: this.handleCurrencyChange }}>
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={Home}
                        />
                        <Route path="/listings" component={Listings} />
                    </Switch>
                </Router>
            </StoreContext.Provider>
        );
    }
}

export default App;
