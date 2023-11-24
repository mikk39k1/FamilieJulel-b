import Image from 'next/image'
import React from 'react'

const HomePage = () => {
    

    return (
        <div>
            <div className='h-[200px] flex items-center justify-center'>
                <h1 className='text-center text-[24px] font-semibold'>{`Velkommen til Familien Lausens Årlige Jule - /Quiz/Underholdnings/Druklegs Spil`}</h1>
            </div>

            <div className='flex justify-center'>
                <Image
                    src="/familien-lausen.jpg"
                    width={800}
                    height={800}
                    alt="familien lausen"
                />
            </div>

            <div className='flex justify-center my-10'>
                <a 
                className='text-[24px] text-white p-4 rounded-xl shadow-lg bg-red-500 hover:scale-105 hover:cursor-pointer'
                href='/rules'>
                    REGLER
                    </a>
            </div>



        </div>
    )
}

export default HomePage