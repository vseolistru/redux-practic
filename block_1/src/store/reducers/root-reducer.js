import {combineReducers} from 'redux'
import {todos} from "./todos-reducer";
import {counter} from "./reducer-counter";
import {filters} from '../filters/filters-reducer'

export const rootReducer = combineReducers({
    todos: todos, counter, filters
})
