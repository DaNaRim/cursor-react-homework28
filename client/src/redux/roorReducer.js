import {combineReducers} from "redux"
import newsReducer from "./newsReducer/newsReducer"
import usersReducer from "./usersReducer/usersReducer"

const rootReducer = combineReducers({
  usersReducer,
  newsReducer
})

export default rootReducer
