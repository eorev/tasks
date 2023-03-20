import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [additionalAttempts, setAdditionalAttempts] = useState(0);

    const useAttempt = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };

    const gainAttempts = () => {
        if (additionalAttempts > 0) {
            setAttempts(attempts + additionalAttempts);
            setAdditionalAttempts(0);
        }
    };

    return (
        <div>
            <span>Give Attempts</span>
            <p>Attempts left: {attempts}</p>
            <label>
                Request additional attempts:
                <input
                    type="number"
                    value={additionalAttempts}
                    onChange={(e) =>
                        setAdditionalAttempts(parseInt(e.target.value) || 0)
                    }
                />
            </label>
            <br />
            <button onClick={useAttempt} disabled={attempts === 0}>
                Use attempt
            </button>
            <button onClick={gainAttempts}>Gain attempts</button>
        </div>
    );
}
