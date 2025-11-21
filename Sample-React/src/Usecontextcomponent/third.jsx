import React from 'react'
import { useContext } from 'react'
import { pass } from '../App'

export default function Third() {
    let chocos = useContext(pass)
  return (
    <div className='Main-div'>
      <h1>grandchild  Copmponent</h1>
      <h2>{chocos}</h2>
      <h2></h2>
    </div>
  )
}