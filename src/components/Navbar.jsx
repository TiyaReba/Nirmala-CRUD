import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Button  color='success'><Link to = '/'style={{color:'white',textDecoration:'none'}}>View</Link></Button>
                <Button  color='success'><Link to ='/add' style={{color:'white',textDecoration:'none'}}>AddStudent</Link></Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar