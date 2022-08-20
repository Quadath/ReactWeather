import React, { useState } from "react"

import './input.css'

export const Input = () => {
    return (
    <div className="input-wrap">
        <InputTag/>
        <Button/>
    </div> 
    )
}

const InputTag = () => {
    const [inputValue, setInputValue] = useState('');
    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <input className="input-field" placeholder="Enter city..." value={inputValue} onChange={handleOnChange} />
    )
}

const Button = () => (<button className="input-button">+</button>)

