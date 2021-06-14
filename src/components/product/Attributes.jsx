import React, { Component } from "react";
import styled from "styled-components";

const AttributesContainer = styled.div``;

const AttributeGroup = styled.div``;

const AttributeGroupName = styled.span`
    display: block;
    font-family: "Roboto Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 8px;
`;

const AttributeButton = styled.button`
    background-color: ${(props) =>
        !props.active
            ? "var(--disabledAttr)"
            : props.bgColor
            ? props.bgColor
            : "var(--black)"};
    min-width: 64px;
    height: 45px;
    border: 1px solid var(--black);
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    color: ${(props) => (props.active ? "#fff" : "#292929")};
    margin: 0 12px 8px 0;
`;

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
