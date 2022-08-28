import axios from "axios"
import {SERVER_URL} from "../../axiosConfig"
import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  PENDING_ADD_USER,
} from "./usersActionTypes"

export const getUsersAction = () => (dispatch, getState) => {
  if (getState().usersReducer.users) return

  dispatch({type: GET_USERS})

  axios.get(`${SERVER_URL}/users`)
       .then(({data}) => ({data: data.map(user => !user.id ? {...user, id: user._id} : user)}))
       .then(({data}) => dispatch(({type: GET_USERS_SUCCESS, payload: {users: data}})))
       .catch((error) => dispatch(({type: GET_USERS_FAIL, payload: {error}})))
}

export const pendingAddUserAction = () => ({type: PENDING_ADD_USER})

export const addUserAction = (user) => (dispatch, getState) => {
  dispatch({type: ADD_USER})

  if (!getState().usersReducer.users) dispatch(getUsersAction())

  axios.post(`${SERVER_URL}/users`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  })
       .then(({data}) => ({data: {...data, id: data._id}}))
       .then(({data}) => dispatch(({type: ADD_USER_SUCCESS, payload: {newUser: data}})))
       .catch((error) => dispatch(({type: ADD_USER_FAIL, payload: {error}})))
}
