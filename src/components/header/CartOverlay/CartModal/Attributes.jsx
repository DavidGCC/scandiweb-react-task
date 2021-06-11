import React, { Component } from "react";
import styled from "styled-components";

import { StoreContext } from "../../../../context/Context";

const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: attrs;
    margin: 8px 0;
`;
const AttributeGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

const AttrButton = styled.button`
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

export default class Attributes extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(item, attrType, attr) {
        this.context.addAttribute(item, {
            id: attrType.id,
            name: attrType.name,
            type: attrType.type,
            item: attr,
        });
    }

    render() {
        const { item } = this.props;
        return (
            <AttributesContainer>
                {item.attributes.map((attrType) => {
                    return (
                        <AttributeGroup key={attrType.id}>
                            {attrType.items.map((attr) => {
                                return (
                                    <AttrButton
                                        color={
                                            attrType.type === "swatch"
                                                ? attr.value
                                                : null
                                        }
                                        onClick={() =>
                                            this.handleClick(
                                                item,
                                                attrType,
                                                attr
                                            )
                                        }
                                        active={this.context.cart[
                                            item.name
                                        ].chosenAttributes.find((i) => {
                                            return (
                                                i.id === attrType.id &&
                                                i.item?.id === attr.id
                                            );
                                        })}>
                                        {attrType.type !== "swatch" &&
                                            attr.displayValue}
                                    </AttrButton>
                                );
                            })}
                        </AttributeGroup>
                    );
                })}
            </AttributesContainer>
        );
    }
}

Attributes.contextType = StoreContext;
