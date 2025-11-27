import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  let navigate = useNavigate()

  let users = [
    {
      id: 1,
      name: 'Nivi',
      email: "Nivi@gmail.com"
    },

    {
      id: 2,
      name: 'Kaviya',
      email: "Kaviya@gmail.com"
    }
  ]


  return (
    <div>
      <h1>Login page</h1>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => {
              navigate(`/home/${user.id}`,{
                state:{
                  userName:user.name,
                  userEmail:user.email
                }
              }
              )
            }}>Login As {user.name}</button>
          </div>
        )
      })}
    </div>
  )
}
