export const selectActiveTodos = (state) =>
    state.todos.filter(item => item.completed === false)
export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all': {
            return state.todos

        }
        case 'active':{
            return state.todos.filter(item => !item.completed)
        }
        case 'completed': {
            return state.todos.filter(item => item.completed)
        }

        default: return state.todos
    }
}