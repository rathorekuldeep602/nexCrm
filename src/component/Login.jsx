import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (<>
  
 <section className='bg-blue-500 h-150'>
    <div className=' items-center '>
       
        <div className='align-middle border h-100 w-200 rounded-2xl flex ms-50 bg-amber-50'>
            <div className='  z-2    '>
                <h1 className='text-center text-3xl mt-20 mb-5 font-bold '> login</h1>
                
                <form className=' w-100 ' >
                    <label htmlFor="username" className='ms-10 mb-5'> Enter your Username: </label><br />
                    <input type="text" className=' bg-slate-200  border-none rounded-md w-80 ms-10 me-10' id='username' placeholder='user123' />
                    <label htmlFor="password" className='ms-10 mb-5'>Enter your password: </label>
                    <input type="password" id="password" placeholder='*****' className=' bg-slate-200  border-none rounded-md w-80 ms-10 me-10 '/>
                    
                    <input type="checkbox" id="checkbox" className='ms-10' />
                    <label htmlFor="checkbox"> remember me</label> <br />
                    <button type="submit" className='rounded-md ms-10 font-bold text-white bg-blue-500 ps-10 pe-10 p-2 text-center mt-10 ms-30 cursor-pointer'>Login</button>
                </form>
                <div><p className='ms-10 mt-5'>Not an account ? <Link to={'#'} className='text-blue-500'>sign up</Link></p></div>
            </div>
            <div>
                <img src="\images\analysis.png" width={400} className=' rounded-2xl h-75' alt="" />
                <h1 className='text-2xl text-center font-semibold text-black/90 '>Check Your Project Progress</h1>
                <p className='text-sm text-slate-500 p-2 text-center ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore </p>
            </div>

        </div>
    </div>
     <div className=' bg-purple-300'></div> 
  </section> 
   
  </>
  )
}
