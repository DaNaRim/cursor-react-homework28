import {createStore} from "redux"
import middlewares from "./middlewares"
import rootReducer from "./roorReducer"

export const store = createStore(rootReducer, middlewares)
