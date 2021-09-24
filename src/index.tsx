import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import Img from './example.png'

const hoge = () => {
  console.log('あああああああああ')
}

ReactDOM.render(
  <div>
    Hello world
    <img src={Img}></img>
    <button onClick={hoge}></button>
  </div>,
  document.getElementById('root')
)
