import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <span>Edit Mode</span>
            <div className="form-switch">
                <input
                    id="edit-mode-switch"
                    type="checkbox"
                    onChange={() => setIsEditMode(!isEditMode)}
                />
                <label htmlFor="edit-mode-switch" />
            </div>
            {isEditMode ? (
                <>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                        Is a student
                    </label>
                </>
            ) : (
                <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            )}
        </div>
    );
}
