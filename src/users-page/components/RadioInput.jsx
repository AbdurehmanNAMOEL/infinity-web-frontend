import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const RadioInput = ({id,questionTitle}) => {
    const [change,setChange]=useState('')
    const [isChecked,setIsChecked]= useState(false)
    const handleChange=(e)=>{
        setIsChecked(prev=>!prev)
      if(!isChecked){
        setChange(e.target.value)
      }else setChange('')
   
    }
    useEffect(()=>{},[change,isChecked])
  return (
    <button 
       onClick={handleChange} 
       value={questionTitle} 
       style={{width:'350px', height:'40px',backgroundColor:'white',display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'8px',borderRadius:'15px',
      marginBottom:'16px',
      cursor:'pointer',
      border:`${isChecked?'solid 1px #1A6CE8':'solid 1px rgba(0,0,0,0.2)'}`}}>
        <input 
         checked={change} 
         value={change}  
         type='radio' 
         id={id}
         style={{width:'15px',height:'15px',marginLeft:'16px'}}/>
        <label 
          style={{fontSize:'16px'}} 
          htmlFor={id}>{questionTitle}</label>
    </button>
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