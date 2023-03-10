import { Box, CardMedia } from '@mui/material'
import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import logo from '../../assets/image/logo.png'
const LoadingPage = () => {

    return (
    <>
    <Box sx={style.loadingPageContainer}>
      <CardMedia image={logo} sx={{width:'150px',height:'160px'}}/>
      <Box sx={{
        marginTop:'10px',
        width:'100px',
        height:'50px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        }}><LoadingAnimation/></Box>    
    </Box>
    </>
  )
}

const style= {
 loadingPageContainer:{
    width:'100%',
    height:'100vh',
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    zIndex:4000,
    flexDirection:'column'
  }
}

export default LoadingPage