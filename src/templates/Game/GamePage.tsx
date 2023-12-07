"use client";
import React, { useState } from 'react';
import Question from '@/components/game/Question';
import Answer from '@/components/game/Answer';
import questionAnswers from "@/lib/question-answers.json";

type GameDataType = {
  id: number;
  question: string;
  answers?: string[];
  image?: string;
}

const GamePage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const gameData: GameDataType[] = questionAnswers;
  const currentQuestion = gameData[currentQuestionIndex];

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lowerCaseUserAnswer = userAnswer.toLowerCase();

    if (currentQuestion.answers && currentQuestion.answers.includes(lowerCaseUserAnswer)) {
      console.log('Correct answer');
    } else {
      console.log('Wrong answer');
    }

    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setUserAnswer('');
  };

  return (
    <div>
      <Question question={currentQuestion.question} image={currentQuestion.image} />
      <Answer
        answerType='text'
        placeholder='Insert your answer here'
        answer={userAnswer}
        onAnswerChange={(e) => setUserAnswer(e.target.value)}
        onSubmit={handleAnswerSubmit}
      />
    </div>
  );
};

export default GamePage;
