import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='bg-black h-20'>
        <div className='flex items-center justify-between h-full px-8'>
          <div className='text-white text-2xl font-bold'>Navbar</div>
          <div>
            <Link to='/' className='text-white px-4'>Home</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
