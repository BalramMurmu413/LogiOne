import React from 'react'

export default function MyApps() {
  return (
<>
<section className='w-full mt-20 h-60vh flex flex-col items-center justify-center   '>
    <h1>
     Select your favorite app
    </h1>

    <div  className='flex flex-row  gap-5 items-center'>
        <div > 
            <select  className='bg-slate-600 px-4 py-2 border-none outline-0' name="" id="">select any one
            <option value=""> Calculator</option>
            <option value=""> Suzoku</option>
            <option value=""> Snake</option>
            <option value=""> Tales Ball</option>
            </select>
        </div>
        <div>
            <button className=' bg-slate-600 px-4 py-1.5 m-2 outline-0 hover:shadow-2xs'>Click to open</button>
        </div>
    </div>


    <div className='w-1/2 border h-50 p-10 rounded-2xl'>
        box
    </div>
</section>


</>
)
}
