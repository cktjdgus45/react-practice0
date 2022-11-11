import { React, useState } from 'react';

const MouseFollower = () => {
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);
    const handleMouse = (e) => {
        setClientX(e.clientX);
        setClientY(e.clientY);
    }
    console.log(clientX)
    console.log(clientY)
    return (
        <div className='field' onMouseMove={handleMouse}>
            <div className='circle' style={{ "top": `${clientY}px`, "left": `${clientX}px` }}></div>
        </div>
    )
}

export default MouseFollower;