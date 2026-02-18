import React, { useState } from 'react'
import { RiMenuFold3Fill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import { IoClose } from "react-icons/io5";


export default function Header() {
  const [isOpen, setIsOpen] = useState(true)


  return (
    <>
      <section className=' w-[90%]   h-10 my-2 m-auto text-slate-300  flex flex-row items-center justify-between '>
        <div className='w-1/4 ml-5  '>
          <h1 className='text-3xl  font-bold text-slate-800 cursor-pointer'><Link to='/'> Balram</Link></h1>
        </div>

        <div className='w-1/2  '>
          <label className="input border w-full rounded-2xl outline-0 text-black">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="5.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" className=' border-none outline-0 text-black' />
          </label>
        </div>

        <div className=' gap-4 flex items-center justify-center w-1/5 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" className=' text-black' strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
         <Link to={'/login'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" className=' text-black' strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg></Link> 
          <div className='md:hidden block '>

            {
              (isOpen)
                ?
                <RiMenuFold3Fill onClick={() => setIsOpen(!isOpen)} className='text-black text-xl' />
                :
                <IoClose onClick={() => setIsOpen(!isOpen)} className='text-black text-xl' />
            }

          </div>
        </div>
      </section>
      <div className={`z-10 w-full  bg-slate-500 md:hidden rounded-md transition-all duration-300 ease-in-out  top-0 ${isOpen ? ' mt-24 left-200 ' : " mt-24  left-0"}`} >
        <div className=''>
          <ul className='flex top-0 text-black flex-col w-full items-start ml-10  gap-1 py-3'>
            <li className='cursor-pointer'>Home</li>
            <li className='relative cursor-pointer group'>Administrator  
              <ul class=" ml-20  rounded  shadow-lg w-48 z-50">
             <li>
             <a href cursor-pointer="#" class="block px-4 py-2 rounded  bg-orange-300 hover:bg-slate-300">Administrator 1</a>
              <a href cursor-pointer="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Administrator 2</a>
              </li> 
            </ul>
            </li>

            <li
            className='relative group cursor-pointer'>Services
            <ul class=" ml-20  rounded  shadow-lg w-48 z-10">
              <li className=''>
              <a href cursor-pointer="#"
              class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Administrator 2</a>
              <a href cursor-pointer="#" 
              class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Administrator 3</a>
              </li> 
              </ul>
            </li>

            <li className='relative group cursor-pointer'>Recruitement  <ul class=" ml-20  rounded  shadow-lg w-48 z-10">
             
             <li className=''>
             <a href cursor-pointer="#" class="block px-4 py-2 rounded  bg-orange-300 hover:bg-slate-300">Administrator 1</a>
              <a href cursor-pointer="#" class="block px-4 py-2  rounded bg-orange-300 hover:bg-slate-300">Administrator 2</a>
              <a href cursor-pointer="#" class="block px-4 py-2 rounded  bg-orange-300 hover:bg-slate-300">Administrator 3</a>
              </li> 
              </ul>
            </li>
            <li className='relative group cursor-pointer'>About us  <ul class=" ml-20  rounded  shadow-lg w-48 z-10">
             
             <li className=''>
             <a href cursor-pointer="#" class="block px-4 py-2 rounded  bg-orange-300 hover:bg-slate-300">Administrator 1</a>
              <a href cursor-pointer="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Administrator 2</a>
              <a href cursor-pointer="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Administrator 3</a>
              </li> 
              </ul>
            </li>
         <Link to='/contact'><li>Contact</li></Link>
          </ul>
        </div>
      </div>




      <hr className='w-[90%] m-auto opacity-10 ' />

      <section className=' w-2/4 sticky top-0 ml-50  hidden md:block' >
        <div >
          <ul className=' flex   py-4 flex-row w-full  items-center justify-around'>
           <Link to='/'> <li className='cursor-pointer'>Home</li> </Link>
            <li className='relative cursor-pointer group'>Administrator  <div class="absolute rounded hidden group-hover:block shadow-lg w-48 z-10">
              <a href cursor-pointer="#" class="block px-4 py-2 rounded  bg-orange-300 hover:bg-slate-300">Administrator 1</a>
              <a href cursor-pointer="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Administrator 2</a>
              <a href cursor-pointer="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Administrator 3</a>
            </div>
            </li>

            <li className='relative group cursor-pointer'>Services  <div class="absolute hidden rounded group-hover:block shadow-lg w-48 z-10">
              <a href cursor-pointer="#" class="block px-4 py-2 rounded hover:bg-gray-7 00">Service 1</a>
              <a href cursor-pointer="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Service 2</a>
              <a href cursor-pointer="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Service 3</a>
            </div>
            </li>

            <li className='relative group cursor-pointer'>Recruitement  <div class="absolute rounded hidden group-hover:block shadow-lg w-48 z-10">
              <a href="#" class="block px-4 py-2 hover:rounded">Recruitement 1</a>
              <a href="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Recruitement 2</a>
              <a href="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">Recruitement 3</a>
            </div>
            </li>
            <li className='relative group cursor-pointer'>About us  <div class="absolute rounded hidden group-hover:block shadow-lg w-48 z-10">
              <a href="#" class="block px-4 py-2 hover:rounded">About us 1</a>
              <a href="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">About us 2</a>
              <a href="#" class="block px-4 py-2  bg-orange-300 hover:bg-slate-300">About us 3</a>
            </div>
            </li>
             <Link to='/contact'><li>Contact</li></Link>

          </ul>
        </div>
      </section>
      <hr className='w-full m-auto opacity-20 text-fuchsia-800' />
    </>
  )
}
