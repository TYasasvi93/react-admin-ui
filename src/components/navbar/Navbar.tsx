import React from 'react'
import './navbar.scss'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='logo' />
        <span >React Dashboard</span>
      </div>
      <div className='icons'>
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon" />
        <div className="notifications">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/16427628/pexels-photo-16427628/free-photo-of-cute-smiling-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        Jane</div>
        <img src="/settings.svg" alt="settings" className="icon" />

      </div>
    </div>
  )
}
