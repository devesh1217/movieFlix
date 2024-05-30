import React from 'react'
import ContactCard from '../components/ContactCard'
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <div className='text-white mx-72 my-16 space-y-10'>
            <div className='text-4xl text-center mb-12'>Contact Us</div>
            <div className='flex gap-16 mb-12'>
                <ContactCard icon={<MdEmail />} title={'Email'} link={'mailto:u22cs035@coed.svnit.ac.in'} linkText={'u22cs035@coed.svnit.ac.in'} ></ContactCard>
                <ContactCard icon={<FaGithub />} title={'GitHub'} link={'https://github.com/devesh1217'} linkText={'/devesh1217'} ></ContactCard>
                <ContactCard icon={<FaLinkedinIn />} title={'LinkedIn'} link={'https://linkedin.com/devesh1217'} linkText={'/devesh1217'} ></ContactCard>
            </div>
            <ContactForm></ContactForm>
            <div className='flex justify-center items-center gap-8 flex-col'>
                <div className='text-3xl'>Find on Map</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7529.920545314946!2d72.78198668740151!3d21.161914904170306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dee0c3c5311%3A0x7bd4e2f1cdf25f26!2sSVNIT%20Campus%2C%20Athwa%2C%20Surat%2C%20Gujarat%20395007!5e1!3m2!1sen!2sin!4v1716995874080!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact