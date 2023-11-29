import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterActions';

const Counter = () => {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Compteur : {count}</h2>
            <button onClick={()=>dispatch(increment())}>Incrémenter</button>
            <button onClick={()=>dispatch(decrement())}>Decrémenter</button>
        </div>
    )
}

export default Counter;