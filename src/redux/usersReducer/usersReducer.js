import {ADD_USER, GET_USERS, GET_USERS_FAIL} from "./usersActionTypes"

const initialState = {
  users: undefined
}

const usersReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case GET_USERS:
      return {state, users: payload.users}
    case GET_USERS_FAIL:
      return {state, users: null}
    case ADD_USER:
      return {state, users: [...state.users, payload.newUser]}
    default:
      return state
  }
}

export default usersReducer