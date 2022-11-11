import { React, useState } from 'react';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouse = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    return (
        <div className='field' onMouseMove={handleMouse}>
            <div className='circle' style={{ "top": `${position.y}px`, "left": `${position.x}px` }}></div>
        </div>
    )
}

export default MouseFollower;