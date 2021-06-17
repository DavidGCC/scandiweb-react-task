import React, { Component } from "react";

import { AttributesContainer, AttributeGroup, AttributeGroupName, AttributeButton } from "../shared/shared.styles";

export default class Attributes extends Component {
    render() {
        return (
            <AttributesContainer>
                {this.props.attributes.map((attrType) => {
                    return (
                        <AttributeGroup key={attrType.id}>
                            <AttributeGroupName>
                                {attrType.name}:
                            </AttributeGroupName>
                            {attrType.items.map((item) => {
                                const attrToSave = {
                                    id: attrType.id,
                                    name: attrType.name,
                                    type: attrType.type,
                                    item,
                                };
                                return (
                                    <AttributeButton
                                        key={item.id}
                                        onClick={() =>
                                            this.props.saveAttribute(attrToSave)
                                        }
                                        bgColor={
                                            attrType.type === "swatch"
                                                ? item.value
                                                : null
                                        }
                                        active={this.props.isAttrActive(
                                            attrToSave
                                        )}>
                                        {attrType.type !== "swatch" &&
                                            item.value}
                                    </AttributeButton>
                                );
                            })}
                        </AttributeGroup>
                    );
                })}
            </AttributesContainer>
        );
    }
}
