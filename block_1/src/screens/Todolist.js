import React from 'react';
import {addTodos, removeTodos, toggleTodos} from "../store/actions/todos-actions";
import {useDispatch, useSelector} from "react-redux";
import {selectActiveTodos, selectVisibleTodos} from '../store/selector'



const Todolist = () => {
    const activeFilter = useSelector(selectActiveTodos)
    const todos = useSelector(state => selectVisibleTodos(state, activeFilter))
    const dispatch = useDispatch()
    const handleSubmit = (e) =>
        e.preventDefault()
        dispatch(addTodos(e.target.title.value))
        e.target.reset()
    }
    const handleDelete = (id) => {
        dispatch(removeTodos(id))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="new todo"/>
                <input type="submit" value="Add Todo"/>
            </form>
            <ul>
                {todos.map(item => (
                    <li key={item.id}>
                        <input type="checkbox" checked = {item.completed} onChange={()=>dispatch(toggleTodos(item.id))}/>
                        {' '+item.title}
                        <button onClick={()=>handleDelete(item.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Todolist;