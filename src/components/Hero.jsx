import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import myResume from '../assets/resume/CV.pdf'

import { TypeAnimation } from 'react-type-animation';

import myImage from '../assets/img/jobayed.png'
import Vect1 from '../assets/img/Vector1.png'
import Vect2 from '../assets/img/Vector2.png'
// import vect1 from '../assets/img/vector1.png'

import { Wave } from 'react-animated-text';


const Hero = () => {
  
  const [text] = useTypewriter({
    words: ["' Web Designer '", "' Full Stack Developer '", "' Programmar '"],
    loop: true, 
    typeSpeed: 60,  
    deleteSpeed: 10,
    delaySpeed: 2000,
    fontSize: '20px',
  });

  




  


  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>


      {/* <div
        className="blur"
        style={{
          background:'var(red)',
          top: "11rem",
          width: "21rem",
          height: "12rem",
          left: "111rem",
        }}
      >

      </div> */}


      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8 pb-8 gap-x-16">
            {/* left sid */}
            <div className="flex flex-1 flex-col items-center lg:items-start sm:text-center">
              {/* <p className='text-xl mb-6 mt-10'>Welcome to my Website</p> */}
              <p className='text-3xl text-center mb-[12px] text-white'>Hello, It's me <small className='text-4xl  font-extrabold text-pink-600'>Jobayed Hossain</small></p>
              {/* <div className="flex">
                <h1 className='text-4xl mt-8 leading-[44px] md:text-5xl md:leading-tight 
                    lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px] space-x-4'>And a <TypeAnimation
                    sequence={[
                      'Web Designer', // Types 'One'
                      2000, // Waits 1s
                      'Web Developer', // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      'MERN Stack Developer (Learning)', 1000, // Types 'Three' without deleting 'Two'
                      () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                      }
                    ]}
                    wrapper="div"
                  
                    repeat={Infinity}
                    // style={{color:'var(--red)'}}
                    // className='text-fuchsia-500'

                  />

                </h1>
              </div> */}
              <h2 className="text-3xl font-bold text-cyan-500">
                <small className='text-white text-2xl'>a</small> <span>{text}</span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </h2>
              <p className='mt-6 text-justify'>No matter which field of work you want to go in, it is of great importance to learn at least one programming language. <small className='text-pink-500 text-lg font-bold'>― Ram Ray</small></p>

              <div className="flex flex-wrap items-center mt-16 gap-6 ">
                <button  className='btn btn-lg bg-pink-700 rounded-2xl hover:bg-slate-400 transition-all duration-500'><a href={myResume} download="Jobayed_resume">Download CV</a></button>
                
                <button id='contact'  className='btn btn-lg bg-pink-700 rounded-2xl hover:bg-slate-400 transition-all duration-500'>Hire Me</button>
                
              </div>

            </div>
            {/* data-aos="fade-down-left" */}
            <div className="hidden lg:flex flex-1 justify-end items-center w-full  h-full banner-img" >
            <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "15rem",
              width: "212rem",
              height: "12rem",
              right: "100rem",
            }}
          >

          </div>
              <img src={Vect1} alt="" />
              {/* <img src={Vect2} alt="" /> */}
              <img src={myImage} alt="" />
            </div>

          
            
        </div>
      </div>
    </section>
  )
}

export default Hero