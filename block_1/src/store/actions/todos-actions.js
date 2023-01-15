import {ADD_TODO, REMOVE_TODO, RESET_TODO} from '../../store/constatns'
export const addTodos = (title) => ({
    type:ADD_TODO, title
})
export const removeTodos = (id) => {
    return  {type: REMOVE_TODO, id}
}
export const toggleTodos = (id) => ({
    type:RESET_TODO, id
})