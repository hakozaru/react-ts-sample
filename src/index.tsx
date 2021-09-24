import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import Img from './example.png'

ReactDOM.render(
  <div>
    Hello world
    <img src={Img}></img>
  </div>,
  document.getElementById('root')
)
