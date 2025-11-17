import React, { useState } from 'react'

import virtualdom from "../Images/virtualdom.png"

export default function Form2() {
    let[name,setname] = useState('')
    let[email,setemail] = useState('')

console.log( name);
console.log(email);


  return (
    <div>
      <h1>This is Form 2</h1>
      <label htmlFor="">Name</label>
      <input type="text" onChange={(e)=>{setname(e.target.value)}}  value={name} />
      <label htmlFor="">Email</label>
      <input type="email" onChange={(e)=>{setemail(e.target.value)}}  value={email}/>
      <img src={virtualdom} alt="" />
    </div>
  )
}
