import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <header className="headerTwo">
                <h1>This is my second header.</h1>
                <img src="https://picsum.photos/20/30" alt="lorem picsum" />
                <ul className="headerTwo__list">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ul>
                <Button onClick={() => console.log("Hello World!")}>
                    Click Me!
                </Button>
            </header>
            <h1>Ethan Orevillo</h1>
            <h2>Hello World</h2>
            <Container>
                <Row>
                    <Col>
                        <h1>First Column</h1>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <h1>Second Column</h1>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
