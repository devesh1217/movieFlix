import Link from 'next/link'
import React from 'react'

function notFound() {
    return (
        <div className='text-white mx-72 my-16 space-y-5'>
            <div className='text-4xl text-center'>404: Page not Found</div>
            <div className='text-center'>
                <Link href={'/'} className='hover:underline'>Go to home page...</Link>
            </div>
        </div>
    )
}

export default notFound