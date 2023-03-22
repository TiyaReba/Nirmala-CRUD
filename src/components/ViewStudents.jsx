import { TableCell, Table,TableContainer, TableHead, TableRow, Typography, TableBody, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddStudents from './AddStudents'

const ViewStudents = () => {
    var [update,setUpdate]=useState(false)   
    var [singleValue,setSingleValue]=useState([]) 
    var [students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("  http://localhost:3005/students")
        .then(response=>{
            setStudents(students=response.data)
            console.log(students)
        })
        .catch(err=>console.log(err))
    },[])

    const updateValue = (value)=>{
        setSingleValue(value);
        setUpdate(true);
       }
       const deleteValues = (id)=>{
        console.log("delete clicked"+ id)
        axios.delete("http://localhost:3005/students/"+id)
        .then((response)=>{
            console.log(response.idvalue);
            alert("sucessfully deleted");
            window.location.reload(false);
        })
       }   
    var  finalJSX =   <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                        <Button variant='contained'
                            color ='success'
                            onClick={()=>updateValue(value)}>
                            Update
                            </Button>
                    </TableCell>
                   <TableCell>
                        <Button 
                            variant='contained' 
                            color ='error' 
                            onClick={()=>deleteValues(value.id)}>
                        Delete</Button>
                    </TableCell>
                    
                </TableRow>
                })}
               
            </TableBody>
     
    </Table>
</TableContainer>

   if (update)
   finalJSX = <AddStudents data={singleValue} method="put"/>
return (
finalJSX
  )
}

export default ViewStudents