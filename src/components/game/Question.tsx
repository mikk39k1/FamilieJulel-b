import Image from 'next/image';
import React from 'react'

type QuestionProps = {
    question?: string;
    image?: string;
}


const Question = ({ question, image }: QuestionProps) => {
    return (
        <div>
            <h2>{question}</h2>

            {
                image &&
                <Image
                    src={image ?? ""}
                    width={500}
                    height={500}
                    alt="question image"
                />
            }


        </div>
    )
}

export default Question