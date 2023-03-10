import { Box } from '@mui/material'
import React from 'react'
import LoadingAnimation from './LoadingAnimation'

const LoadingPage = () => {

    return (
    <>
    <Box sx={style.loadingPageContainer}>
      <LoadingAnimation/>   
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
    zIndex:4000
  }
}

export default LoadingPage