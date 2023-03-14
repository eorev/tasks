import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>();
    const [inProgress, setInProgress] = useState<boolean>();

    const stopQuiz = () => {
        setInProgress(false);
    };

    const startQuiz = (currentAttempts: number) => {
        setAttempts(currentAttempts--);
        setInProgress(true);
    };

    return (
        <div>
            <Button disabled={inProgress}>Start Quiz</Button>
            <Button onClick={stopQuiz}>Stop Quiz</Button>
            <Button disabled={inProgress}>Mulligan</Button>
        </div>
    );
}
