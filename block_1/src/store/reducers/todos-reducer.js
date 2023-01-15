import {ADD_TODO, REMOVE_TODO, RESET_TODO} from '../../store/constatns'
export const todos = (state=[], action) => {

    switch (action.type) {

        case ADD_TODO: {
            return [...state, {
                id:Date.now(),
                title: action.title,
                completed:false
            }]
        }

        case REMOVE_TODO: {
            return state.filter(item=>(item.id !== action.id))
        }

        case RESET_TODO: {
            return state.map((item)=>
                item.id === action.id ? {...item, completed: !item.completed}: item)
        }

        default: {
            return state
        }
    }
}