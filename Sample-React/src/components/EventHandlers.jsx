import React, { useState } from 'react'


export default function EventHandlers() {
    function Print(mes) {
        console.log(mes);
    }

    let [count,setcount] = useState(0)

    function Increse() {
        setcount( count + 1)
    }
    
    
  return (
    <div>
      <h1>Event Handlers:</h1>
      {/* <h2>Function with parameter</h2> */}
      <button onClick={()=>{Print('hello')}}>Print a Message</button>
      
      
      {/* <h2>Function without parameter</h2> */}
      <h3>{count}</h3>
      <button onClick={Increse}>Increse Count</button>
    </div>
  )
}
