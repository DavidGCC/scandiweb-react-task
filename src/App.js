import React from "react";
import styled from "styled-components";

const Header = styled.h1`
    color: red
`;

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header>Hello</Header>
            </div>
        );
    }
}



export default App;
