import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import  Card from'./components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "abhishek",
    age : 22
  }

  return (
    <>
    

    

    
      <h1 className = 'bg-green-400 text-black p-4 rounded-3xl  text-3xl font-bold p-4 roun '>Tailwind test</h1>

      <Card username = "abhiaurcode " btnText="Click Me" />
      <Card username = "abhishek" btnText="Visit Me" />



    </>
    
  );
}

export default App
