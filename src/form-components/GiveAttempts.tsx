import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState(0);

    const handleRequestChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const requested = parseInt(event.target.value, 10);
        if (!(requested < 0 || isNaN)) {
            setRequestedAttempts(requested);
        }
    };

    const handleGainAttempts = () => {
        setAttemptsLeft(attemptsLeft + requestedAttempts);
        setRequestedAttempts(0);
    };

    const handleUseAttempt = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    const canUseAttempts = attemptsLeft > 0;

    return (
        <div>
            <span>Give Attempts</span>
            <p>Attempts left: {attemptsLeft}</p>
            <label>
                Request additional attempts:
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={handleRequestChange}
                />
            </label>
            <br />
            <button onClick={handleUseAttempt} disabled={!canUseAttempts}>
                Use attempt
            </button>
            <button onClick={handleGainAttempts}>Gain attempts</button>
        </div>
    );
}
