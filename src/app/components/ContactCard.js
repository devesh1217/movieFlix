import Link from 'next/link'
import React from 'react'

function ContactCard({ title, link, linkText, icon }) {
    return (
        <div className='flex-1 bg-gray-800 hover:bg-gray-700 p-3 rounded-md text-center'>
            <i className='flex justify-center text-6xl pb-4'>{icon}</i>
            <div className='text-3xl pb-4'>{title}</div>
            <Link target='_blank' href={link} className='hover:underline italic'>{linkText}</Link>
        </div>
    )
}

export default ContactCard