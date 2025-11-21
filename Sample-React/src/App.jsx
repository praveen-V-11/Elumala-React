import React, { createContext, useContext } from 'react'
import Login from './components/Login'
import EventHandlers from './components/EventHandlers'
import ConditionalRendering from './components/ConditionalRendering'
import Darkmode from './components/Darkmode'
import ListRendring from './components/ListRendring'
import Forms from './components/forms'
import Registraionform from './components/Registraionform'
import Form2 from './components/form2'
import UseEffectex from './components/useEffectex'
import Userefhook from './components/Userefhook'
import Userefex2 from './components/Userefex2'
import First from './Usecontextcomponent/first'


export let pass = createContext()

export default function App() {


  let chocos = 'Give it to grandchild'

  return ( 
    <pass.Provider value={chocos} >
    <div className='Main-div' >
      <h1> grand parent component</h1>
      <h2>{chocos}</h2>
      <First />
      {/* <h1>Homepage</h1> */}
      {/* <Login/> */}
      {/* <EventHandlers/> */}
      {/* <ConditionalRendering/> */}
      {/* <Darkmode/> */}
      {/* <ListRendring/> */}
      {/* <Forms/> */}
      {/* <Registraionform/> */}
      {/* <Form2/> */}
      {/* <UseEffectex/> */}
      {/* <UseeffectApi/> */}
      {/* <Userefhook/> */}
      {/* <Userefex2/> */}
    </div>
    </pass.Provider>
      
  )
}
