import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

const Modal = ({ modal, projects }) => {
    
    const { active, index } = modal;
    const modalContainer = useRef(null);

    useEffect( () => {
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
       
    
        window.addEventListener('mousemove', (e) => {
          const { pageX, pageY } = e;
          xMoveContainer(pageX)
          yMoveContainer(pageY)
        })
      }, [])

    return (
      <>
    <motion.div ref={modalContainer}  variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}  className="h-[350px] w-[400px] absolute bg-slate-50 overflow-hidden pointer-events-none flex items-center justify-start">
    <div style={{top: index * -100 + "%"}} className="h-full w-full absolute transition-top duration-500 ease-in-out cubic-bezier(0.76, 0, 0.24, 1)">
    {
        projects.map( (project, index) => {
            const { src, color } = project
            return <div className="flex items-center justify-center w-full h-full" style={{backgroundColor: color}} key={`modal_${index}`}>
            <img 
            src={`/images/${src}`}
           className="h-auto w-[300px]"
            alt="image"
            />
        </div>
        })
    }
    </div>
</motion.div>

    </>
  )
}

export default Modal