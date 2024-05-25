import React, { useState } from 'react'

import { navigation } from '../data'

// import {XIcon} from 'react-icons'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

import Socials from './Socials'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }



  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      }
    }
  }
  return (
    <nav className='relative overflow-x-hidden'>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
        <HiOutlineMenuAlt3 className="w-8 h-8"></HiOutlineMenuAlt3>
      </div>

      {/* circle */}
      <motion.div  variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'}
          className='w-4 h-4 bg-slate-900 rounded-ful fixed top-0 right-0'>
      </motion.div>

      {/* menu */}
      <motion.ul variants={ulVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'}
        className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full 
        flex flex-col items-center justify-center overflow-hidden transition-all duration-500`}>
        {/* icon */}
        <div onClick={() => setIsOpen(false)} className="cursor-pointer top-8 right-8 absolute">
          <IoMdClose className='w-8 h-8'></IoMdClose>
        </div>

        {
          navigation.map((item, index)=>{
            return (
              <li key={index} className='mb-8'>
                <Link to={item.href} smooth={true} duration={500} offset={-70} className='text-xl cursor-pointer capitalize'>{item.name}</Link>
              </li>
            )
          })
        }

      </motion.ul>
    </nav>
  )
}

export default NavMobile