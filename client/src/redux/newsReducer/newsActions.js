import {ADD_NEWS, ADD_NEWS_FAIL, GET_NEWS, GET_NEWS_FAIL, UPDATE_NEWS, UPDATE_NEWS_FAIL} from "./newsActionsTypes"

export const getNewsAction = () => {
  return async dispatch => {
    try {
      const request = await fetch("http://localhost:8080/news")
      const news = await request.json()

      news.forEach(user => !user.id ? user.id = user._id : null)

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

      if (!newNews.id) newNews.id = newNews._id

      dispatch({type: ADD_NEWS, payload: {newNews}})
    } catch (error) {
      dispatch({type: ADD_NEWS_FAIL, payload: {error}})
    }
  }
}

export const updateNewsAction = (news) => {
  return async dispatch => {
    try {
      const request = await fetch("http://localhost:8080/news", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
      })

      const newNews = await request.json()

      console.log(newNews)

      if (!newNews.id) newNews.id = newNews._id

      dispatch({type: UPDATE_NEWS, payload: {newNews}})
    } catch (error) {
      dispatch({type: UPDATE_NEWS_FAIL, payload: {error}})
    }
  }
}
