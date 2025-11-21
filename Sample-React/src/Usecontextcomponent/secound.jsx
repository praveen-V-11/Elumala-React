import React from 'react'
import Third from './third'
import { useContext } from 'react'
import { pass } from '../App'

export default function Secound() {

    let name = useContext(pass)

  return (
    <div className='Main-div'>
      <h1> child Copmponent</h1>
      <h2>{name}</h2>
      <Third />
    </div>
  )
}