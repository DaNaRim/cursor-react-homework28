import React from "react"
import {NavLink} from "react-router-dom"
import {NavWrapper} from "./NawWrapper"

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        {/*<li><NavLink to="/" exact={true}>Home</NavLink></li>*/}
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/addUser">Add user</NavLink></li>
      </ul>
    </NavWrapper>
  )
}

export default Nav