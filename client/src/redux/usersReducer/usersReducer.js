import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  PENDING_ADD_USER,
} from "./usersActionTypes"

const initialState = {
  users: null,

  getUsers: {
    status: "pending", // pending, loading, success, error
    error: {
      message: "",
    },
  },
  addUser: {
    status: "pending", // pending, loading, success, error
    error: {
      message: "",
    },
  },
}

const usersReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case GET_USERS:
      return {...state, getUsers: {status: "loading"}}
    case GET_USERS_SUCCESS:
      return {...state, getUsers: {status: "success"}, users: payload.users}
    case GET_USERS_FAIL:
      return {...state, getUsers: {status: "error", error: {message: payload.error.message}}}

    case PENDING_ADD_USER:
      return {...state, addUser: {status: "pending"}}
    case ADD_USER:
      return {...state, addUser: {status: "loading"}}
    case ADD_USER_SUCCESS:
      return {...state, addUser: {status: "success"}, users: [...state.users, payload.newUser]}
    case ADD_USER_FAIL:
      return {...state, addUser: {status: "error", error: {message: payload.error.message}}}

    default:
      return state
  }
}

export default usersReducer