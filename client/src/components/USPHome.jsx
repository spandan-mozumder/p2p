import React from 'react'
import { navCategories } from "../constants/index";

const USPHome = () => {
  return (
    <div className='h-full w-screen'>
        <h1 className='text-4xl m-10'>Topics our Educators are skilled in</h1>

        <div>
        {navCategories.map((category, index) => (
          <li key={index} className="text-lg font-medium">{category.domain}</li>
        ))}
        </div>
    </div>
  )
}

export default USPHome
