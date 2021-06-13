import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalFooterContainer = styled.div`
    display: flex;
`;

export const ButtonCommon = styled.button`
    width: 140px;
    height: 43px;
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.5s ease;
    &:active {
        transform: scale(0.95, 0.95);
    }
`;

export const ViewBagButton = styled(ButtonCommon)`
    background-color: #fff;
    border: 1px solid var(--black);
    color: var(--black);
    margin-right: 12px;
`;

export const CheckOutButton = styled(ButtonCommon)`
    background-color: var(--green);
    color: #fff;
    border: none;
`;

export const SLink = styled(Link)`
    text-decoration: none;
`;

export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: attrs;
    margin: 8px 0;
`;
export const AttributeGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AttrButton = styled.button`
    background-color: ${(props) => !props.active ? "var(--disabledAttr)" : props.color ? props.color : "#fff"};
    border: 1px solid ${props => props.active ? "var(--black)" : "var(--disabledAttr)"};
    color: ${props => props.active ? "var(--black)" : "var(--disabledAttr)"};
    min-width: 24px;
    height: 24px;
    margin: 0 8px 4px 0;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 22.4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 5px;
    width: 325px;
    background-color: #fff;
    z-index: 2;
    padding: 20px;
`;

export const CartName = styled.span`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

export const ItemCount = styled.span`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;


export const ItemContainer = styled.div`
    width: 90%;
    display: grid;
    height: 137px;
    grid-template-areas:
        "name actions img"
        "attrs actions img ";
    margin: 20px 0;
`;

export const NameAndPrice = styled.div`
    grid-area: name;
    width: 136px;
    margin: 0 18px 27px 0;
    padding: 0;
    align-items: start;
`;

export const Actions = styled.div`
    grid-area: actions;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 137px;
`;

export const ImageContainer = styled.div`
    grid-area: img;
    margin-left: 10px;
`;

export const ItemName = styled.span`
    margin-bottom: 5px;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
`;

export const ItemNumbers = styled.span`
    display: block;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

export const ItemPrice = styled(ItemNumbers)`
    text-align: left;
    margin: 0;
`;

export const ItemImage = styled.img`
    width: 105px;
    height: 137px;
    float: right;
    grid-area: img;
`;

export const CountControl = styled.button`
    background-color: #ffffff;
    font-weight: 400;
    width: 24px;
    height: 24px;
    border: 1px solid var(--black);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


export const TotalPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 43px 0 35px 0;
`;

export const TotalPriceTotal = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`;

export const TotalPriceCost = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 25.6px;
`;

export const Overlay = styled.div`
    background: #39374838;
    width: 100%;
    height: 100%;
    position: fixed;
    top: ${props => props.scroll <= 80 ? 80 - props.scroll : "0"}px;
    left: 0;
    z-index: 1;
`;
