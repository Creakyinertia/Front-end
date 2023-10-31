import { Button, Form, TextInput } from '@carbon/react'
import React from 'react'
import { useState } from 'react'

const AddNewUser = () => {
    const [value,setvalue]=useState({})
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [gender, setgender] = useState("");
    const [password, setpassword] = useState("");
    const handleSubmit = () => {
        setvalue({ fname: fname, lname: lname,email: email,gender:gender,password:password })
      };
      console.log(value)
  return (
    <>
    <h1>ADD NEW USER</h1>
    <Form id="bod" onSubmit={()=>handleSubmit()}>
        <TextInput labelText="FirstName" id="fname" onChange={(e)=>setfname(e.target.value)}/>
        <TextInput labelText="LastName" id="lname" onChange={(e)=>setlname(e.target.value)}/>
        <TextInput labelText="email" id="email" onChange={(e)=>setemail(e.target.value)}/>
        <TextInput labelText="gender" id="gender" onChange={(e)=>setgender(e.target.value)}/>
        <TextInput labelText="password" id="password" onChange={(e)=>setpassword(e.target.value)}/>
        <Button type='submit' id="butadd">Submit</Button>
    </Form>
    </>
  )
}

export default AddNewUser