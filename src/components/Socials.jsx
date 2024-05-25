import React from 'react'

import {social} from  '../data'

const Socials = () => {
  return (
    <div>
        <nav>
          <ul className='flex space-x-6'>
            {
              social.map((item , index)=>{
                return <li className='flex justify-center items-center text-slate-400 '
                key={index}>
                  <a  className='text-base  hover:text-pink-600 transition-all duration-500' href={item.href} target="_blank">
                    {item.icon}
                  </a>
                </li>
              })
            } 

          </ul>
        </nav>
    </div>
  )
}

export default Socials