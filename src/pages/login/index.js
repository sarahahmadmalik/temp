import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsFillLockFill} from 'react-icons/bs'
import Link from 'next/link'

const index = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className="px-4 py-6 bg-white border rounded-md w-80 ">
        <h3 className="text-xl font-semibold ">Login</h3>
        <form className="px-4 py-8">
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="Email" className="text-base font-light flex items-center"><MdEmail /> Email</label>
            <input type="email" placeholder="Email" required className="border w-full px-2 py-2 rounded-md outline-none" />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="Password" className="text-base font-light flex items-center"><BsFillLockFill/> Password</label>
            <input type="password" placeholder="Password" required className="border w-full px-2 py-2 rounded-md outline-none"/>
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <input type="submit" value="Login" className="bg-blue-400 text-white px-2 py-2 rounded-md "/>
          </div>
          <div className="flex items-center justify-between mb-4 w-full gap-4">
            <Link href="/register" className="text-xs text-blue-600">Create an Account?</Link>
            <Link href="/" className="text-xs text-blue-600">Forget Password?</Link>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default index