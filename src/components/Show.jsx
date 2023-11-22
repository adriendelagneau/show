import React, { useState } from 'react'
import Modal from './Modal'
import Projects from './Projects'

const projects = [
    {
      title: "C2 Montreal",
      src: "c2montreal.png",
      color: "#000000"
    },
    {
      title: "Office Studio",
      src: "officestudio.png",
      color: "#8C8C8C"
    },
    {
      title: "Locomotive",
      src: "locomotive.png",
      color: "#EFE8D3"
    },
    {
      title: "Silencio",
      src: "silencio.png",
      color: "#706D63"
    }
  ]

const Show = () => {
    const [modal, setModal] = useState({active: false, index: 0})
  return (
      <div className='w-[85%] h-auto overflow-hidden mx-auto my-[150px]'>
          <div className="w-full flex flex-col items-center justify-center">
        {projects.map((project, index) => {
          return <Projects key={index} index={index} title={project.title} setModal={setModal}/>
        } )}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  )
}

export default Show