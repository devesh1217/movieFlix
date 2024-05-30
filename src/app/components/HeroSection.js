import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeroSection({ title, desc,imageURL }) {
    return (
        <main className='p-2 text-white h-screen'>
            <div className='flex justify-evenly items-center w-full h-2/3'>
                <div className='flex flex-col justify-evenly space-y-12 w-1/4'>
                    <h1 className='w-full text-5xl'>{title}</h1>
                    <p>{desc}</p>
                    <Link href={'/movie'}>
                        <button className='bg-sky-800 hover:bg-sky-700 p-2 rounded-full w-28'>Explore!</button>
                    </Link>
                </div>
                <div className='w-1/4 flex justify-center'>
                    <Image src={imageURL} width={700} height={700} alt='Home Image'/>
                </div>
            </div>
        </main>
    )
}

export default HeroSection