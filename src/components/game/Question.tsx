import Image from 'next/image';
import React from 'react'

type QuestionProps = {
    question?: string;
    image?: string;
}


const Question = ({ question, image }: QuestionProps) => {
    return (
        <div>
            <div className='flex justify-center my-5 w-[700px]'>
                <h2 className='text-[20px] text-center'>{question}</h2>
            </div>
            <div className='flex justify-center'>

                {
                    image &&
                    <Image
                        src={image ?? ""}
                        width={500}
                        height={500}
                        alt="question image"
                        className='rounded-xl shadow-lg'
                    />
                }

            </div>

        </div>
    )
}

export default Question