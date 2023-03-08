import { Box } from '@mui/material'
import React from 'react'

const TextField = ({title,questionNumber}) => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'8px'}}>
    <Box sx={{fontSize:'20px',gap:'10px',color:'#1e1e1e'}}><span>{`Q${questionNumber?questionNumber:'1'}.  `}</span><label  htmlFor={title}>{title}</label></Box>
     <textarea placeholder='Enter your answer' style={{marginTop:'8px',marginLeft:'20px',textIndent:'10px',height:'40px'}} id={title} width='50%' height='30px'/>
   </Box>
  )
}

export default TextField