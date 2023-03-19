import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <span>Check Answer</span>
            <input
                type="text"
                value={userAnswer}
                onChange={handleAnswerChange}
            />
            {userAnswer === expectedAnswer ? (
                <span style={{ color: "green" }}>✔️ Correct!</span>
            ) : (
                <span style={{ color: "red" }}>❌ Incorrect</span>
            )}
        </div>
    );
}
