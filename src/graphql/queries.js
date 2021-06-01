import { gql } from "@apollo/client";


export const getItems = gql`
    query getItems($name: String!){
        category(input: { title: $name }) {
            name
            products {
                name
                inStock
                gallery
                description
                category
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