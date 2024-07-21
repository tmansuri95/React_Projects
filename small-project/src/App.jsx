import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let counter = 5
 
 let [counter, setcounter] = useState(5)

 const AddValue = () => {
  if (counter < 50) {
    // setcounter(counter + 1);
    setcounter(counter => counter + 1);
    setcounter(counter => counter + 1);
    setcounter(counter => counter + 1);
  }
  // console.log('Value added', counter);

 }

 const RemoveValue = () => {
  if (counter > 0) {
    setcounter(counter - 1);

  }
  // console.log('Value removed', counter);

 }

  return (
    <>
    <h1>Small Project</h1>
    <h2>Counter Value {counter}</h2>

    <button onClick={AddValue}>Add Value {counter}</button>
    <button onClick={RemoveValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
