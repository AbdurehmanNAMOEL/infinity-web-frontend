import { Box, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProgressBarImage from '../../assets/image/progressBar.svg'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
function Card({cardHeader,cardBody}) {
    const {isLightMode} = useSelector(state=>state.auth)
  return (
   <Paper 
     sx={{
      width:handleResponsiveness('90%','300px'),
      height:'100%',
      border:`solid 1px ${isLightMode?'rgba(0,0,0,0.4)':'#acacac69'}`,
      borderRadius:'15px',
      backgroundColor:`${isLightMode?'#D9D9D9':'#1E1E1E'}`}}
      >
      <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        color:`${isLightMode?'#1e1e1e':'white'}`
        }}>  
       <Typography sx={{marginLeft:'16px'}}>{cardHeader}</Typography>
      <CardMedia sx={{width:'50px',height:'50px',margin:'10px'}} image={ProgressBarImage}/>  
      </Box>
       <Divider sx={{width:'100%',backgroundColor:`${isLightMode?'rgba(0,0,0,0.4)':'rgba(255,255,255,0.4)'}`}}/>  
      <Box sx={{
       color:`${isLightMode?'#1e1e1e':'white'}`,
       width:'100%',
       height:'150px',
       display:'flex',
       justifyContent:'center',
       alignItems:'center'}}>
        <Typography variant='h4'>{cardBody}</Typography> 
      </Box>
     </Paper>
  )
}

export default Card