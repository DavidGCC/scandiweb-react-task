import { gql } from "@apollo/client";


export const getItems = gql`
    query getItems($name: String!){
        category(input: { title: $name }) {
            products {
                name
                gallery
                inStock
                prices {
                    currency
                    amount
                }
                category
                description
                attributes {
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                }
            }
        }
    }
`;

export const getCategories = gql`
    query {
        category {
            products {
                category
            }
        }
    }
`;

export const getCurrencies = gql`
    query {
        currencies
    }
`;