import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan"
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <span>Change Color</span>
            <Form>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        inline
                        label={color}
                        name="color"
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    width: "100px",
                    textAlign: "center"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
