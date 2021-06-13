import React, { Component } from "react";

import { StoreContext } from "../../../../context/Context";
import { AttributesContainer, AttributeGroup, AttrButton } from "./modal.styles";


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
                                        key={attr.id}
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
