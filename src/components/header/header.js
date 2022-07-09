import React from 'react'
import '../header/header.css'

const Header = () => {
  return (
    <>
    <div className='header-wraper'>
    <div className='header-div'>
    <img src='images/hdfc-life-logo.png' className='logo-img' alt={"logo"}/>
    <img src='images/bouncebackbatch logo.png' className='bounceBack-logo' alt={"logo"}/>
    <p className='time'><span className='blue-text'>Begins in</span> <span className='red-text'>4d 18h</span></p>
    </div>
    </div>
    </>
  )
}

export default Header