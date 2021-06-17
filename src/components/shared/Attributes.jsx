import React, { Component } from "react";

export default class Attributes extends Component {
    isAttrActive(attr, chosenAttributes) {
        return Boolean(chosenAttributes.find(i => i.id === attr.id && i.item?.id === attr.item.id))
    }
    render() {
        const {
            container: Container,
            group: Group,
            button: Button,
            attributes,
            chosenAttributes
        } = this.props;
        return (
            <Container>
                {attributes.map((attrType) => {
                    return (
                        <Group>
                            {attrType.items.map((attr) => {
                                const attrToSaveObj = { id: attrType.id, name: attrType.name, type: attrType.type, item: attr }
                                return (
                                    <Button
                                        bgColor={
                                            attrType.type === "swatch" &&
                                            attr.value
                                        }
                                        active={this.isAttrActive({attrToSaveObj, chosenAttributes})}
                                        >
                                        {attrType.type === "swatch" &&
                                            attr.value}
                                    </Button>
                                );
                            })}
                        </Group>
                    );
                })}
            </Container>
        );
    }
}
