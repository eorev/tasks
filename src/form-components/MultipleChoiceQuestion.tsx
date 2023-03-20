import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [answerChecked, setAnswerChecked] = useState(false);

    const handleSelectionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedChoice(event.target.value);
    };

    const checkAnswer = () => {
        setIsAnswerCorrect(selectedChoice === expectedAnswer);
        setAnswerChecked(true);
    };

    return (
        <div>
            <span>Multiple Choice Question</span>
            <select value={selectedChoice} onChange={handleSelectionChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button onClick={checkAnswer}>Check Answer</button>
            {answerChecked && <span>{isAnswerCorrect ? "✔️" : "❌"}</span>}
        </div>
    );
}
