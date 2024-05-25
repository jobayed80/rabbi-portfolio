import React , {useEffect , useState} from 'react'
import {Link , animateScroll as scroll} from 'react-scroll'
import {MdVerticalAlignTop} from 'react-icons/md'

const BackToTopBtn = () => {



    const [show , setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            return (
                window.scrollY > 600 ? setShow(true) : setShow(false)
            )
        })
    })

    const scrollToTop = ()=>{
        scroll.scrollToTop()
    }


  return (
   show && (
    <button style={{background:"var(--red"}} onClick={scrollToTop} className='bg-accent w-12 h-12  hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all duration-500'>
        <MdVerticalAlignTop  className='w-6 h-6'></MdVerticalAlignTop>
    </button>
   )
  )
}

export default BackToTopBtn