import React, { useState } from 'react'
import Button from '@mui/material/Button'
import LoadingAnimation from '../../shared/Components/LoadingAnimation'
const ButtonStyled = ({bgColor,label,btnHeight,btnWidth,buttonIcon,shadow,setValue}) => {
  const [isButtonClicked,setButtonClicked]= useState(false)

  const handleButtonClicked = ()=>{
     setButtonClicked(prev=>!prev)

     if(isButtonClicked) bgColor='red'
    //  setValue()
  }
  const handleClick=()=>{
    setValue()
  }
  return (
    <Button 
    onClick={handleClick}
    variant="contained"
   
    sx={{
      display:'flex',
      gap:2,
      overflow:'hidden',
      borderRadius:0,
      fontFamily:'sans-serif',
      width:`${btnWidth?btnWidth:'150px'}`,
      height:`${btnHeight?btnHeight:'50px'}`,
      backgroundColor:`${bgColor?bgColor:'white'}`,
      color:`${bgColor==='white'?'#121212':'white'}`,
      boxShadow:`${shadow==='no'?'none':''}`,
      '&:hover':{
        color:`${bgColor!=='white'?'white':'#121212'}`,
      }
    }}
    >
     {buttonIcon?buttonIcon:null} 
    {label}
    </Button>
  )
}
export default ButtonStyled