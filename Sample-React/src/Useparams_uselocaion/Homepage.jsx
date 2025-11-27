import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export default function Homepage() {

    let params = useParams()

    let location = useLocation()

    let { userName , userEmail} = location.state 
    
    console.log(userName);
    console.log(params);

    
    
  return (
    <div>
      <h1>Home Page </h1>
      <h1>User Id:{params.id}</h1>
     <h2>Loged as :{userName}  </h2>  <br />
     <h2>User Email:{userEmail}</h2>
      
    </div>
  )
}

