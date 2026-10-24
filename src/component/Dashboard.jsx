import React from 'react'

export default function Dashboard() {
  return (
    <>
    <div className='flex justify-between mt-20'>
    <div className='w-50 bg-blue-500 text-white text-lg font-semibold p-2 '>
        <h1 className='uppercase'>welcome to nexcrm</h1> <hr />
        <p className='mt-5'>Dashboard</p> <hr />
        <p className='mt-5'>Companies</p>
        <p className='mt-5'>Contact</p>
        <p className='mt-5'>Deals</p> <hr />
        <p className='mt-5'>Messages</p> <hr />
        <p className='mt-5'>Email</p> <hr />
        <p className='mt-5'>Modules</p>
        <p className='mt-5'>Pricing</p>
        <p className='mt-5'>Invoice</p>
    </div>
    <div className=' w-280'>
        <div className='flex justify-between '>
        <div >
        <input type="search" className='p-5 bg-slate-300 ' id="search" placeholder='Search for ...' />
        <input type="button" /> Search</div>
        <div className=' text-end flex p-5 '>
            <h2><span>Welcome</span>, sample</h2>
             <div className='h-5 w-5  me-10'><img src="\images\OIP.webp" alt="" /></div>
        </div>
        </div>
        <div className=' bg-slate-100 ' >
    <div className='relative'><h2 className='font-semibold ms-10 mt-5 text-slate-600 text-2xl'>Welcome to NexCRM</h2></div>
   <div className='gap-10 flex'>
    <div className='m-3 w-50 bg-white shadow-2xl flex'>
        <div className='h-15 w-1 bg-blue-900'></div>
       <div> <h3 className='ms-3 uppercase text-blue-900'>Companies</h3>
        <p className='ms-3 font-bold'>3456</p></div>
    </div>
    <div className='m-3 w-50 bg-white shadow-2xl flex' > 
          <div className='h-15 w-1 bg-yellow-500'></div>
       <div> <h3 className='ms-3 uppercase text-yellow-500'>contacts</h3>
        <p className='ms-3 font-bold'>18002</p></div>
        </div>
    </div>
    <div className='flex'>
        <div className=' bg-white shadow-2xl h-70 w-150 ms-10 mt-5'>
            <div className='h-10 bg-slate-50 border border-slate-300'>
                <p className=' font-bold text-sky-600 p-2' >Earning overview</p>
            </div>
        </div>
        <div  className=' bg-white shadow-2xl h-70 w-70 ms-10 mt-5'>
             <div className='h-10 bg-slate-50 border border-slate-300'>
                <p className=' font-bold text-sky-600 p-2' >Revanue sources</p>
            </div>

        </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
