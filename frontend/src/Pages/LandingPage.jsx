import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { PiCaretLeftBold } from "react-icons/pi";
import FoodApi from '../Api/FoodAPi';

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




console.log(FoodApi)


const [location, setLocation] = useState([])
const [foodApi, setFoodApi] = useState([])
const fetchFoodAPI = async()=>{
    const responce = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1')
    const data = await responce.json()
    setFoodApi(data)
}

const fetchLocationAPI =  async ()=>  {
const response = await fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60")
const data = await response.json()
setLocation(data)
}
console.log(foodApi)
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
        <h1 className='text-5xl font-bold'>Order food. Discover best <br /> restaurants. Swiggy it!</h1>
    </div>

    <div className='flex gap-10 my-15'>
        <div className='flex items-center'>     
        <HiLocationMarker className='inline absolute text-orange-500 w-[26px] h-[26px] ml-2'/>
         <input  type="text" placeholder='Enter your  delivery location' className='text-slate-900 font-semibold px-10 bg-white py-4 min-w-96 rounded-xl outline-0 '/>
         <PiCaretLeftBold className='inline  text-black font-bold ml-85 absolute w-[26px] h-[26px] rotate-270'/>
        </div>
    <div>
        <input type="text" placeholder='Search for restaurant, item and more' className='text-slate-900 font-semibold px-4 bg-white py-4 min-w-96 rounded-xl outline-0 '/>
    </div>
    </div>     




<div className='flex w-[960px] justify-around'>
        {
            FoodApi.map((item, index) =>{
                return <>
                    <div className='h-[300px] shrink-0 gap-3 w-[300px] rounded-4xl bg-white text-black flex-col flex items-start overflow-hidden  justify-between py-5 px-8'>
                 <div className='items-start flex flex-col '>
            <h1 className='font-bold text-3xl'>{item.title}</h1>
            <p className='font-semibold text-2xl'>{item.hotel}</p>
            <span className='font-semibold text-xl bg-orange-200 rounded-xl px-2  text-orange-600'>{item.offer}</span>
        </div>
        <div className='flex flex-row items-end m-auto justify-between pb-4 border'>
            <span className='w-[43px] rounded-full h-[43px] flex items-center justify-center bg-orange-600'>
        <IoIosArrowRoundForward className='text-4xl font-bold '/>
            </span>
        <img src={item.thumbnail} alt="" className='w-[150px]' />

        </div>
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
