// Answer.tsx
import React from 'react';

type AnswerProps = {
  answerType: string;
  placeholder?: string;
  answer: string;
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Answer = ({ answerType, placeholder, answer, onAnswerChange, onSubmit }: AnswerProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onAnswerChange}
          value={answer}
          type={answerType}
          placeholder={placeholder}
        />
        <button type='submit'>Submit Answer</button>
      </form>
    </div>
  );
};

export default Answer;
