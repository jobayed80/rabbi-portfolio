import React, { useEffect } from 'react'
import Projects from './Projects'
// scrool Animation






const Portfolio = () => {
    return (
        <section id='project' className='section bg-tertiary min-h-[1400px] relative'>

            <div className="container mx-auto  mt-8 lg:mt-0" data-aos="fade-up" data-aos-duration="2000">

                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>


                <div className="flex flex-col items-center text-center">
                    <div className='contactTitle uppercase font-extrabold font-sans text-6xl lg:text-9xl -z-10'>
                        <h2>project</h2>
                        <h2>project</h2>

                    </div>
                    <p className='text-xl lg:text-3xl  z-30 text-white'>My Lattest Project</p>
                    <p className='subtitle mt-10'>A project is a set of tasks that must be completed within a defined timeline to accomplish a specific set of goals. These tasks are completed by a group of people known as the project team, which is led by a project manager, who oversees the planning, scheduling, tracking and successful completion of projects.</p>
                </div>
                <Projects />
            </div>
        </section>
    )

}

export default Portfolio 