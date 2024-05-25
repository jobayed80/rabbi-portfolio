import React from 'react'

import { social } from '../data'
import Logo from '../assets/img/main-logo2.svg'

const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className="container mx-auto"  >
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                    {/* socila icon */}
                    <div className="flex space-x-6 items-center justify-center">
                        {social.map((item, index) => {
                            const { href, icon } = item
                            return (
                                <a  className='text-slate-400 text-base hover:text-pink-600 transition-all duration-500' href={href} key={index}>{icon}</a>
                            )
                        })}
                    </div>
                    {/* icon */}
                    <div >
                        <img src={Logo} alt="" />
                    </div>
                    {/* copyright */}
                    <p>&copy; 2024 Md. Jobayed Hossain Rabbi. All rights reserved.</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer