import React, { useEffect, useRef, useState } from 'react'
export default function Userefhook() {
    let inputref = useRef()
    console.log(inputref.current);
    function handlefocus() {
        inputref.current.focus()
        inputref.current.style.backgroundColor = 'yellow'
        inputref.current.style.color = 'blue'
    }
  return (
    <div>
      <h1>UseRef component</h1>
      <input type="text" ref={inputref}  />
      <button onClick={handlefocus} >Focus input</button>
    </div>
  )
}
