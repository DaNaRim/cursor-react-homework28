import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import User from "../../../components/User/User"
import {getUsersAction} from "../../../redux/usersReducer/usersActions"
import {getUsersSelector, usersSelector} from "../../../redux/usersReducer/usersSelectors"
import DefaultPageWrapper from "../../DefaultPageWrapper/DefaultPageWrapper"
import UsersPageStyles from "./UsersPageStyles"

const UsersPage = () => {
  const dispatch = useDispatch()

  const users = useSelector(usersSelector)
  const {status, error} = useSelector(getUsersSelector)

  useEffect(() => {
    dispatch(getUsersAction())
  }, [dispatch])

  return (
    <DefaultPageWrapper>
      <UsersPageStyles>
        {status === "loading" && <div className="info_block loading">Loading...</div>}
        {status === "error"
          && <div className="info_block error">Failed to load users: <span>{error.message}</span></div>
        }
        {status === "success" && users.length === 0 && <div className="info_block info">No users</div>}

        {status === "success" && users.length > 0 && users.map(user => <User user={user} key={user.id}/>)}
      </UsersPageStyles>
    </DefaultPageWrapper>
  )
}

export default UsersPage
