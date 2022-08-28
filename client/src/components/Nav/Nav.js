import {NavLink} from "react-router-dom"
import {NavWrapper} from "./NawWrapper"

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/addUser">Add user</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/addNews">Add news</NavLink></li>
      </ul>
    </NavWrapper>
  )
}

export default Nav