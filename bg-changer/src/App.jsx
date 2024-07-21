import { useState } from 'react'
import './App.css'

function App() {

  const [color, setcolor] = useState("yellow")
  

  return (
   
    <div className='w-full h-screen '
    style = {{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 bg-white px-2 inset-x-0 '>
        
        <div className='fixed flex flex-wrap justify-center bg-white rounded-full px-3 py-2 bottom-5 gap-4 p-5'>
        
          <button 
          onClick={() => setcolor("red")}
          className=' rounded-full p-2 text-white bg-red-600'
          // style={{backgroundColor: "red"}}
          >Red</button>
        
          <button 
          onClick={() => setcolor("green")}
          className=' rounded-full p-2 text-white'
          style={{backgroundColor: "green"}}
          >Green</button>
        
          <button 
          onClick={() => setcolor("blue")}
          className=' rounded-full p-2 text-white'
          style={{backgroundColor: "blue"}}
          >Blue</button>
        
          <button 
          onClick={() => setcolor("orange")}          
          className='rounded-full p-2 text-white'
          style={{backgroundColor: "orange"}}
          >Orange</button>
        
          <button 
          onClick={() => setcolor("cyan")}
          className='rounded-full p-2 text-white'
          style={{backgroundColor: "cyan"}}
          >Cyan</button>
        
          <button 
          onClick={() => setcolor("pink")}
          className='rounded-full p-2 text-white'
          style={{backgroundColor: "pink"}}
          >Pink</button>
        </div>
      </div>
    </div>
      
  
  )
}

export default App
