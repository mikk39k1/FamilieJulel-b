"use client";
import React, { useState } from 'react'

type AnswerProps = {
    answerType: string;
    placeholder?: string;
    answer: string[];
    submitAnswer?: () => void;
}

const Answer = ({ answerType, placeholder, answer }: AnswerProps) => {

    const [answerState, setAnswerState] = useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (answerState === answer) {
            console.log('Correct answer');
        } else {
            console.log('Wrong answer');
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setAnswerState(e.target.value)} type={answerType} placeholder={placeholder} />
                <button type='submit'>Svar</button>
            </form>
        </div>
    )
}

export default Answer