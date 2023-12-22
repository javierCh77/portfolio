import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'
import BackGround from './BackGround'



export default function Home() {
    





  return (
  
    <div className='bg-slate-900 text-white flex  w-full p-8 rounded '> 
   
        <div className=' text-left w-4/6 '>
            <h1 className=' text-5xl'>Hey, I'm Javier! </h1>
            <p className='mt-10 text-xl '>Welcome to my digital space. 🚀</p>
            <p className='mt-5 text-xl '>I'm a software developer in Ushuaia ARG. I make<Link to='/projects' className='text-sky-300'> open-source</Link></p>
            <p className=' text-xl '><Link to='/projects' className='text-sky-300'> projects</Link> and write about code, design, and life. I like </p>
            <p className=' text-xl '>technology, drawing, sci-fi, reading, and gaming.</p>
        </div>
       
        <div className=' rounded w-2/6 p-8 '>
      
        <span className="loader"></span>
        </div>
       
            
    </div>
   
  )
}
