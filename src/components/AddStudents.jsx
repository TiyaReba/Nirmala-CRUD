import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddStudents = (props) => {
    var [inputs,setInputs] = useState(props.data)
    console.log("add page props"+props.data)


    const inputHandler = (e)=>{
        // console.log(data.id)
        const {name,value} = e.target
        setInputs((previousState)=>({
            ...previousState,[name]:value
        }))
    }

    const readValues = ()=>{
        console.log("clicked")
        console.log(inputs);
        if (props.method === "post")
            axios.post("http://localhost:3005/students",inputs)
            .then((response)=>{
                console.log("post data"+response.data)
                alert("success")
            })
            .catch((err)=>{
                console.log(err)
            })
        
        if(props.method === "put")
        axios.put("http://localhost:3005/students/"+inputs.id,inputs)
        .then((response)=>{
            console.log("put data"+response.data)
            alert("success")
            window.location.reload(false);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <TextField label='id' 
        value={inputs.id} name='id' onChange={inputHandler} variant='outlined' />
        <br/>
        <br/>
        <br/>
        <TextField label='Name'
        value={inputs.name} name='name' onChange={inputHandler} variant='outlined' />
        <br/>
        <br/>
        <br/>
        <TextField label='Grade'
        value={inputs.grade} name='grade' onChange={inputHandler} variant='outlined' />
        <br/>
        <br/>
        <br/>
        <Button  variant='contained'  onClick={readValues} color='success'>Submit</Button>
    </div>
  )
}

export default AddStudents