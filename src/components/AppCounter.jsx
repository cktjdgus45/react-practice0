import React, { useState } from 'react';
import Counter from './Counter';

const AppCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <div className='banner'>Total Count : {count >= 10 ? `${count}🥇` : `${count}🥉`}</div>
            <Counter updater={setCount}></Counter>
            <Counter updater={setCount}></Counter>
        </div>
    )
}
export default AppCounter;