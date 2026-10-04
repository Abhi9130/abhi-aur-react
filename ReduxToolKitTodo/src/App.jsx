import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todo.jsx'

function App() {
  return (
    <div 
    style={{

    }}>
      <h2>learn Redux Toolkit</h2>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
