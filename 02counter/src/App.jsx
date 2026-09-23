import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
     let [counter, setCounter] =  useState (15)
    //  counter 20 peksha kami asel tarch waadhel
//interview sathi imp ahe 
        counter = counter + 1
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // very imp 
    



     const addvalue = () => {
      if(counter < 20 ){
        setCounter(counter + 1)
      }
     }
    //  remove 0 peksha jaast asel tarch kami hoeil

    const removevalue = () => {
      if(counter > 0){
        setCounter(counter - 1)
      }
    }
  

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value :{counter} </h2>
    
    <button
      onClick ={addvalue}
      > Add value {counter}</button>
    <br/>
    <button

    onClick = {removevalue}
    >remove value {counter}</button>
    <p>footer{counter}</p>
  
    </>
  )
}

   

export default App
