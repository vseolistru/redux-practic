import {createStore} from 'redux'
import {cardFormReducer} from "./reducer";

export const store = createStore(cardFormReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())