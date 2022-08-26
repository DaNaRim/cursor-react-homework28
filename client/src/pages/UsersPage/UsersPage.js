import React from "react"
import {useSelector} from "react-redux"
import User from "../../components/User/User"
import {store} from "../../redux/store"
import {getUsersAction} from "../../redux/usersReducer/usersActions"
import {usersSelector} from "../../redux/usersReducer/userSelectors"
import DefaultPageWrapper from "../DefaultPageWrapper/DefaultPageWrapper"
import UserPageStyles from "./UserPageStyles"

store.dispatch(getUsersAction())

const UsersPage = () => {
  const users = useSelector(usersSelector)

  return (
    <DefaultPageWrapper>
      <UserPageStyles>
        {users === null && <div>Fail to load users</div>}
        {users && !users.length && <div>No users</div>}
        {users && users.map(user => <User user={user} key={user.id}/>)}
      </UserPageStyles>
    </DefaultPageWrapper>
  )
}

export default UsersPage
