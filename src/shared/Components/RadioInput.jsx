import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import './style/radioButtonStyle.css'
import { useSelector } from 'react-redux'
const RadioInput = ({id,title,checkedValue,handleInputValue,setCheckedValue,optionValue,data,choice,setValue,surveyAnswer,setSurveyAnswer}) => {
    const [change,setChange]=useState('')
    const {isLightMode}= useSelector(state=>state.auth)
 
  
 
 
  return (
    <>
   
    </>
  )
}

const style={
    radioInputContainer:{
      width:'350px',
      height:'40px',
      backgroundColor:'white',
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      gap:'8px',
      borderRadius:'10px',
      marginBottom:'16px',
      cursor:'pointer'
    }
    
}
export default RadioInput