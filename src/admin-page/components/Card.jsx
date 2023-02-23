import { Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Card() {
    const {isLightMode} = useSelector(state=>state.auth)
  return (
   <Paper 
     sx={{
      width:'300px',
      height:'100%',
      backgroundColor:`${isLightMode?'#D9D9D9':'#01051ab2'}`}}
     
      >

     </Paper>
  )
}

export default Card