import React, { useState } from 'react'

export default function Darkmode() {
    let [theme,settheme] = useState(false)

  return (
    <div style={{background:theme?'#333':'#fff',
        color:theme? '#fff' : '#333',padding:'50px',transition:'1s'
    }}>
        <button onClick={()=>{settheme(!theme)}}> {theme?'white':'Dark'} Theme</button>
    </div>
  )
}
