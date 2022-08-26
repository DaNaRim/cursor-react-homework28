import {ADD_USER, ADD_USER_FAIL, GET_USERS, GET_USERS_FAIL} from "./usersActionTypes"

export const getUsersAction = () => {
  return async dispatch => {
    try {
      const request = await fetch("http://localhost:8080/users")
      const users = await request.json()

      users.forEach(user => !user.id ? user.id = user._id : null)

      dispatch({type: GET_USERS, payload: {users}})
    } catch (error) {
      dispatch({type: GET_USERS_FAIL, payload: {error}})
    }
  }
}

export const addUserAction = (user) => {
  return async dispatch => {
    try {
      const request = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      const newUser = await request.json()

      if (!newUser.id) newUser.id = newUser._id

      dispatch({type: ADD_USER, payload: {newUser}})
    } catch (error) {
      dispatch({type: ADD_USER_FAIL, payload: {error}})
    }
  }
}
