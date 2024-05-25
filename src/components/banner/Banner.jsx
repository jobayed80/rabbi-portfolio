import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'


const Banner = () => {
    return (
        <section id="home"
        className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center
        lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className="container mx-auto h-full">
            <div className="flex items-center h-full pt-8">

            <LeftBanner />
            <RightBanner />
            </div>

            </div>


        </section>
    )
}

export default Banner