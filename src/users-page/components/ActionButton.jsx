import { Button, Typography } from '@mui/material'
import React from 'react'

const ActionButton = ({btnWidth,btnLabel,onClick}) => {
  return (
    <Button 
      onClick={onClick}
      sx={[style.buttonStyle,{width:btnWidth}]}>
      <Typography>{btnLabel}</Typography>  
    </Button>
  )
}
 const style ={
  buttonStyle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold',
    color:'white',
    height:'40px',
    backgroundColor:'#1A6CE8',
    '&:hover':{
    
      backgroundColor:'#1A6CE8',
    }
  }
 }
export default ActionButton