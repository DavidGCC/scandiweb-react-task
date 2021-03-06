import styled from "styled-components";

export const ProductName = styled.h1`
    &::first-line {
        font-weight: 600;
    }
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    margin-bottom: 43px;
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

export const AttributesContainer = styled.div``;

export const AttributeGroup = styled.div`
    display: flex;
    gap: 0.833vw;
    margin-bottom: 8px;
`;

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
    background-color: ${(props) => !props.inStock || !props.active ? "#fff" : "var(--black)"};
    background-color: ${(props) => props.bgColor ? props.bgColor : ""};
    min-width: 63px;
    height: 45px;
    
    border: ${props => !props.inStock 
        ? "1px solid var(--disabled)" 
        : props.error 
            ? "2px solid var(--error)" 
            : props.bgColor && props.active 
                ? "3px solid var(--black)" 
                : "1px solid var(--black)"};
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    color: ${(props) => !props.inStock ? "var(--disabled)" : (props.active ? "#fff" : "#292929")};
`;