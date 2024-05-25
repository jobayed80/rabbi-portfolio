import React from 'react'
import { brands } from '../data'

const Brands = () => {
  return (
    <section  className='min-h-[146px] bg-tertiary flex items-center'>
       <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
            {brands.map((brand , item)=>{
                return (
                    <div key={item}>
                        <img src={brand.img}></img>
                    </div>
                )
            })}
       </div>
    </section>
  )
}

export default Brands

