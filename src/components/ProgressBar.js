import React, { useState } from 'react'

const ProgressBar = ({done}) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle)
    }, 850)
    return(
        <div className='progress-body'>
            <div className='progress'>
                <div className='progress-done' style={style} onChange={done}>
                    {done}%
                </div>
            </div>
        </div>

    )

}

export default ProgressBar