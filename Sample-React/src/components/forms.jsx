import React, { useState } from 'react'

export default function Forms() {
    let [name,setname] = useState('')
    let [email,setemail] = useState('')
    let [chechbox,setcheckbox] = useState(false)


    console.log(name);
    console.log(email);
    console.log(chechbox);

  return (
    <div>
      <h1>Forms</h1>
      <label htmlFor="">Name</label>
      <input type="text" onChange={(e)=>{setname(e.target.value)}}  value={name} />
      <label htmlFor="">email</label>
      <input type="email" onChange={(e)=>{setemail(e.target.value)}} value={email} />
      <label htmlFor="">chechbox</label>
      <input type="checkbox" onChange={(e)=>{setcheckbox(e.target.checked)}}  checked={chechbox}/>
      <button>Submit</button>
    </div>
  )
}
