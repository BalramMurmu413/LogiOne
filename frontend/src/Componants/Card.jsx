import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

import FoodApi from '../Api/FoodAPi';
 
export default function Card() {

    const [foodApi, setFoodApi] = useState([])
const fetchFoodAPI = async()=>{
    const responce = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1')
    const data = await responce.json()
    setFoodApi(data)
}

  return (
<div className='flex w-[960px] justify-around gap-10 overflow-hidden'>
        {
            FoodApi.map((item, index) =>{
                return <>
                    <div className='h-[250px] shrink-0  w-[280px] rounded-xl bg-white text-black flex-col flex items-start overflow-hidden  justify-between p-4'>
                 <div className='items-start flex flex-col  '>
            <h1 className='font-bold text-3xl'>{item.title}</h1>
            <p className='font-semibold text-2xl'>{item.hotel}</p>
            <span className='font-semibold text-xl bg-orange-200 rounded-xl px-2  text-orange-600'>{item.offer}</span>
        </div>
        <div className='flex flex-row items-end w-full m-auto justify-between pb-2 '>
            <span className='w-[43px] rounded-full h-[43px] flex items-center justify-center bg-orange-600'>
        <IoIosArrowRoundForward className='text-xl text-white font-bold '/>
            </span>
        <img src={item.thumbnail} alt="" className=' size-35 rounded-xl object-bottom-right -mr-4' />

        </div>
        </div> 
                </>
            })
        }
        </div>
  )
}
