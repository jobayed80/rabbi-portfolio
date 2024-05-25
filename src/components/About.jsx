import React from 'react'

import image from '../assets/img/about4.jpg'
const About = () => {
  return (
    <section id='about' className='section bg-black relative '>

      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row lg:flex-row  gap-10  mt-8 lg:-mt-2">


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



          {/* section title */}
          <div className="flex lg:w-[650px] flex-col items-center text-center" data-aos="fade-up" data-aos-duration="2000">

            {/* <h2 style={{ color: "var(--red" }} className='section-title before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
              Md. Jobayed Hossain Rabbi
            </h2> */}
            {/* <h1 class="uppercase mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About</span></h1> */}
            <div className='contactTitle uppercase font-extrabold font-sans  text-6xl lg:text-9xl -z-10'>
              <h2>About</h2>
              <h2>About</h2>

            </div>
            <p className='text-xl lg:text-3xl z-30 text-white'>Md. Jobayed Hossain Rabbi</p>

            <p className='mb-4 mt-10 text-justify tracking-normalt font-extrabold'>
              I am Md. Jobayed Hossain Rabbi and now studying in B.Sc. in Software Engineering(SWE) at Daffodil International University.I am a web developer who is proficient in both back-end (learning from 'Creative It') and front-end frameworks(react). Skilled in <small style={{ color: 'var(--red' }} className='text-lg'>'C Programming', 'Java', 'Java Swing', 'Python(Data Science)', <small className='text-white text-lg uppercase font-semibold'>and</small> Full Stack Developer--by using--HTML5 || CSS3 || SASS || Tailwind CSS || ReactJs || JavaScript || NodeJs || ExpressJs || REST API || MySQL || MongoDB etc, "Continuous Learning"</small> and with projects. My passion lies in learning about the latest technologies.
            </p>
            <button style={{ background: 'var(--red' }} className='btn btn-md bg-accent hover:bg-accent-hover transition-all w-full rounded-lg text-xl mt-10' data-aos="fade-up" data-aos-duration="600" ><a href="">Contact</a></button>

          </div>


          <div className="flex flex-col items-center text-center lg-items-start lg:text-left">
            {/* // data-aos="fade-left" data-aos-duration="2000" */}
            <div className="flex flex-col">

              <img className='mx-auto object-cover h-[450px] w-[666px] md:mx-auto lg:mx-0 rounded-2xl ' src={image} alt="" data-aos="fade-left" data-aos-duration="2000" />


              {/* <h2 style={{color:"var(--red"}} className='text-3xl lg:4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden
                    before:lg:block'>
                        Md. Jobayed Hossain Rabbi
                    </h2> */}
              {/* <p  className='mb-4 text-accent'>Web Designing</p> */}
              {/* <hr className='mb-8  opacity-5' /> */}
              {/* <p className='mb-8 text-justify tracking-normalt font-extrabold'>
                I am Md. Jobayed Hossain Rabbi and now studying in B.Sc. in Software Engineering(SWE) at Daffodil International University.I am a web developer who is proficient in both back-end (learning from 'Creative It') and front-end frameworks(react). Skilled in <small style={{ color: 'var(--red' }} className='text-lg'>'C Programming', 'Java', 'Java Swing', 'Python(Data Science)', <small className='text-white text-lg uppercase font-semibold'>and</small> Full Stack Developer--by using--HTML5 || CSS3 || SASS || Tailwind CSS || ReactJs || JavaScript || NodeJs || ExpressJs || REST API || MySQL || MongoDB etc, "Continuous Learning"</small> and with projects. My passion lies in learning about the latest technologies.
              </p> */}
            </div>


          </div>


        </div>
      </div>
    </section>
  )
}

export default About