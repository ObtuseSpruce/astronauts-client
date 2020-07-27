import React from 'react'
import {Typography} from '@material-ui/core'

function Copyright() {
  return (
    <Typography variant="body2" align="center">
    {'Copyright © '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
  );
}

const Footer = () =>{
  return (
    <footer>
      <Typography variant="body1"> <Copyright />Made by Will Llapitan </Typography>
    </footer>
  )
}

export default Footer