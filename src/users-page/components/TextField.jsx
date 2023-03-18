import { Box } from '@mui/material'
import React from 'react'
import { handleResponsiveness } from '../auth/styles/loginStyle'

const TextField = ({title,questionNumber,setValue,id,inputValue}) => {
  return (
    <Box sx={{width:'80%',display:'flex',flexDirection:'column',gap:'8px'}}>
    <Box sx={{fontSize:handleResponsiveness('14px','18px'),width:'100%',gap:'10px',color:'rgba(0,0,0,0.7)'}}>
      <span>{`${questionNumber?questionNumber:'1'}.  `}</span>
      <label style={{width:'100%'}} htmlFor={title}>{title}</label></Box>
     <textarea 
      title={id}
      onChange={setValue} 
      type={'text'} 
      value={inputValue}
      style={{marginTop:'8px',marginLeft:'35px',textIndent:'10px',height:'80px'}}  
      width='100%' height='30px'
      />
   </Box>
  )
}

export default TextField