import {ADD_NEWS, GET_NEWS, GET_NEWS_FAIL, UPDATE_NEWS} from "./newsActionsTypes"

const initialState = {
  news: undefined,
}

const newsReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case GET_NEWS:
      return {state, news: payload.news.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))}
    case GET_NEWS_FAIL:
      return {state, news: null}
    case ADD_NEWS:
      return {
        state,
        news: [...state.news, payload.newNews].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)),
      }
    case UPDATE_NEWS:
      return {state, news: state.news.map(item => item.id === payload.newNews.id ? payload.newNews : item)}
    default:
      return state
  }
}

export default newsReducer
