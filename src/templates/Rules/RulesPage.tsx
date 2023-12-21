import React from 'react'

const RulesPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[200px]'>
                <h1 className='text-[26px] font-semibold '>Regler!</h1>
            </div>

            <div className='flex justify-center'>
                <ul>
                    <li>Man må ikke </li>
                </ul>
            </div>


            <div className='flex justify-center my-20'>
                <a 
                className="text-[24px] text-white p-4 rounded-xl shadow-lg bg-green-500 hover:scale-105 hover:cursor-pointer"
                href='/game'
                >
                    START SPIL!
                </a>
            </div>
        </div>
    )
}

export default RulesPage