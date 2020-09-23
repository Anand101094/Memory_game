import React from 'react'

export default function Card({ id, width, height, back, front, flipped, handleClick, disabled, solved }) {

    return (
        <div className=''>
            <div
                className={flipped || solved ? 'flip-container card' : ' card'}
                onClick={disabled ? null : () => handleClick(id)}
                style={{ width: '120px', height: '140px' }}
            >
                <div className="flipper">
                    <img src={flipped || solved ? front : back} alt='loading' className={flipped || solved ? 'front' : 'back'} />
                </div>
            </div >
        </div>
    )
}
