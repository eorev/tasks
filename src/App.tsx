import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header>
                <h1>CISC275</h1>
                <img src="https://picsum.photos/200/300" alt="lorem picsum" />
                <ul className="headerTwo__list">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ul>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>
            <p>Ethan Orevillo</p>
            <p>Hello World</p>
            <Container>
                <Row>
                    <Col>
                        <p>First Column</p>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <p>Second Column</p>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
