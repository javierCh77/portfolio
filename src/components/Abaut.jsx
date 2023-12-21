import React from 'react'
import yo from '../assets/yo.jpeg'



export default function Abaut() {
  return (
    <div className='flex flex-row gap-5'>
        <div className='bg-slate-900 text-white  w-4/6  p-8 rounded '> 
            <h1 className=' text-5xl'>About me</h1>
            <p className='mt-10 text-xl'>
            Hey, I'm Javier! I'm a software developer working in Ushuaia. Welcome to my spot on the web for my projects, tutorials, musings, and anything else I want to show the world. Check out the projects page to see a highlight of my open-source work, and the blog for my tutorials and more.
            </p>
            <p className='mt-6 text-xl'>
            My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what I've learned with the world. Although the tide is against me, I want to make the internet a better place, even if it's just right here. I hope I will inspire others to make their own creative corner on the web as well.
            </p>
            <p className='mt-6 text-xl'>You can contact me by email at hello at javierchavarria.com to say hi! I always appreciate meeting new people.</p>
        </div>

        <div className='bg-slate-900 text-white w-2/6  p-8 rounded flex flex-col gap-6 content-center text-center  '>
            <div>
                Me
            </div>
            <div>
                 <img className='rounded' src={yo} alt='Javier Chavarria'/>
            </div>
        </div>
      
    </div>
  )
}
