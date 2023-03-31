import { Button, Typography } from '@mui/material'
import React from 'react'

const ActionButton = ({btnWidth,btnLabel,onClick,isBtnDisabled}) => {
  return (
    <Button 
       disabled={isBtnDisabled}
      onClick={onClick}
      sx={[style.buttonStyle,{width:btnWidth},{ backgroundColor:isBtnDisabled?'#BCBDBE':'#1A6CE8',}]}>
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
    '&:hover':{
        backgroundColor:`#1A6CE8`,
    }
  }
 }
export default ActionButton