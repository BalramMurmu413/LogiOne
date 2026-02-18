import React from 'react'

export default function Footer() {
  return (
    <>
    <section className='w-full bg-fuchsia-800 text-white cursor-default'>
        <div className='flex w-11/12   m-auto flex-row flex-wrap  justify-between '>
            <div className='flex py-3 items-center   justify-center w-[225px] flex-col  h-[200px]  '>
                    <h1 className='text-5xl' >Balram</h1>
                    <p className='text-sm'>All copyright reserved &copy; 2026 </p>
            </div>

            <div className=' py-3 w-[225px] flex-col  h-[200px]  '>
                <div className=' flex justify-center py-5'>
                <h1 > Quick Links</h1>
                </div>
                <div className=' flex justify-center'>
                <ul className='text-sm gap-1.5 flex flex-col'>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                </ul>
                </div>
            </div>

             <div className=' py-3 w-[225px] flex-col  h-[200px]  '>
                <div className=' flex justify-center py-5'>
                <h1 > About Us</h1>
                </div>
                <div className=' flex justify-center'>
                 <ul className='text-sm gap-1.5 flex flex-col'>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                </ul>
                </div>
            </div>
           
           
             <div className=' py-3 w-[225px] flex-col  h-[200px]  '>
                <div className=' flex justify-center py-5'>
                <h1 > Contact us</h1>
                </div>
                <div className=' flex justify-center'>
                 <ul className='text-sm gap-1.5 flex flex-col'>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                </ul>
                </div>
            </div>

            <div className=' py-3 w-[225px] flex-col  h-[200px] '>
                <div className=' flex justify-center py-5'>
                <h1 > Social Media</h1>
                </div>
                <div className=' flex justify-center'>
                <ul className='text-sm gap-1.5 flex flex-col'>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                    <li>FaceBook</li>
                </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
