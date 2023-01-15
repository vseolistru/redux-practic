import {combineReducers} from 'redux'
import {todos} from "./todos-reducer";
import {counter} from "./reducer-counter";

export const rootReducer = combineReducers({
    todos: todos, counter
})
