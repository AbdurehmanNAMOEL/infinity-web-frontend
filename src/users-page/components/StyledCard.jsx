import { Box, Card, Divider, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
const StyledCard = ({title,body, icon,animationDuration}) => {
  const {modeColor,isLightMode}= useSelector(state=>state.auth)
  return (
    <motion.div
     initial={{scale:0,opacity:0}}
     whileInView={{scale:1,opacity:1}}
     transition={{ duration:animationDuration+1}} 
      style={
        {
          width:'100%',
          height:'230px',
          border:`1px solid ${isLightMode?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.3)'}`,
          backgroundColor:modeColor,
          borderRadius:'10px'
          }}>
      <Box sx={
        { width:'100%',
          height:'50px',
          display:'flex',
          gap:'20px',justifyContent:'center',alignItems:'center'}}>
        <IconButton>
          {icon}
        </IconButton>
        <Typography sx={{width:'80%',color:`${isLightMode?'#1e1e1e':'white'}`}}>{title}</Typography>
      </Box>
      <Divider sx={{backgroundColor:`${isLightMode?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.3)'}`}}/>
      <Box>
        <Typography sx={{padding:'15px',color:`${isLightMode?'#1e1e1e':'white'}`}}>{body}</Typography>
      </Box>
    </motion.div>
  )
}

export default StyledCard