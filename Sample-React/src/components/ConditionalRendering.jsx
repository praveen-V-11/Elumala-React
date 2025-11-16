import React from 'react'

export default function ConditionalRendering() {

    let login = false

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {/* ternary */}
      {login?(<h1>You are loged in</h1>):(<h1>You are loged of</h1>)}

      {/* logical */}
      {login || <p>helo</p>}

    </div>
  )
}
