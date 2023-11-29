import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount} from './../redux-toolkit/counterSlice';

function Counter(){
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
        <h2>Compteur : {count}</h2>
        <button onClick={()=>dispatch(increment())}>Incrémenter</button>
        <button onClick={()=>dispatch(decrement())}>Decrémenter</button>        
        <button onClick={()=>dispatch(incrementByAmount(5))}>Incrémenter de 5</button>
    </div>
    )
}

export default Counter;
