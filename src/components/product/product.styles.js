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

export const ProductName = styled.h1`
    &::first-line {
        font-weight: 600;
    }
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    margin-bottom: 43px;
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

export const ProductPrice = styled.span`
    display: block;
    width: auto;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin: 10px 0 20px 0;
    height: 46px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

export const AttributesContainer = styled.div``;

export const AttributeGroup = styled.div``;

export const AttributeGroupName = styled.span`
    display: block;
    font-family: "Roboto Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 8px;
`;

export const AttributeButton = styled.button`
    background-color: ${(props) =>
        !props.active
            ? "var(--disabledAttr)"
            : props.bgColor
            ? props.bgColor
            : "var(--black)"};
    min-width: 64px;
    height: 45px;
    border: 1px solid var(--black);
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    color: ${(props) => (props.active ? "#fff" : "#292929")};
    margin: 0 12px 8px 0;
`;