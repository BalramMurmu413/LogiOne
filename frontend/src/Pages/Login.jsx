import React from 'react'

export default function Login() {
  return (
    <>
    <section className='w-full  h-screen'>

    <section >

        <div className='w-1/2  h-screen flex items-start bg-fuchsia-700 text-white flex-col  ' >
        <h1 className='text-5xl m-auto'>CodyBalram</h1>
            <h1 className='my-3 text-3xl  m-auto'>Welcome Back!</h1>
            <p className='m-auto'>Lorem ipsum dolor sit amet conse architecto.</p>
        <div className='  gap-2  flex flex-col m-auto'>
            <label htmlFor="">Email <br  className='w-full '/>
                <input type="email" className='flex w-full outline rounded'  />
            </label>
               <label htmlFor="">Password <br />
                <input type="password"  className=' flex w-full  outline rounded' />
            </label>
            <div className='w-full'>
                <button className='w-full my-5 border  rounded bg-black text-red-700'>Submit</button>
            </div>
        <div>
        </div>
        <h1 className='m-auto'>Or</h1>
        <div className='gap-2  flex flex-col w-full'>
            <div className='w-full items-center rounded  cursor-pointer justify-center flex border'>Login with Google</div>
            <div className='w-full items-center rounded  cursor-pointer justify-center flex border'>Login with Facebook</div>
            <div className='w-full items-center rounded  cursor-pointer justify-center flex border'>Login with Twitter</div>
        </div>
        </div>
<div>

</div>
        <div>

        </div>


        </div>
        <div className='w-1/2'></div>

    </section>

    </section>
    
    
    </>
  )
}
