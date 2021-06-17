import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    padding: 80px 242px 54px 100px;
    height: 185px;
`;

export const CartLabel = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    height: 40px;
    text-transform: uppercase;
    width: 84px;
    margin-bottom: 60px;
`;

export const CartItems = styled.div`

`;

export const CartItemContainer = styled.div`
    border-top: 1px solid #e5e5e5;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const CartItemDetailsContainer = styled.div``;

export const CartItemActionsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 20px 12px 20px 0;
`;


export const CartItemName = styled.span`
    display: block;
    &::first-line {
        font-weight: 600;
    }
    font-size: 30px;
    margin: 20px 607px 12px 0;
    width: 292px;
    height: 27px;
    font-weight: 400;
    color: var(--black);
    line-height: 27px;
`;

export const CartItemPrice = styled.span`
    display: block;
    font-weight: 700;
    margin: 0 814px 12px 0;
    display: flex;
    align-items: center;
    font-size: 27px;
    height: 46px;
`;

export const CartCountButton = styled.button`
    background-color: #fff;
    border: 1px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
`;

export const CartItemCount = styled.span`

`;

export const CartItemImageContainer = styled.div`
    position: relative;
    width: 141px;
    height: 185px;
    z-index: 5;
`;

export const CartArrows = styled.div`
    position: absolute;
    z-index: 6;
    top: 50%;
    left: 50%;
`;

export const CartArrowNext = styled(CartArrows)`
    left: calc(100% - 8px);
`;

export const CartArrowPrevious = styled(CartArrows)`
    left: 8px;
`;