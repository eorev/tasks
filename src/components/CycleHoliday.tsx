import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [Holiday, setHoliday] = useState<string>("🎄");

    const switchAlphabetically = () => {
        if (Holiday === "🎄") {
            setHoliday("⛵");
        } else if (Holiday === "⛵") {
            setHoliday("🎃");
        } else if (Holiday === "🎃") {
            setHoliday("🦃");
        } else if (Holiday === "🦃") {
            setHoliday("☘️");
        } else if (Holiday === "☘️") {
            setHoliday("🎄");
        }
    };

    const yearSwitch = () => {
        if (Holiday === "☘️") {
            setHoliday("⛵");
        } else if (Holiday === "⛵") {
            setHoliday("🎃");
        } else if (Holiday === "🎃") {
            setHoliday("🦃");
        } else if (Holiday === "🦃") {
            setHoliday("🎄");
        } else if (Holiday === "🎄") {
            setHoliday("☘️");
        }
    };

    return (
        <div>
            <Button onClick={switchAlphabetically}>Alphabet Switch</Button>
            <Button onClick={yearSwitch}>Year Switch</Button>
            <h1>{`Holiday: ${Holiday}`}</h1>
        </div>
    );
}
