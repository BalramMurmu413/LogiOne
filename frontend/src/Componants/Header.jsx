import React from 'react'

export default function Header() {
  return (
    <>
<section className=' w-[98%]  text-slate-300 m-auto flex flex-row items-center justify-between '>



<div className='w-1/4 ml-5'>
<h1 className='text-3xl font-bold cursor-pointer'>Balram</h1>
</div>



    


  <div className=' w-2/4 '>
      <ul className=' flex flex-row items-center justify-around'>
        <li>Home</li>
        <li className='relative cursor-pointer group'>Administrator  <div class="absolute rounded hidden group-hover:block bg-gray-800 shadow-lg w-48 z-10">
                        <a href cursor-pointer="#" class="block px-4 py-2 rounded hover:bg-gray-200">Administrator 1</a>
                        <a href cursor-pointer="#" class="block px-4 py-2 hover:bg-gray-200">Administrator 2</a>
                        <a href cursor-pointer="#" class="block px-4 py-2 hover:bg-gray-200">Administrator 3</a>
                    </div>
        </li>

  <li className='relative group cursor-pointer'>Services  <div class="absolute hidden rounded group-hover:block bg-gray-800 shadow-lg w-48 z-10">
                        <a href cursor-pointer="#" class="block px-4 py-2 rounded hover:bg-gray-200">Service 1</a>
                        <a href cursor-pointer="#" class="block px-4 py-2 hover:bg-gray-200">Service 2</a>
                        <a href cursor-pointer="#" class="block px-4 py-2 hover:bg-gray-200">Service 3</a>
                    </div>
        </li>

  <li className='relative group cursor-pointer'>Recruitement  <div class="absolute rounded hidden group-hover:block bg-gray-800 shadow-lg w-48 z-10">
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200 rounded">Recruitement 1</a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200">Recruitement 2</a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200">Recruitement 3</a>
                    </div>
        </li>
      <li className='relative group cursor-pointer'>About us  <div class="absolute rounded hidden group-hover:block bg-gray-800 shadow-lg w-48 z-10">
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200 rounded">About us 1</a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200">About us 2</a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-200">About us 3</a>
                    </div>
        </li>
        <li>Contact</li>
      </ul>
    </div>




<div className=' gap-4 flex flex-row justify-around w-1/5 '>

<button className='btn '>Sign up</button>
<button className='btn '>Login</button>
</div>


</section>


    </>
  )
}
