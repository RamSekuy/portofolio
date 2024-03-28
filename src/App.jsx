import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import ProjectList from './components/cardList'

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <section id='profile' className='w-full bg-[#FF7700] py-8 flex justify-center items-center flex-col' /> */}
      {/* <section id='profile' className='px-4 w-full bg-[#2A2550] py-8 flex justify-center items-center flex-col text-white'> */}
      <section id='profile' className='w-full bg-[#FF7700] py-8 flex justify-center items-center flex-col p-4'>
          <img className='m-2 rounded-full h-40 aspect-square object-cover' src="https://artworks-en-n.ygorganization.com/1/65/24_1.png" alt="" />
          <h1 className='m-2'>Rama Naufal Alim</h1>
      </section>
      <section id='aboutMe' className='px-4 w-full bg-[#2A2550] py-8 flex justify-center items-center flex-col text-white'>
      <h1 className=' my-2'>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iure voluptatem officiis iusto dolor quis recusandae quasi suscipit rerum magni saepe nam perspiciatis ipsa, earum voluptatum neque illo aliquam reiciendis?</p>
      </section>
      <section id='skill' className='w-full bg-[#FF7700] py-8 flex justify-center items-center flex-col'>
      <h1 className='text-4xl my-2'>Skills</h1>
      <ul className='my-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Tailwind</li>
      </ul>
      </section>

      <section id='projects' className='px-4 w-full bg-[#2A2550] py-8 flex justify-center items-center flex-col text-white'>
      <h1 className='text-4xl my-2'>Projects</h1>
        <ProjectList></ProjectList>
      </section>

      <section id='contact' className='px-4 w-full bg-[#FF7700] py-8 flex justify-center items-center flex-col text-white'>
        <form className='flex flex-col'>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
          <label htmlFor="text">Message</label>
          <input type="text" name="Message" id="Message" />
          <input type="submit" value="Send" />
        </form>
      </section>
    </>
  )
}

export default App
