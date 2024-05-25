import React from 'react'
import { Image } from "antd";

import thesisFile from '../assets/Thesis/thesis_paper.pdf'
const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center mt-2' >
      <div className="mb-3">
        {/* <img className='rounded-2xl' src={item.image} alt="" /> */}
        <Image
        className='rounded-2xl'
          width={280}
          height={210}
          src={item.image}
        />
      </div>
      <p style={{ color: 'var(--red' }} className='capitalize text-accent text-lg  font-semibold'>{item.category}</p>
      <h3 className='text-[1.2rem] font-semibold capitalize' data-aos="fade-left">{item.name}</h3>
      <div>
        {item.id == 9 ? <a className='mt-20 text-red-400' href={thesisFile} download="Cancer Subtype Classification">' Download File '</a> : ''}
      </div>
    </div>
  )
}

export default Project