import React from "react"

import './input.css'

export const Input = () => {
    const handleOnChange = () => {
    }
    return (
        <div className="input-wrap">
            <input className="input-field" onChange={handleOnChange}/>
            <button className="input-button">+</button>
        </div>
    )
}
