import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

import FoodApi from '../Api/FoodAPi.js'


export default function FoodCards() {
  return (
    <>
    <section className='w-11/12  m-auto h-auto'>
    <div>
<div className='my-10 flex items-center justify-between '>
    <h1 className='text-2xl font-bold'>Whats on your mind?</h1>
    <div className='flex items-center justify-between gap-9'>
        <IoIosArrowRoundBack className='flex text-3xl bg-slate-300  text-black rounded-full font-bold'/>
        <IoIosArrowRoundForward className='flex text-3xl bg-slate-300  text-black rounded-full font-bold'/>

    </div>
</div>

<div className='flex justify-between overflow-hidden '>
    {
        FoodApi.map((items, index) =>{
            return<>
            <div className='flex flex-col items-center justify-center shrink-0 '>
          <img src={items.thumbnail} alt="" className='size-30 rounded-full my-4' />
            <h1 className=' text-xl'>{items.title}</h1>
            </div>
         
                </>
            
        })
    }
    </div>
</div>

    </section>

    
    
    </>
  )
}
