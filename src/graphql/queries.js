import { gql } from "@apollo/client";


export const getItems = gql`
    query getItems($name: String!){
        category(input: { title: $name }) {
            products {
                name
                inStock
                gallery
                prices {
                    currency
                    amount
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