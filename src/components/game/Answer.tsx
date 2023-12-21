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
    <div className='my-5'>
      <form onSubmit={onSubmit}>
        <input
          onChange={onAnswerChange}
          value={answer}
          type={answerType}
          placeholder={placeholder}
          className='border-2 border-gray-200 rounded-xl p-2 w-[300px] mx-5'
        />
        <button className='bg-[#2176ff] text-white p-2 rounded-xl hover:scale-110 transition duration-200' type='submit'>Send svar</button>
      </form>
    </div>
  );
};

export default Answer;
