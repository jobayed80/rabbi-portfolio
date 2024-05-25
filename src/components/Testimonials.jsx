import React from 'react'
import { testimonials } from '../data'
import TestimonialsSlider from './TestimonialsSlider'

const Testimonials = () => {
  return (
    <section id='certificate' className='section flex-col bg-tertiary relative'>

      {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> */}
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
      {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> */}
      <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "47rem",
          width: "21rem",
          height: "12rem",
          right: "-9rem",
        }}
      >
      </div>


      <div className="container mx-auto mt-8 lg:-mt-2" data-aos="fade-up" data-aos-duration="2000">
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="flex flex-col items-center text-center ">


          <div className='contactTitle uppercase font-extrabold font-sans text-6xl lg:text-9xl -z-10'>
            <h2>certificate</h2>
            <h2>certificate</h2>

          </div>
          <p className='text-xl lg:text-3xl  z-30 text-white'>Curriculam Activities Credential</p>
          <p className='subtitle mt-12'>"During my time at university, I took on the role of <span className='text-[1rem] font-bold text-white'>Class Representative</span>, demonstrating a strong commitment to  <span className='text-[1rem] font-bold text-white'>Leadership & Representing </span>my batch in various departmental events. In addition to this role, I actively participated in departmental and major-specific clubs, particularly the  <span className='text-[1rem] font-bold text-white'>Data Science Club</span>. I also  <span className='text-[1rem] font-bold text-white'>Volunteered</span> for my department’s  <span className='text-[1rem] font-bold text-white'>12-anniversary celebration</span>. <br /><br />

          Prior to university, I was a dedicated member of the  <span className='text-[1rem] font-bold text-white'>Bangladesh Rover Scouts</span> I consistently <span className='text-[1rem] font-bold text-white'>Volunteered</span>  and contributed during school functions, embodying the principles of service and community engagement."</p>

        </div>
        <TestimonialsSlider></TestimonialsSlider>


      </div>
    </section>
  )
}

export default Testimonials