import { Box, Card, Divider, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import { motion } from 'framer-motion';
const StyledCard = ({title,body, icon,animationDuration}) => {
  return (
    <motion.div 
     initial={{scale:0,opacity:0}}
     whileInView={{scale:1,opacity:1}}
     transition={{ duration:animationDuration+1}} 
      style={{width:'100%',height:'230px',border:'1px solid rgba(0,0,0,0.3)'}}>
      <Box sx={
        { width:'100%',
          height:'50px',
          display:'flex',
          gap:'20px',justifyContent:'center',alignItems:'center'}}>
        <IconButton>
          {icon}
        </IconButton>
        <Typography sx={{width:'80%'}}>{title}</Typography>
      </Box>
      <Divider/>
      <Box>
        <Typography sx={{padding:'15px'}}>{body}</Typography>
      </Box>
    </motion.div>
  )
}

export default StyledCard