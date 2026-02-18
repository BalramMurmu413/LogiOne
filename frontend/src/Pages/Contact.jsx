import React, { useState } from 'react'
import Header from '../Componants/Header.jsx'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";



export default function Contact() {

    let [Data , setData] = useState("")


    const Print = ()=>{
console.log(Data)

    }

  return (
    <>

    <section className='w-[90%] m-auto h-screen flex flex-col justify-between '>
      
    <section>
    <Header/>
    <div className=' w-[96%] m-auto rounded-2xl  my-6 py-6  flex flex-col items-center'>
  <div>
    <h1 className='text-4xl font-bold my-10'>Contact Information </h1>
  </div>
  <div className='my-10 gap-2 w-full justify-center flex flex-col items-center'>
    <h3>Business Name: <span>CodyBalram </span> </h3> <br/>
    <p>Desccription: <span><span> We Build Website with No AI, Only Hard Coded</span></span></p>
    <h3>Reach us: <span>Dhanbad Jharkhand, 828204 India</span> </h3>
  </div>
  <div>
    <h2>Call us : <span>7979729392</span></h2>
    <h2>Mail us : <span>BalramM413@gmail.com</span></h2>
    <h2>Operating Hours: <span>09:00 A.M - 06:00 PM</span></h2>
  </div>
    </div>
    </section>


    {/* ========================================================= */}

     <section className=' w-[400px] m-auto h-[1080px]  hover:shadow-fuchsia-800 transition-all ease-in-out duration-300 rounded-2xl shadow my-20 flex-col items-center justify-center  flex'>
<div>
        <h1 className='font-bold my-5 text-2xl '>Contact Us Form</h1>

</div>
    <form className='flex flex-col my-5'>
      <label htmlFor=""> Name
      </label>
        <input type="text" placeholder="John Deo" className="input active:shadow-amber-100 transition-all ease-in-out shadow-lg outline-0" />
        <label htmlFor=""> Phone
      </label>
      <input type="Number" placeholder="'eg 084571 254125' " className="input active:shadow-amber-100 transition-all ease-in-out shadow-lg outline-0" />
        <label htmlFor=""> Email
      </label>
        <input type="email" placeholder="'eg@email.com'" className="input active:shadow-amber-100 transition-all ease-in-out shadow-lg outline-0"/>
        <label htmlFor=""> Message
      </label>
        <input type="text-area" placeholder="Type here" className="input active:shadow-amber-100 transition-all ease-in-out shadow-lg outline-0"/>
        <button className='my-2 btn  bg-fuchsia-800' onSubmit={Print}>Send</button>
    </form>

    </section>
    {/* ========================================================= */}

    <section className='sm:flex flex-col items-center m-auto justify-center'>
   <h1 className='font-bold text-2xl ml-5 '> Connect with us from your favourite option </h1>
    <div className='w-full flex-col items-center flex md:flex-row flex-wrap justify-between'>

<div className='  w-[300px] h-[120px] rounded-2xl hover:scale-105 m-5 transition ease-in-out duration-75  bg-fuchsia-800 text-white justify-center px-4 items-center flex-col flex'>
  <h1 className=' text-xl items-center gap-1 flex'><span><FaPhoneAlt className='text-[18px] animate-pulse'/></span> 779979797 </h1>
  <p className='text-[16px] items-center gap-1 flex'><span><MdOutlineMarkEmailRead className='text-[22px] animate-pulse'/></span> Balramm413@gmail.com</p>
</div>
<div className=' w-[300px] h-[120px] rounded-2xl hover:scale-105 m-5 transition ease-in-out duration-75  bg-fuchsia-800 text-white justify-center px-4 items-center flex-col flex'>
  <h1 className=' text-xl items-center gap-1 flex'><span><FaPhoneAlt className='text-[18px] animate-pulse'/></span> 7719979797 </h1>
  <p className='text-[16px] cursor-pointer items-center gap-1 flex  animate-pulse underline'> Click Here to chat with Us on <span><FaWhatsapp/></span> </p>
</div>
<div className='w-[300px] h-[120px] rounded-2xl hover:scale-105 m-5 transition ease-in-out duration-75  border-red-100 border items-center flex-col flex bg-fuchsia-800 justify-center text-white '>
  <ul className='text-xl'>Follow us on </ul>
  <li className='hover:underline hover:text-blue-900 cursor-pointer transition-all ease-in-out duration-700 list-none  text-[16px] flex-start' >Intagram</li>
  <li className='hover:underline hover:text-blue-900 cursor-pointer transition-all ease-in-out duration-700 list-none  text-[16px ] flex-start'> Youtube</li>
  <li className='hover:underline hover:text-blue-900 cursor-pointer transition-all ease-in-out duration-700 list-none  text-[16px ] flex-start'>Facebook </li>
</div>

    </div>
    </section>

    </section>
    </>
  )
}
