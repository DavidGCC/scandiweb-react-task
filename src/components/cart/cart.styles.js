import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    padding: 80px 17vw 54px 7vw;
`;

export const CartLabel = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    height: 40px;
    text-transform: uppercase;
    width: 6vw;
    margin-bottom: 60px;
`;

export const CartItems = styled.div`

`;

export const CartItemContainer = styled.div`
    border-top: 1px solid #e5e5e5;
    width: 76vw;
    min-height: 205px;
    display: flex;
    flex-direction: row;
    margin: 20px 0;
`;

export const CartItemDetailsContainer = styled.div`
    width: 100%;
`;

export const CartItemActionsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 20px 1vw 0 0;
    height: 100%;
`;


export const CartItemName = styled.span`
    display: block;
    &::first-line {
        font-weight: 600;
    }
    font-size: 30px;
    margin: 20px 0 55px 0;
    width: 20vw;
    height: 27px;
    font-weight: 400;
    color: var(--black);
    line-height: 27px;
`;

export const CartItemPrice = styled.span`
    display: block;
    font-weight: 700;
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    font-size: 27px;
    height: 45px;
`;

export const CartCountButton = styled.button`
    background-color: #fff;
    border: 1px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
`;

export const CartItemCount = styled.span`
    font-size: 500;
    font-size: 24px;
    line-height: 160%;
    color: var(--black);
`;

export const CartItemImageContainer = styled.div`
    position: relative;
    margin-top: 20px;
    width: 10vw;
    height: 185px;
    z-index: 5;

    img {
        width: 100%;
        height: 100%;
    }

`;

export const CartArrows = styled.div`
    position: absolute;
    z-index: 6;
    top: 50%;
    left: 50%;
`;

export const CartArrowNext = styled(CartArrows)`
    left: calc(100% - 16px);
`;

export const CartArrowPrevious = styled(CartArrows)`
    left: 8px;
`;