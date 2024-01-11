import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp user={{name:'Pepe', lastName:'Quintero'}} id = {1} tittle = {'Hola mundo'}/>
  </React.StrictMode>
)
