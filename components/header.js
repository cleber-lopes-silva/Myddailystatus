import React from 'react'
import NavBar from '../components/navBar'

const Header = () => {
  return (
    <div>
      <div className='bg-indigo-200 '>
        <h1>
          <img className='h-24 mx-auto py-4' src='/mylogo.png' />
        </h1>
        
      </div>
      <NavBar />
    </div>
  )
}

export default Header
