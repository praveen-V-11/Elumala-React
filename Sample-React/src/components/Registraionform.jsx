import React, { useState } from 'react'

export default function Registraionform() {

    let [formdata,setformdata]=useState({
        name:"",
        email:'',
        password: "",
        ischecked: false
    })

    function Handleform(e){
        let {name , value , type , checked } = e.target

        setformdata(()=>({
            ...formdata,
            [name]: type === 'checkbox' ? (checked) : (value)
        }))  
    }

    function Submitform(e) {
        e.preventDefault()
        if(!formdata.name ||  !formdata.email || !formdata.password || !formdata.ischecked) {
            alert('plese fill the inputs')
        }
        alert('submited Sueccfully')
        console.log(formdata);
    }

    
    console.log(formdata.name);
    console.log(formdata.email);
    console.log(formdata.password);
    console.log(formdata.ischecked);
    

  return (
    <div>
      <form action="" onSubmit={Submitform} >
        <h1>Registration Form</h1>
        <label htmlFor="">Name</label>
        <input type="text" name='name' onChange={Handleform} value={formdata.name}  />
        <label htmlFor=""  >email</label>
        <input type="email" name='email' onChange={Handleform} value={formdata.email}/>
        <label htmlFor="" >password</label>
        <input type="password" name='password' onChange={Handleform} value={formdata.password} />
        <label htmlFor="">chechbox</label>
        <input type="checkbox" name='ischecked' onChange={Handleform} checked={formdata.ischecked} />
        <button>Submit</button>
      </form>

    </div>
  )
}

