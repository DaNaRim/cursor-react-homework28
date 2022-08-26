import {ADD_NEWS, GET_NEWS, GET_NEWS_FAIL} from "./newsActionsTypes"

const initialState = {
  news: undefined
}

const newsReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case GET_NEWS:
      return {state, news: payload.news.sort((a, b) => b.dateCreated - a.dateCreated)}
    case GET_NEWS_FAIL:
      return {state, news: null}
    case ADD_NEWS:
      return {state, news: [...state.news, payload.newNews]}
    default:
      return state
  }
}

export default newsReducer