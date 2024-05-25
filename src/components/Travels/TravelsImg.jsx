import React from 'react'
import { Image } from "antd";

import Rangamati_video from '../../assets/video/Rangamati.mp4'
import Bandarban_video from '../../assets/video/Bandarban_1.mp4'


// import thesisFile from '../assets/Thesis/thesis_paper.pdf'

const TravelsImg = ({ item }) => {
    return (
        <div key={item.id} className='flex flex-cols-2 items-center text-center'>
            <div className="-mb-6">
                {/* <img className='rounded-2xl' src={item.image} alt="" /> */}
                
                {/* <Image
                className='rounded-xl object-cover'
                width={200}
                height={210}Rangamati
                src={item.image}

            /> */}
                {item.id == 6 && (
                    <Image
                    className='rounded-xl object-cover'
                    width={200}
                    height={200}
                    preview={{
                      destroyOnClose: true,
                      imageRender: () => (
                        <video
                        controls
                          className='w-[700px] h-[700px] rounded-lg'
                          autoPlay
                          src={Rangamati_video}
                        />
                      ),
                      toolbarRender: () => null,
                    }}
                    src={item.image}
                  />
                ) ||
                
                <Image
                className='rounded-xl object-cover shadow-5-strong'
                width={200}
                height={200}
                src={item.image} />                
                
                }


            </div>
            {/* <p style={{ color: 'var(--red' }} className='capitalize text-accent text-md mb-3 font-semibold'>{item.category}</p> */}
            {/* <h3 className='text-xl font-semibold capitalize' data-aos="fade-left">{item.name}</h3> */}

        </div>
    )
}

export default TravelsImg 