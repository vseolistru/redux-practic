import React from 'react';
import {addTodos, removeTodos, toggleTodos} from "./store";
import {useDispatch, useSelector} from "react-redux";

const Todolist = () => {
    const todos = useSelector(state => state)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
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