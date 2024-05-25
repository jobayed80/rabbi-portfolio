import React, { useState, useRef } from 'react'
import { contact } from '../data'

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';
import { TextField } from '@mui/material';

// email sending
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'

import jo from '../assets/img/projects/p1.webp'



const Contact = () => {

    const Swal = require('sweetalert2')
    const [open, setOpen] = React.useState(true);

    let [name, setName] = useState("")
    let [nameErr, setNameErr] = useState("")
    let [email, setEmail] = useState("")
    let [emailErr, setEmailErr] = useState("")
    let [subject, setSubject] = useState("")
    let [subjectErr, setSubjectErr] = useState("")
    let [message, setMessage] = useState("")
    let [messageErr, setMessageErr] = useState("")


    let handleSendMessage = () => {
        if (!name) {
            setNameErr("please enter your full name")
        } else if (!email) {
            setEmailErr("please enter your email")
        }
    }

    // sending email
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nbtnegq', 'template_3rcn6zh', form.current, {
                publicKey: 'iqwvRSPex3PHk1Ddp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            border: '100px',
            background: "#3b0764 url(../assets/img/projects/p1.webp)",
            backdrop: `
                  rgba(0,0,123,0.4)
                  url("../assets/img/projects/p1.webp")
                  left top
                  no-repeat
                `
        });
    }



    return (
        <section id='contact' className='section bg-primary relative'>


            <div
                className="blur"
                style={{
                    background: "#C1F5FF",
                    top: "15rem",
                    width: "212rem",
                    height: "12rem",
                    right: "110rem",
                }}
            >

            </div>


            <div className="container mx-auto">


                <div className="container mx-auto" data-aos="fade-up" data-aos-duration="2000">

                    <div className="flex flex-col  items-center text-center  mt-8 lg:-mt-2">
                        {/* <h2 style={{ color: "var(--red" }} className='section-title  before:content-contact relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                            Contact me
                        </h2> */}

                        <div className='contactTitle uppercase font-extrabold font-sans text-6xl lg:text-9xl  -z-10'>
                            <h2>Contact</h2>
                            <h2>Contact</h2>

                        </div>
                        <p className='text-xl lg:text-3xl  z-30 text-white'>Md. Jobayed Hossain rabbbi</p>
                        <p className='mt-8 lg:mt-12 subtitle text-justify'>"Contact writing" typically refers to the act of composing a paragraph or text aimed at initiating or facilitating communication between individuals or entities. It could involve writing a message to establish initial contact, maintain communication, or convey important information. This form of writing often requires clarity, conciseness, and consideration of the intended audience and purpose of the communication. Whether it's an email, a letter, a social media message, or any other form of communication, contact writing aims to effectively engage the recipient and convey the desired message.</p>

                    </div>




                </div>

                <div className="flex flex-col lg:gap-x-8 lg:flex-row mt-4">

                    {/* info */}
                    <div className="flex flex-col flex-1 items-start space-y-8 mn-12 lg:mb-0 lg:mt-2" data-aos="fade-right" data-aos-duration="2000">
                        {
                            contact.map((item, index) => {
                                const { icon, title, subtitle, description } = item
                                return (
                                    <div className="flex flex-row lg:flex-row gap-x-4" key={index}>
                                        <div style={{ color: "var(--red" }} className="text-accent rounded-md w-14 h-14 flex items-center justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                            {icon}
                                        </div>
                                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                                        <p className='mb-1'>{subtitle}</p>
                                        <p className='font-normal text-accent'>{description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>


                    {/* form */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-8 w-full max-w-[780px]" data-aos="fade-left" data-aos-duration="2500">
                        {/* notice error */}

                        {

                        }

                        <div className="flex gap-8">

                            <input name="from_name" onChange={(e) => setName(e.target.value)} className='input' type="text" placeholder='Your Full Name' />
                            <input name="from_email" onChange={(e) => setEmail(e.target.value)} className='input' type="email" placeholder='Your Email' />
                        </div>
                        <input onChange={(e) => setSubject(e.target.value)} className='input' type="text" placeholder='Subject' />
                        <textarea name="message" onChange={(e) => setMessage(e.target.value)} className='textarea' placeholder='your message'></textarea>
                        <button type="submit" value="Send" style={{ background: "var(--red" }} className='btn font-semibold btn-lg w-full rounded-lg hover:bg-accent-hover'>Send Message</button>

                    </form>



                </div>
            </div>
        </section>
    )
}

export default Contact