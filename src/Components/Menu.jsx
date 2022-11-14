import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
const Menu = () => {
  return (
    <div>
    <NavLink exact activeClassName='active_class' to='/about'>AboutUs</NavLink>
   
     <NavLink activeClassName='active_class' to='/contact'>Contact</NavLink>


    </div>
  )
}

export default Menu
