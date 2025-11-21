import React, { useRef } from 'react'

export default function Userefex2() {
    let inputref = useRef(null)
    let storedvalue = useRef('')


    function Handleref() {
        let value = inputref.current.value
        storedvalue.current = value
        console.log(storedvalue.current);
    }
  return (
    <div>
      <h1>Useref Example 2</h1>
      <input type="text"  ref={inputref} />
      <button onClick={Handleref}>store value</button>
      <h2>{storedvalue.current}</h2>
    </div>
  )
}



