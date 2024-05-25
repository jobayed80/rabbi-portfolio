import React from 'react'
import TravelsImages from './TravelsImages'




const Travelers = () => {
  return (
    <div id='travels' className='section bg-secondary relative'>
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


        {/* section title */}
        <div className="flex flex-col items-center text-center  mt-8 lg:-mt-2" data-aos="fade-up" data-aos-duration="2000">
          <div className='contactTitle uppercase font-extrabold font-sans text-6xl lg:text-9xl -z-10'>
            <h2>travels</h2>
            <h2>travels</h2>

          </div>
          <p className='text-xl lg:text-3xl  z-30 text-white'>Visit the Bangladesh</p>
          <p className='subtitle mt-7'>Education is the key to unlocking human potential and fostering societal progress. It goes beyond classrooms, encompassing formal learning institutions and informal avenues for knowledge acquisition. From nurturing critical thinking skills to promoting lifelong learning, education empowers individuals to adapt, innovate, and contribute meaningfully to their communities. It's not merely about acquiring information but also about developing character, values, and a sense of empathy. In essence, education is the foundation upon which individuals build brighter futures and create a better world for all.</p>

        <TravelsImages />
        </div>

        

        {/* <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "27rem",
            width: "21rem",
            height: "12rem",
            right: "-9rem",
          }}
        >
        </div> */}

      </div>
    </div>
  )
}

export default Travelers