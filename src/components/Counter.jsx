import React, { useState } from 'react';

const Counter = ({ updater }) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prev => prev + 1);
        updater(prev => prev + 1);
    }
    return (
        <div className='box'>
            <span className='count'>
                {count}
            </span>
            <button className='add' onClick={handleClick}>Add +</button>
        </div>
    )
}

export default Counter;