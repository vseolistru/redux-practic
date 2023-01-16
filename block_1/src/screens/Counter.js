import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, reset} from '../store/actions/counter-actions'


const Counter = () => {
    const count = useSelector(state => state.counter)


    const dispatch = useDispatch()

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=> dispatch(decrement)}>-</button>
            <button onClick={()=> dispatch(increment)}>+</button>
            <button onClick={()=> dispatch(reset)}>reset</button>
        </div>
    )
};

export default Counter;