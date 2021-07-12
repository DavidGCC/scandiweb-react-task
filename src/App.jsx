import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import equal from "deep-equal";
import "scss/style.scss";

// COMPONENT IMPORTS
import Header from "components/header";
import Listings from "components/listings";
import Home from "components/home";
import Product from "components/product/";
import Cart from "components/cart/";
//

import { getCategories } from "graphql/queries";
import client from "graphql/client";

import { StoreContext } from "./context/Context";

import { genID } from "./utils";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "USD",
            setCurrency: this.handleCurrencyChange,
            categories: [],
            items: [],
            cart: {},
            selectedCategory: "",
        };
        this.addToCart = this.addToCart.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.setSelectedCategory = this.setSelectedCategory.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.addAttribute = this.addAttribute.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.setItems = this.setItems.bind(this);
    }
    
    setSelectedCategory(category) {
        if (typeof category === "undefined") {
            this.setState({ selectedCategory: "" });
        } else {
            this.setState({ selectedCategory: category });
        }
    }
    
    addToCart(item, attrs = null) {
        const {cart} = this.state;
        const attributes = attrs ? attrs : item.attributes.reduce((res, curr) => {
            res = [
                ...res,
                {
                    id: curr.id,
                    name: curr.name,
                    type: curr.type,
                    item: null,
                },
            ];
            return res;
        }, []);
        for (const id in cart) {
            if (equal(cart[id].chosenAttributes, attributes) && cart[id].item.name === item.name) {
                cart[id].count++;
                this.setState({ cart });
                return;
            }
        }
        const id = genID();
        cart[id] = {
            item, count: 1, chosenAttributes: attributes
        };
        this.setState({ cart });
    }
    
    increaseCount(itemID) {
        const {cart} = this.state;
        cart[itemID].count++;
        this.setState({ cart });
    }
    
    addAttribute(itemID, attribute) {
        const {cart} = this.state;
        const {chosenAttributes} = cart[itemID];
        const newChosenAttributes = chosenAttributes.map((i) => {
            if (i.id === attribute.id) {
                return {
                    ...i,
                    item: attribute.item,
                };
            }
            return i;
        });
        cart[itemID].chosenAttributes = newChosenAttributes;
        this.setState({ cart });
    }
    
    removeFromCart(itemID) {
        const {cart} = this.state;
        if (cart[itemID].count > 1) {
            cart[itemID].count--;
        } else {
            delete cart[itemID];
        }
        this.setState({ cart });
    }

    handleCurrencyChange(curr) {
        this.setState({ currency: curr });
    }

    setItems(items) {
        const availableItems = [ ...this.state.items, ...items ];
        const finalItems = [];
        const map = new Map();
        availableItems.forEach(item => {
            if (!map.has(item.name)) {
                map.set(item.name, true);
                finalItems.push(item);
            }
        });
        this.setState({ items: finalItems });
    }


    componentDidMount() {
        client
            .query({
                query: getCategories,
            })
            .then((response) => {
                const categories = response.data.category.products.reduce(
                    (acc, curr) => {
                        if (!acc.includes(curr.category)) {
                            acc.push(curr.category);
                        }
                        return acc;
                    },
                    []
                );
                this.setState({ categories: ["all", ...categories] });
            });
    }

    render() {
        return (
            <StoreContext.Provider
                value={{
                    ...this.state,
                    setCurrency: this.handleCurrencyChange,
                    addToCart: this.addToCart,
                    setSelectedCategory: this.setSelectedCategory,
                    removeFromCart: this.removeFromCart,
                    addAttribute: this.addAttribute,
                    increaseCount: this.increaseCount,
                    setItems: this.setItems
                }}>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/listings" component={Listings} />
                        <Route path="/product/:itemname" component={Product} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </Router>
            </StoreContext.Provider>
        );
    }
}

export default App;
