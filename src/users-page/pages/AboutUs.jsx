import { Box, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'

const AboutUs = () => {
  return (
       <Box sx={{width:'100%',height:'auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <NavBar/>
      <Box sx={style.aboutUsContainer}>
        <Typography variant='h3' sx={{color:'white',fontWeight:'bold'}}>
          About US 
        </Typography>
      </Box>
    </Box>
  )
}

const style ={
  aboutUsContainer: {
    width:'100%',
    height:'40vh',
    marginTop:'70px',
    backgroundColor:'#1A6CE8',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
}

export default AboutUs