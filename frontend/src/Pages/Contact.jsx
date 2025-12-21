import React, { useState } from 'react'

export default function Contact() {

    let [Data , setData] = useState("")


    const Print = ()=>{
console.log(Data)

    }

  return (
    <>
    <section className='w-[90%] m-auto h-screen flex flex-col justify-between '>
      
    <section>
    <div className=' w-[96%] m-auto  rounded-2xl  my-6 py-6  flex flex-col items-center'>
  <div>
    <h1 className='text-4xl font-bold my-10'>Contact Information </h1>
  </div>
  <div className='my-10 gap-2 w-full flex flex-col items-center'>
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
        <h1 className='font-bold text-2xl '>Contact Us Form</h1>

</div>
    <form className='flex flex-col py-5'>
      <label htmlFor=""> Name
      </label> <br />
        <input type="text" placeholder="John Deo" className="input active:shadow-amber-800 transition-all ease-in-out shadow-lg outline-0" />
        <label htmlFor=""> Phone
      </label><br />
        <input type="Number" placeholder="'eg 084571 254125' " className="input active:shadow-amber-800 transition-all ease-in-out shadow-lg outline-0" />
        <label htmlFor=""> Email
      </label><br />
        <input type="email" placeholder="'eg@email.com'" className="input active:shadow-amber-800 transition-all ease-in-out shadow-lg outline-0"/>
        <label htmlFor=""> Message
      </label> <br />
        <input type="text-area" placeholder="Type here" className="input active:shadow-amber-800 transition-all ease-in-out shadow-lg outline-0"/>
        <button className='my-2 btn  bg-fuchsia-800' onSubmit={Print}>Send</button>
    </form>

    </section>
    {/* ========================================================= */}

    <section>
   <h1 className='font-bold text-2xl ml-5 '>What we offer</h1>
    <div className='w-full m-auto flex flex-row flex-wrap justify-between'>

<div className='w-[250px] h-[120px] rounded hover:scale-105 m-5 transition ease-in-out duration-75 bg-fuchsia-800'>1</div>
<div className='w-[250px] h-[120px] rounded hover:scale-105 m-5 transition ease-in-out duration-75 bg-fuchsia-800'>1</div>
<div className='w-[250px] h-[120px] rounded hover:scale-105 m-5 transition ease-in-out duration-75 bg-fuchsia-800'>1</div>
<div className='w-[250px] h-[120px] rounded hover:scale-105 m-5 transition ease-in-out duration-75 bg-fuchsia-800'>1</div>
    </div>
    </section>

    </section>
    </>
  )
}
