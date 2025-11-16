import React from 'react'
import '../Styles/login.css'

export default function Login() {

    let theme = {
        background:'black',
        color:'white'
    }

  return (
    <div>
      <h1 className='Login-heading'>Form</h1>
      <h2 style={{background:'blue',color:'yellow'}}>Welcome</h2>

      <h2 style={theme}>Please Fill the form</h2>
      
    </div>
  )
}




