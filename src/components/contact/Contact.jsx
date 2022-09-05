import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useState } from 'react';

function Contact() {
    const form = useRef();

    // const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2iif468', 'template_dj1ji7j', form.current, 'roqI_jQRvakfV6lTS')
            .then((result) => {
                console.log(result.text);
                // e.target.reset();
                //     setDone(true)
            }, (error) => {
                console.log(error.text);
        });   
    };

    return (
        <div className='contact-form'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <div className="blur c-blur1" style={{background:'#ABF1FF94'}}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" className='user' placeholder='Name' />
                    <input type="email" name="email" className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'/>
                    <input type="button" value="Send Message" className='button'/>
                    {/* <span>{done && "thanks for contacting me"}</span> */}
                    <div className="blur c-blur2" style={{background: "var(--purple)"}}></div>
                </form>
            </div>


        </div>
    )
}

export default Contact