import { gql } from "@apollo/client";


export const getAllItems = gql`
    query {
        category{
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