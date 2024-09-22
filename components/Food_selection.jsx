"use client"
import React, { useState } from 'react';

function Food_selections({ selctions, isFirst }) {
    const [isActive, setIsActive] = useState(isFirst)

    const handleClick = () => {
        setIsActive((prev) => !prev)
    }

    return (
        <div className={`item ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <img src={selctions.imgSrc} alt={selctions.title} />
            <span>{selctions.title}</span>
        </div>
    )
}

export default Food_selections;