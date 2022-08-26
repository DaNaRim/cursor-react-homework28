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
        {users === null && <h2 className="error">Fail to load users</h2>}
        {users && users.map(user => <User user={user} key={user.id}/>)}
      </UserPageStyles>
    </DefaultPageWrapper>
  )
}

export default UsersPage
