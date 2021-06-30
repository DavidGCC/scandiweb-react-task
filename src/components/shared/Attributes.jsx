import React, { Component } from "react";

import { StoreContext } from "context/Context";

export default class Attributes extends Component {
    constructor(props) {
        super(props);
        this.defaultHandleClick = this.defaultHandleClick.bind(this);
    }

    isAttrActive(attr, chosenAttributes) {
        return Boolean(
            chosenAttributes.find(
                (i) => i.id === attr.id && i.item?.id === attr.item.id
            )
        );
    }

    defaultHandleClick({ item, attr }) {
        this.context.addAttribute(item, attr);
    }

    render() {
        const {
            container: Container,
            group: Group,
            button: Button,
            groupName: GroupName,
            item,
        } = this.props;
        const clickHandler = item.inStock ? (this.props.handleClick || this.defaultHandleClick) : () => null;
        const chosenAttributes =
            this.props.chosenAttributes ||
            this.context.cart[item.name].chosenAttributes;
        return (
            <Container>
                {item.attributes.map((attrType) => {
                    return (
                        <div key={attrType.id}>
                            {this.props.groupName ? (
                                <GroupName>{attrType.name}:</GroupName>
                            ) : null}
                            <Group key={attrType.id}>
                                {attrType.items.map((attr) => {
                                    const attrToSaveObj = {
                                        id: attrType.id,
                                        name: attrType.name,
                                        type: attrType.type,
                                        item: attr,
                                    };
                                    return (
                                        <Button
                                            key={attr.id}
                                            inStock={item.inStock}
                                            onClick={() =>
                                                clickHandler({
                                                    item,
                                                    attr: attrToSaveObj,
                                                })
                                            }
                                            bgColor={
                                                attrType.type === "swatch" &&
                                                attr.value
                                            }
                                            active={this.isAttrActive(
                                                attrToSaveObj,
                                                chosenAttributes
                                            )}>
                                            {attrType.type !== "swatch" &&
                                                attr.value}
                                        </Button>
                                    );
                                })}
                            </Group>
                        </div>
                    );
                })}
            </Container>
        );
    }
}

Attributes.contextType = StoreContext;
