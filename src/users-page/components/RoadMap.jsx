import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
const RoadMap = () => {
  const {modeColor,isLightMode} = useSelector(state=>state.auth)
  const MotionBox=motion(Paper)
  return (
    <Box sx={{height:'auto',display:'flex',alignItems:'center',flexDirection:'column',gap:'100px',justifyContent:'center'}}>
      <MotionBox 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration:2}} 
      animate={{ x:[100,0] }}
 
      sx={{backgroundColor:isLightMode?'white':'#333',width:'300px',height:'300px'}}>
       <Typography>Hello</Typography>
      </MotionBox>

      <MotionBox 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration:2}} 
      sx={{backgroundColor:isLightMode?'white':'#333',width:'300px',height:'300px'}}>
       <Typography>Hello</Typography>
      </MotionBox>

       <MotionBox 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration:2}} 
      sx={{backgroundColor:isLightMode?'white':'#333',width:'300px',height:'300px'}}>
       <Typography>Hello</Typography>
      </MotionBox>

       <MotionBox 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration:2}} 
      sx={{backgroundColor:isLightMode?'white':'#333',width:'300px',height:'300px'}}>
       <Typography>Hello</Typography>
      </MotionBox>

        <MotionBox 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration:2}} 
      sx={{backgroundColor:isLightMode?'white':'#333',width:'300px',height:'300px'}}>
       <Typography>Hello</Typography>
      </MotionBox>
    </Box>
  )
}

export default RoadMap