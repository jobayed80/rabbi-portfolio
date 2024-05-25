import React from 'react'

// data 
import { navigation } from '../data'

import {Link} from 'react-scroll'


const Nav = () => {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[16px]'>
            {navigation.map((item , index)=>{
                return(
                    <li  className='text-white hover:text-pink-600 cursor-pointer text-md' key={index}>
                        <Link to={item.href} activeClass='active' spy={true} smooth={true}
                        duration={500} className='transition-all duration-500'>{item.name}</Link>
                    </li>
                )   
            })}
        </ul>
    </nav>
  )
}

export default Nav