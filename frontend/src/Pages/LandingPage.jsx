import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { PiCaretLeftBold } from "react-icons/pi";
import Card from '../Componants/Card';
import FoodCards from '../Componants/FoodCards';

export default function LandingPage() {
const Links = [
    {
        title: "Swiggy Corporate",
    },{
        title: "Partner with us",
        icon: ""
    },{
        title: "Get the App",
        icon: <IoIosArrowRoundForward className=' -rotate-45 font-bold text-3xl '/>
    },{
        title: "Sign In",
        icon: ""
    },
]
const [location, setLocation] = useState([])

const fetchLocationAPI =  async ()=>  {
const response = await fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60")
const data = await response.json()
setLocation(data)
}
console.log(location)

useEffect (
    ()=>{
        fetchLocationAPI
    },[]
)
  return (
    <>
    <section className='w-full   m-auto bg-orange-600 '> 
     
     <nav className='w-[960px] m-auto flex  '> 
        <div className='flex items-center '>
            <img src="images/logo.png" alt="swiggy logo" className='w-[70px]'/>
            <h1 className='text-3xl font-bold text-white'>Swiggy</h1>
        </div>

        <div className='flex items-center ml-auto gap-10'>
            {
                Links.map(
                    (item, index) => {
                        return <li key={index} className='flex cursor-pointer items-center font-semibold text-white'> {item.title} {item.icon}</li>
                    }
                )
            }
        </div>
     </nav>



    <div className=' flex items-center flex-col justify-center h-screen mt-15'>
    <div> 
        <h1 className='text-5xl flex text-slate-800 font-bold items-center justify-between flex-col'>
            <span>Order food. Discover best</span>
            <span> restaurants. Swiggy it!</span>
        </h1>
    </div>

    <div className='flex  w-3/5  justify-around  gap-10 my-15'>
        <div className='flex items-center'>     
        <HiLocationMarker className='inline absolute text-orange-500 w-[26px] h-[26px] ml-2'/>
         <input  type="text" placeholder='Enter your  delivery location' className='text-slate-900 font-semibold px-10 bg-white py-4 min-w-96 rounded-xl outline-0 '/>
         <PiCaretLeftBold className='inline  text-black font-bold ml-85 absolute w-[26px] h-[26px] rotate-270'/>
        </div>
    <div>
        <input type="text" placeholder='Search for restaurant, item and more' className='text-slate-900 font-semibold px-4 bg-white py-4 min-w-96 rounded-xl outline-0 '/>
    </div>
    </div>     



<Card/>

       
        </div>




</section>
<FoodCards/>
    </>
  )
}
