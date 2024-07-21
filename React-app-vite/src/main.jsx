import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//using like variable and run this type of html
const AnotherElement = (
  <a href="http://google.com" target="_blank">Visit google </a>
)


//using rect method React.createElement

const usingreactelsement = React.createElement(

  'a',
  { href: 'http://google.com', target: '_blank' },
  'Click here to visit google | React.createElement'
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  //   <AnotherElement />
  
  // </React.StrictMode>

  <App />
  // AnotherElement
  // usingreactelsement
  
)
