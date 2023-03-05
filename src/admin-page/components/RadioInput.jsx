import { Box } from '@mui/material'
import React, { useState } from 'react'

const Input=({choiceType,setValue})=>{
    return(
      <>
       {choiceType==='userInput'?
       <input 
          onChange={(e)=>setValue(e.target.value)}
          style={{height:'35px',textIndent:'10px',width:'350px'}} 
          type={'text'} 
          placeholder='enter your answer here'/>:
      choiceType
     }
      </>
    )
}

const RadioInput = ({choiceType,setValue}) => {

 
  return (
    <Box sx={{width:'50%',display:'flex',gap:'10px',alignItems:'center'}}>
     <input type='radio' disabled/>
      <Input setValue={setValue} choiceType={choiceType}/>
    </Box>
  )
}

export default RadioInput