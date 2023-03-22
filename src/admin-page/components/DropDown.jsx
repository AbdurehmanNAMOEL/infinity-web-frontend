import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const DropDown = () => {
  const [isExpanded,setIsExpanded]= useState(false)
  const [height,setHeight]= useState('50px')
  const {modeColor,isLightMode}= useSelector(state=>state.auth)

  const handleExpand=()=>{
    setIsExpanded(prev=>!prev)
  }
  useEffect(()=>{
    if(isExpanded){
        setHeight('300px')
    }else setHeight('50px')
  },[height,isExpanded])

  return (
    <Box sx={[style.DropDownComponentContainer,{height:height},{backgroundColor:modeColor}]}>
     <Paper sx={{display:'flex'}}>
        <Typography>Hello</Typography>
        {isExpanded?
        <IconButton onClick={handleExpand}><ArrowForwardIosIcon/></IconButton>:
        <IconButton onClick={handleExpand}><ExpandMoreIcon/></IconButton>}
     </Paper>
    </Box>
  )
}

const style = {
    DropDownComponentContainer:{
          display:'flex',
          flexDirection:'column',
          transition:'all 0.7s',
          width:'120px',
         
    }
}
export default DropDown