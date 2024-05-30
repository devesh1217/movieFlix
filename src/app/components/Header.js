import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <nav className='flex justify-between items-center px-7 py-5 mb-4 shadow-lg shadow-gray-800 bg-gray-900 text-white'>
            <div className='text-3xl hover:underline'>
                <Link href={'/'}>MovieFlix</Link>
            </div>
            <div className='flex justify-evenly items-center space-x-10'>
                <Link className='hover:underline' href={'/'}>Home</Link>
                <Link className='hover:underline' href={'/about'}>About</Link>
                <Link className='hover:underline' href={'/movie'}>Movie</Link>  
                <Link className='hover:underline' href={'/contact'}>Contact</Link>
            </div>
        </nav>
    )
}

export default Header