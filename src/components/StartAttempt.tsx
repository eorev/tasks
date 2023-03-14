import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const stopQuiz = () => {
        setInProgress(false);
    };

    const startQuiz = () => {
        setInProgress(true);
        setAttempts(attempts - 1);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <span>Attempts Remaining: {attempts}</span>
        </div>
    );
}
