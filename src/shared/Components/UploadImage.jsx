import React, { useEffect } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
const UploadImage = ({title,setImage,inputValue}) => {
  console.log(inputValue);
    const [imageValue,setImageValue]= useState('')

    useEffect(()=>{},[title,inputValue])

  return (
    <Box sx={style.imageUploaderContainer}>
    <Button 
      variant="contained"  
      component="label" 
     
      sx={{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        zIndex:1000,
        backgroundImage:`url(${`${inputValue}`})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        color:'#1A6CE8',
        '&:hover':{
          backgroundColor:'white'
        }
        }}>
      <AddPhotoAlternateIcon sx={style.imageUploadIcon}/>
        <input 
        
          title={title} 
          onChange={setImage} 
          hidden accept="image/png" 
          multiple type="file" />
      </Button>
    </Box>
  )
}

const style={
    imageUploaderContainer:{
        width:'60%',
        height:'300px',
        border:'dashed 1px black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    imageUploadIcon:{
        width:'20%',
        height:'20%'
    }
}
export default UploadImage