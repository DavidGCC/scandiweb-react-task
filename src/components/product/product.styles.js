import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: 80px 220px 72px 120px;
`;

export const GalleryContainer = styled.div``;

export const DetailsContainer = styled.div`
    display: flex;
    gap: 100px;
`;

export const ProductImage = styled.img`
    width: 610px;
    height: 511px;
`;

export const ProductDetailsContainer = styled.div`
    width: 292;
`;



export const ProductPriceLabel = styled.span`
    margin-top: 40px;
    display: block;
    width: 50px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
`;



export const AddToCartButton = styled.button`
    height: 52px;
    width: 292px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    border: none;
    background-color: var(--green);
    text-transform: uppercase;
    margin: 20px 0 40px 0;
    transition: all 0.2s ease;
    &:active {
        transform: scale(0.95, 0.95);
    }
`;

export const ProductDescription = styled.div``;

export const ImageListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const ListImage = styled.img`
    width: 80px;
    height: 80px;
    cursor: pointer;
`;
