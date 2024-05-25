import React from 'react'
import { services } from './data'

import DIU from './assets/img/Education/diu.jpeg'
import AUSC from './assets/img/Education/ausc.jpg'

const Services = () => {
  return (
    <div id='education' className='section bg-secondary relative'>
      <div className="container mx-auto">

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "12rem",
            left: "-9rem",
          }}
        >

        </div>




        {/* section title part*/}
        <div className="flex flex-col items-center text-center mt-8 lg:-mt-2" data-aos="fade-up" data-aos-duration="2000">
          <div className='contactTitle uppercase font-extrabold font-sans text-6xl lg:text-9xl -z-10'>
            <h2>education</h2>
            <h2>education</h2>

          </div>
          <p className='text-xl lg:text-3xl  z-30 text-white'>Educational Qualification</p>
          <p className='subtitle mt-10'>Education is the key to unlocking human potential and fostering societal progress. It goes beyond classrooms, encompassing formal learning institutions and informal avenues for knowledge acquisition. From nurturing critical thinking skills to promoting lifelong learning, education empowers individuals to adapt, innovate, and contribute meaningfully to their communities. It's not merely about acquiring information but also about developing character, values, and a sense of empathy. In essence, education is the foundation upon which individuals build brighter futures and create a better world for all.</p>

        </div>


        <div className='items-center lg:justify-between flex flex-col lg:flex-row gap-10 gap-y-14" data-aos="zoom-out-down" data-aos-duration="2000"'>
          <div class=" shadow-lg shadow-cyan-500/80 bg-slate-900 relative flex flex-col mt-6 text-gray-700   bg-clip-border rounded-xl w-96">
            <div
              class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={DIU}></img>
            </div>
            <div class="p-6">
              <h5 class="items-center gap-3 flex  mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Daffodil International University
              </h5>
              <p class="block italic text-justify text-gray-400 font-sans text-sm antialiased font-light leading-relaxed ">
                In 2024, I completed a Bachelor's degree in <span className='text-md text-white'>Software Engineering</span> with a major in <span className='text-white'>Data Science</span>. This program provided me with a strong foundation in software development and advanced skills in data analysis, machine learning, and statistical modeling.
              </p>
            </div>
            <div class="p-6 pt-0">
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-slate-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button">
                <a target='/' href="https://daffodilvarsity.edu.bd/">  Read More</a>

              </button>
            </div>
          </div>
          <div class="shadow-lg shadow-cyan-500/80 bg-slate-900 relative flex flex-col mt-6 text-gray-700  bg-clip-border rounded-xl w-96">
            <div
              class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={AUSC} />
            </div>
            <div class="p-6">
              <h5 class="flex items-center gap-3 mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              
                Aftab Uddin School & College
              </h5>
              <p class="block text-justify font-sans text-sm text-gray-400 antialiased font-light leading-relaxed">
              I completed my <span className='text-white'>SSC</span> exam in 2016 and my <span className='text-white'>HSC</span> exam in 2018, both from the science group. I attended the same institution for both my school and college education, providing me with a consistent and solid academic foundation.
              </p>
            </div>
            <div class="p-6 pt-0">
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-slate-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button">
                <a target='/' href="https://ausc.edu.bd/">Read more</a>
              </button>
            </div>
          </div>

        </div>




        {/* item grid */}
        {/* <div className=" grid lg:grid-cols-4 gap-8" data-aos="zoom-out-down" data-aos-duration="2000">
          {services.map((service, index) => {
            const { icon, name, description, sticker } = service
            return <div className='borderCss bg-secondary p-6 rounded-2xl' key={index} data-aos="zoom-in" data-aos-duration="2000">
              
              <div style={{ color: 'var(--red' }} className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-14 text-[28px]">
                {icon}
              </div>
              <h4 className='text-2xl font-medium mb-2'>{name}</h4>
              <p>{description} <small style={{ color: 'var(--red' }}>&#128151;</small></p>

            </div>
          })}
        </div> */}

        {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> */}
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "27rem",
            width: "21rem",
            height: "12rem",
            right: "-9rem",
          }}
        >
        </div>

      </div>
    </div>
  )
}

export default Services