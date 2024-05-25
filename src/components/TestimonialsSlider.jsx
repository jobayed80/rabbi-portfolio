import React from 'react'

import { testimonials } from '../data'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import '../swiper.css'



import Bachelor_certificate from '../assets/img/testimonials/Bachelor Certificate.jpg'

const TestimonialsSlider = () => {
    return (
        <>

            <Swiper

                pagination={{
                    clickable: true,

                }}

                // autoplay={{
                //     delay:3500,
                //     disableOnInteraction: true,
                // }}Autoplay, 

                modules={[Pagination]}
                className='mySwiper ' >

                {
                    testimonials.map((item, index) => {
                        const { authorImg, authorText, authorName, authorPosition } = item
                        return (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col lg:flex-row gap-14 lg:gap-25 md:flex-row" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="borderCssw-48 h-48 lg:w-[528px] lg:h-[428px] md:w-[428px] md:h-[228px]">
                                        <img className='rounded-xl borderCss' src={authorImg} alt="" />
                                    </div>
                                    <div className="flex flex-col mt-20 lg:-mt-0 md:mt-2">
                                        <h5 className='font-body  mb-8 italic font-normal text-lg'>{authorText}</h5>
                                        <div>
                                            <p style={{ color: "var(--red" }} className='text-lg text-accent -mt-4 lg:mt-3'>{authorName}</p>
                                            <p className='text-xl font-semibold'>{authorPosition}</p>
                                        </div>
                                        <a className='mt-6 hidden lg:block md:block' href={authorImg} download={authorPosition}>Download <span className='font-semibold text-md text-pink-700'>' {authorName} '</span></a>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )

                    })
                }

            </Swiper>



        </>
    )
}

export default TestimonialsSlider