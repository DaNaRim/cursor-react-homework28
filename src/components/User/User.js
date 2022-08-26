import React from "react"
import UserStyles from "./UserStyles"

const User = (data) => {
  const {username, linkToImage} = data.user

  return (
    <UserStyles className="user">
      {linkToImage && <img src={linkToImage} alt={username}/>}
      <h2>{username}</h2>
    </UserStyles>
  )
}

export default User
