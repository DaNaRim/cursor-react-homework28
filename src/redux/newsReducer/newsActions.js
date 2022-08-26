import {ADD_NEWS, ADD_NEWS_FAIL, GET_NEWS, GET_NEWS_FAIL} from "./newsActionsTypes"

export const getNewsAction = () => {
  return async dispatch => {
    try {
      const request = await fetch("http://localhost:8080/news")
      const news = await request.json()

      dispatch({type: GET_NEWS, payload: {news}})
    } catch (error) {
      dispatch({type: GET_NEWS_FAIL, payload: {error}})
    }
  }
}

export const addNewsAction = (news) => {
  return async dispatch => {
    try {
      const request = await fetch("http://localhost:8080/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
      })

      const newNews = await request.json()

      dispatch({type: ADD_NEWS, payload: {newNews}})
    } catch (error) {
      dispatch({type: ADD_NEWS_FAIL, payload: {error}})
    }
  }
}
