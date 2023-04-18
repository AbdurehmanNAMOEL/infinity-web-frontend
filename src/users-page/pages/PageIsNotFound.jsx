import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import pageNotFoundImage from '../../assets/image/pagenotfound.svg'
const PageIsNotFound = () => {
  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <CardMedia 
        image={pageNotFoundImage} 
        sx={{width:{xs:'80%',md:'40%'},height:{xs:'40%',md:'60%'}}}
      />
      <Typography sx={{marginTop:'20px',fontSize:{xs:'24px',md:'32px'}}}>Page not found</Typography>
    </Box>
  )
}

export default PageIsNotFound