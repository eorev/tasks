import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const changeType = () => {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    };

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {type === "short_answer_question" ? (
                <h1>Short Answer</h1>
            ) : (
                <h1>Multiple Choice</h1>
            )}
        </div>
    );
}
