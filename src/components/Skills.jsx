import React from 'react'

import { skills } from '../data'

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
        <div className="container mx-auto" >
            <div className='grid grid-cols-6 md:grid-flow-col'>
                {skills.map((skill , index)=>{
                    return <marquee className='flex items-center justify-center'>
                        <img className='w-10 h-10' src={skill.image} alt="" />
                    </marquee>
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills

