import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AllReducers } from "../reducers";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )

  export const store = createStore(AllReducers, composedEnhancer);