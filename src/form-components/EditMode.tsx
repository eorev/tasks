import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleChangeIsStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(e.target.checked);
    };

    return (
        <div>
            <span>Edit Mode</span>
            {isEditMode ? (
                <form>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleChangeName}
                    />
                    <br />
                    <label htmlFor="isStudent">Is a student: </label>
                    <input
                        type="checkbox"
                        id="isStudent"
                        checked={isStudent}
                        onChange={handleChangeIsStudent}
                    />
                </form>
            ) : (
                <p>
                    {name} is {isStudent ? "a" : "not a"} student
                </p>
            )}
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={toggleEditMode}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
