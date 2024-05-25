import React, { useEffect, useState } from 'react'
import { TravelsNav } from '..//../data'
import { TravelsData } from '..//../data'

// import components\
import Project from '../Travels/TravelsImg'

const TravelsImages = () => {



    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(TravelsData)
        } else {
            const newProjects = TravelsData.filter(
                (project) => {
                    return project.category.toLowerCase() === item.name
                }
            )
            setProjects(newProjects)
        }
    }, [item])


    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index)
    }


    return (
        <div>
            {/* ------- nav -------------- */}
            <nav className='mb-8 -mt-12 max-w-xl mx-auto' >
                <ul s className='text-[0.9rem] border-2 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] font-bold flex flex-row md:flex-row justify-evenly items-center text-white mt-10 lg:-mt-4'>

                    {
                        TravelsNav.map((item, index) => {
                            return (
                                <li onClick={(e) => {
                                    handleClick(e, index);
                                }}
                                    className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4 border-1 `}
                                    key={index} >{item.name}</li>
                            )
                        })
                    }
                </ul>
            </nav>
            {/* project grid */}
            <section className='grid place-items-center grid-cols-2 lg:grid-cols-4  gap-y-8 gap-x-4 lg:gap-x-4 lg:gap-y-8' data-aos="zoom-left-righ" data-aos-duration="2000">
                {projects.map((item) => {
                    return <Project item={item} key={item.id} />
                })}
            </section>
        </div>
    )
}

export default TravelsImages