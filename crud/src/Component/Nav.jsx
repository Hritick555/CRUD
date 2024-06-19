import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div id={style.nav}>
         <Link to="/create">Create User</Link>
         <Link to="/read">User Details</Link>
    </div>
  )
}

export default Nav