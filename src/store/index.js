import {combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import { basketSlice } from "./basket/basketSlice"
import { mealsSlice } from "./mealsReducer/mealsSlice"
import { configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  [basketSlice.name]: basketSlice.reducer,
  [mealsSlice.name]: mealsSlice.reducer,
})

export const store = configureStore({reducer:rootReducer})

