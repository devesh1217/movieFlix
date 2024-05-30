'use client'
import React, { useState } from 'react'
import axios from 'axios';

function ContactForm() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [remark, setRemark] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/contact/', user);

            if (res.data.success) {
                setRemark('Message sent successfully.')
                setUser({
                    name: "",
                    email: "",
                    message: ""
                })
            } else {
                setRemark('Unable to sent message. Please try again!')
            }
        } catch(err) {
            setRemark('Unable to sent message. Please try again!')
            console.log(err)
        }
        
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2'>
                <div className='text-center text-3xl mb-8'>Contact Form</div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <fieldset className='border-2 px-4 p-2 rounded-md'>
                        <legend>Name</legend>
                        <input name='name' value={user.name} onChange={handleChange} autoComplete='off'></input>
                    </fieldset>
                    <fieldset className='border-2 px-4 p-2 rounded-md'>
                        <legend>Email</legend>
                        <input name='email' value={user.email} onChange={handleChange} autoComplete='off'></input>
                    </fieldset>
                    <fieldset className='border-2 px-4 p-2 rounded-md'>
                        <legend>Message</legend>
                        <input name='message' value={user.message} onChange={handleChange} autoComplete='off'></input>
                    </fieldset>
                    <button type="submit" className='hover:bg-gray-800 bg-slate-700 p-2 rounded-full mb-5'>Send Message</button>
                </form>
                <div className='text-center'>{remark}</div>
            </div>
        </div>
    )
}

export default ContactForm