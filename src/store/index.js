import {combineReducers, createStore} from "redux"
import basketReducer from "./basket/basketReducer"
import thunk from "redux-thunk"
import { mealsReducer } from "./mealsReducer/mealsReducer"
import { applyMiddleware } from "redux"

const rootReducer = combineReducers({
   meals: mealsReducer,
   basket:basketReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

