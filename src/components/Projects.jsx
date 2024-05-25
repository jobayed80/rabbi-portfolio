import React, { useEffect, useState } from 'react'
import { projectsData } from '../data'
import { projectsNav } from '../data'

// import components\
import Project from './Project'

const Projects = () => {


    
    const [item, setItem] = useState({name:'all'})
    const [projects, setProjects] = useState([])
    const [active , setActive] = useState(0)

    useEffect(()=>{
        if(item.name === 'all'){
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter(
                (project)=>{
                    return project.category.toLowerCase() === item.name
                }
            )
            setProjects(newProjects)
        }
    }, [item])


    const handleClick = (e , index)=>{
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index)
    }


    return (
    <div>
        {/* ------- nav -------------- */}
        <nav className= ' mb-10 lg:mb-16 -mt-3 lg:-mt-12  max-w-xl mx-auto' >
            <ul s className='text-[0.78rem] lg:text-[0.9rem]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-2 rounded-2xl font-bold flex flex-row md:flex-row justify-evenly items-center text-white'>
                {
                    projectsNav.map((item , index)=>{
                        return (
                            <li onClick={(e)=>{
                                handleClick(e,index);
                            }} 
                            className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                            key= {index} >{item.name}</li>
                        )
                    })   
                }
            </ul>
        </nav>
        {/* project grid */}
        <section className='grid grid-cols-2  lg:grid-cols-3 gap-y-8 gap-x-4 lg:gap-x-8 lg:gap-y-8 ml-8 mr-8 lg:ml-0 lg:mr-0'>
            {projects.map((item)=>{
                return <Project item={item} key={item.id} />
            })}
        </section>
    </div>
  )
}

export default Projects