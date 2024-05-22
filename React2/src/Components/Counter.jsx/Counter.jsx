import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Counter = ({initialState, toAdd, substract}) => {
    const [counter, setCounter] = useState(initialState)
    const increment = () => {
        setCounter(counter + toAdd);
    }
    const decrement = () => {
        setCounter(counter - substract);
    }

  return (
    <div>
        <button onClick={decrement} className='btn'>Restar</button>
        <span>{counter}</span>
        <button onClick={increment} className='btn'>Sumar</button>
    </div>
  )
}

export default Counter