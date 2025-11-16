import React from 'react'

export default function ListRendring() {

    let furits = ['apple','orange','banana','graps']

    let users = [{
        name : 'nivi',
        age : 22 ,
        email : 'nivi@gmail.com'
    }]
  return (
    <div>
      <h1>List Rendering</h1>
      {/* array */}
      {furits.map((firut,index)=>{
        return(
            <h2 key={index}> {firut} </h2>
        )
      })}

      {/* Array of  object */}

      <h1>{users.map((user)=>{
        return(
            <>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.email}</h1>
            </>   
        )
      })}</h1>

    </div>
  )
}
