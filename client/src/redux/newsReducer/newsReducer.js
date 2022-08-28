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

const initialState = {
  news: null,

  getNews: {
    status: "pending", // pending, loading, success, error
    error: {
      message: "",
    },
  },
  addNews: {
    status: "pending", // pending, loading, success, error
    error: {
      message: "",
    },
  },
  updateNews: {
    status: "pending", // pending, loading, success, error
    error: {
      message: "",
    },
  },
}

const newsReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case GET_NEWS:
      return {...state, getNews: {status: "loading"}}
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        getNews: {status: "success"},
        news: payload.news.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)),
      }
    case GET_NEWS_FAIL:
      return {...state, getNews: {status: "error", error: {message: payload.error.message}}}

    case PENDING_ADD_NEWS:
      return {...state, addNews: {status: "pending"}}
    case ADD_NEWS:
      return {...state, addNews: {status: "loading"}}
    case ADD_NEWS_SUCCESS:
      return {...state, addNews: {status: "success"}, news: [...state.news, payload.newNews]}
    case ADD_NEWS_FAIL:
      return {...state, addNews: {status: "error", error: {message: payload.error.message}}}

    case PENDING_UPDATE_NEWS:
      return {...state, updateNews: {status: "pending"}}
    case UPDATE_NEWS:
      return {...state, updateNews: {status: "loading"}}
    case UPDATE_NEWS_SUCCESS:
      return {
        ...state,
        updateNews: {status: "success"},
        news: state.news.map(item => item.id === payload.updatedNews.id ? payload.updatedNews : item),
      }
    case UPDATE_NEWS_FAIL:
      return {...state, updateNews: {status: "error", error: {message: payload.error.message}}}

    default:
      return state
  }
}

export default newsReducer
