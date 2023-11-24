import Question from '@/components/game/Question'
import React from 'react'
import questionAnswers from "@/lib/question-answers.json"
import Answer from '@/components/game/Answer'

type GameDataType = {
    id: number;
    question: string;
    answers?: string[];
    image?: string;
}

const GamePage = () => {

    const gameData: GameDataType[] = questionAnswers;

    const answerOptions = () => {
        const options: number[] = [];

        for (let i = 0; i < (gameData[0].answers?.length ?? 0); i++) {
            options.push(i);
        }

        return options;
    };


    const checkAnswer = (answer: string) => {

    }

    return (
        <div>
            <Question question={gameData[0].question} image={gameData[0].image} />
            <Answer answerType='text' placeholder='Indsæt svar her' answer={gameData[0].answers ? [answerOptions()] : []} />
        </div>
    )
}

export default GamePage