import axios from "axios"
import {SERVER_URL} from "../../axiosConfig"
import {
  ADD_NEWS,
  ADD_NEWS_FAIL,
  ADD_NEWS_SUCCESS,
  GET_NEWS,
  GET_NEWS_FAIL,
  GET_NEWS_SUCCESS,
  PENDING_ADD_NEWS,
  PENDING_UPDATE_NEWS,
  UPDATE_NEWS,
  UPDATE_NEWS_FAIL,
  UPDATE_NEWS_SUCCESS,
} from "./newsActionsTypes"

export const getNewsAction = () => (dispatch, getState) => {
  if (getState().newsReducer.news) return

  dispatch({type: GET_NEWS})

  axios.get(`${SERVER_URL}/news`)
       .then(({data}) => ({data: data.map(news => !news.id ? {...news, id: news._id} : news)}))
       .then(({data}) => dispatch(({type: GET_NEWS_SUCCESS, payload: {news: data}})))
       .catch((error) => dispatch(({type: GET_NEWS_FAIL, payload: {error}})))
}

export const pendingAddNewsAction = () => ({type: PENDING_ADD_NEWS})

export const addNewsAction = (news) => (dispatch, getState) => {
  dispatch({type: ADD_NEWS})

  if (!getState().newsReducer.news) dispatch(getNewsAction())

  axios.post(`${SERVER_URL}/news`, news, {
    headers: {
      "Content-Type": "application/json",
    },
  })
       .then(({data}) => ({data: {...data, id: data._id}}))
       .then(({data}) => dispatch(({type: ADD_NEWS_SUCCESS, payload: {newNews: data}})))
       .catch((error) => dispatch(({type: ADD_NEWS_FAIL, payload: {error}})))
}

export const pendingUpdateNewsAction = () => ({type: PENDING_UPDATE_NEWS})

export const updateNewsAction = (news) => (dispatch, getState) => {
  dispatch({type: UPDATE_NEWS})

  if (!getState().newsReducer.news) dispatch(getNewsAction())

  axios.put(`${SERVER_URL}/news`, news, {
    headers: {
      "Content-Type": "application/json",
    },
  })
       .then(({data}) => ({data: {...data, id: data._id}}))
       .then(({data}) => dispatch(({type: UPDATE_NEWS_SUCCESS, payload: {updatedNews: data}})))
       .catch((error) => dispatch(({type: UPDATE_NEWS_FAIL, payload: {error}})))
}
