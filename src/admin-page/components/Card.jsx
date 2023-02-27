import { Divider, Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Card({cardHeader,cardBody}) {
    const {isLightMode} = useSelector(state=>state.auth)
  return (
   <Paper 
     sx={{
      width:'300px',
      height:'100%',
      border:'solid 1px #acacac69',
      borderRadius:'15px',
      backgroundColor:`${isLightMode?'#D9D9D9':'#1E1E1E'}`}}
      >
      {cardHeader}
       <Divider sx={{width:'100%',backgroundColor:'#D9D9D9'}}/>  
      {cardBody}
     </Paper>
  )
}

export default Card