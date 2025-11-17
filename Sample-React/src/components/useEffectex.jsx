import React, { use, useEffect, useState } from 'react'

export default function UseEffectex() {
    let [user,setuser] =useState(0)
    let [student,setstudent] =useState(0)

    useEffect(()=>{
       console.log(' user compontent renderd');
    },[user])
   
    useEffect(()=>{
       console.log('student componet renderd');
    },[student])
  return (
    <div>
      <p>{user}</p>
      <button onClick={()=>{setuser(user + 1 )}}>Change user</button>
      <button onClick={()=>{setstudent(user + 1 )}}>Change student</button>
    </div>
  )
}
