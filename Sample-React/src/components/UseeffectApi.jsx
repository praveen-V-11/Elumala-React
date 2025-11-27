import React, { useEffect, useState } from 'react'
export default function UseeffectApi() {
    let [user,setuser] = useState([])
    async function Handleusers() {
        let res = await fetch('https://dummyjson.com/users')
        console.log(res);
        let data = await res.json()
        console.log(data);
        setuser(data.users)
    }
    useEffect(()=>{
        Handleusers()
    },[])
    console.log(user);
  return (
    <div>
      <h2>List Rendring</h2>
      {user.map((use,ind)=>{
        return(
            <>
            <div>
              <h1 key={ind}>{use.firstName}</h1>  
            </div>
            </>
        )
      })}
    </div>
  )
}
