import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import companiesReducer from './reducers/companiesReducer.js'

const store = createStore(
    companiesReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store