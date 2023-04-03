import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import './style/radioButtonStyle.css'
const RadioInput = ({id,checkedValue,optionValue,data,setValue,answer}) => {
    const [change,setChange]=useState('')
     console.log(data,'hello');

    useEffect(()=>{},[id,checkedValue])
  return (
    <>
    <button 
      className='radioButtonContainer'
      onClick={setValue}  
      id={id}
      title={data}
      value={optionValue}
      style={{width:handleResponsiveness('auto','350px'), height:'40px',backgroundColor:'white',
       display:'flex',justifyContent:'flex-start',alignItems:'center',
       gap:'8px',marginBottom:'16px',cursor:'pointer',

      }
      }>
        <input 
         checked={checkedValue===id}
         value={optionValue} 
         onChange={setValue} 
         type='radio' 
         title={id}
         id={optionValue}
         style={{width:'15px',height:'15px',marginLeft:'16px'}}/>
        <label 
          style={{fontSize:'12px'}} 
          htmlFor={id}>{optionValue}</label>
    </button>
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