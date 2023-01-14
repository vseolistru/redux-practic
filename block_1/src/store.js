import {createStore} from 'redux';

const initialState = [{
    id:0, title:'SomeTitle', completed: false
}]

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return state +1
        }
        case 'DECREMENT': {
            return state -1
        }
        case 'RESET': {
            return 0
        }
        default: {
            return state
        }
    }
}

const todos = (state=[], action) => {

    switch (action.type) {

        case 'ADD_TODO': {
            return [...state, {
                id:Date.now(),
                title: action.title,
                completed:false
            }]
        }

        case 'REMOVE_TODO': {
            return state.filter(item=>(item.id !== action.id))
        }

        case 'RESET': {
            return state.map((item)=>
                item.id === action.id ? {...item, completed: !item.completed}: item)
        }

        default: {
            return state
        }
    }
}

export const store = createStore( todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export const increment = {type: 'INCREMENT'}
export const decrement = {type: 'DECREMENT'}
export const reset = {type: 'RESET'}

export const addTodos = (title) => ({
    type:'ADD_TODO', title
})
export const removeTodos = (id) => ({
    type:'REMOVE_TODO', id
})
export const toggleTodos = (id) => ({
    type:'RESET', id
})