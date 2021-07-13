import React, { PureComponent } from "react";
import PropTypes from "prop-types";


import { StoreContext } from "context/Context";

export default class Attributes extends PureComponent {

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

    defaultHandleClick({ itemID, attr }) {
        const { item } = this.context.cart[itemID];
        if (item.inStock) {
            this.context.addAttribute(itemID, attr);
        }
    }

    render() {
        const {
            Container,
            Group,
            Button,
            GroupName,
            item,
            error,
            itemID
        } = this.props;
        const { cart } = this.context;

        // if attributes dont require specific click handler default will just add attribute to cart item
        const clickHandler = this.props.handleClick || this.defaultHandleClick;

        const chosenAttributes = this.props.chosenAttributes || cart[itemID].chosenAttributes;

        return (
            <Container>
                {item.attributes.map((attrType) => {
                    const { id, name, type, items } = attrType;
                    return (
                        <div key={attrType.id}>
                            <GroupName>{name}:</GroupName>
                            <Group key={id}>
                                {items.map((attr) => {
                                    // create object to be saved as an item attribute
                                    const attrToSaveObj = {
                                        id,
                                        name,
                                        type,
                                        item: attr
                                    };

                                    return (
                                        <Button
                                            key={attr.id}
                                            inStock={item.inStock}
                                            onClick={() => clickHandler({ itemID, attr: attrToSaveObj })}
                                            bgColor={type === "swatch" && attr.value}
                                            active={this.isAttrActive(attrToSaveObj, chosenAttributes)}
                                            error={error ? error.some(i => i === id) : false}
                                        >
                                            {
                                                type !== "swatch" && attr.value
                                            }
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

Attributes.propTypes = {
    Container: PropTypes.object.isRequired,
    Group: PropTypes.object.isRequired,
    Button: PropTypes.object.isRequired,
    GroupName: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
    itemID: PropTypes.string,
    chosenAttributes: PropTypes.array,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};