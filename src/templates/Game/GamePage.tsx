"use client";
import React, { use, useState } from 'react';
import Question from '@/components/game/Question';
import Answer from '@/components/game/Answer';
import questionAnswers from "@/lib/question-answers.json";
import { useRouter } from 'next/navigation';

type GameDataType = {
  id: number;
  question: string;
  answers?: string[];
  image?: string;
}

const GamePage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answerIsCorrect, setAnswerIsCorrect] = useState<boolean>(false);
  const [answerIsWrong, setAnswerIsWrong] = useState<boolean>(false);
  const router = useRouter();


  const gameData: GameDataType[] = questionAnswers;
  const currentQuestion = gameData[currentQuestionIndex];

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const lowerCaseUserAnswer = userAnswer.toLowerCase();
  
    if (currentQuestion.answers && currentQuestion.answers.includes(lowerCaseUserAnswer)) {
      setAnswerIsCorrect(true);
      setUserAnswer('');
    } else {
      setAnswerIsWrong(true);
      setUserAnswer('');
      setTimeout(() => {
        setAnswerIsWrong(false);
      }, 3000);
    }
  };
  
  const handleNextQuestion = () => {
    // If it's the last question and the answer is correct, navigate to the endscreen
    if (currentQuestionIndex >= gameData.length - 1 && answerIsCorrect) {
      router.push('/game/endscreen');
      return;
    }
  
    // If it's not the last question, or the answer was wrong, go to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnswerIsCorrect(false);
    setAnswerIsWrong(false);
  }

  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center'>
        <Question question={currentQuestion.question} image={currentQuestion.image} />
        <Answer
          answerType='text'
          placeholder='Skriv svar her'
          answer={userAnswer}
          onAnswerChange={(e) => setUserAnswer(e.target.value)}
          onSubmit={handleAnswerSubmit}
        />

        {
          answerIsCorrect &&
          <div>
            <p className='text-center text-green-600 font-semibold text-[20px] my-4'>Rigtigt svar!</p>
            <button className='bg-[#2176ff] text-white p-2 rounded-xl hover:scale-110 transition duration-200' onClick={handleNextQuestion}>Næste spørgsmål</button>
          </div>
        }

        {
          answerIsWrong &&

          <div className='flex flex-col justify-center items-center'>

            <p className='text-center my-2 text-red-600 font-semibold text-[20px]'>Forkert svar!</p>
            <p className='my-2 text-red-600 font-semibold text-[20px]'>Prøv igen!</p>

          </div>
        }



      </div>
    </div>
  );
};

export default GamePage;
