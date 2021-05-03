import React, { useState } from 'react'
import './Input.css'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodo = () => {
    console.log(`Adding ${input}`)

    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(saveTodo({
        item: input,
        done: false,
        id: Date.now()
      }))
    }
  }

  return (
    <div className='input'>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKeyDown}/>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input
