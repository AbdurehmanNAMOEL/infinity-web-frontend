import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, IconButton, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const DropDown = ({title,data}) => {
  console.log(data[0].map(data=>data.id));
  const [isExpanded,setIsExpanded]= useState(false)
  const [height,setHeight]= useState('50px')
  const {modeColor,isLightMode}= useSelector(state=>state.auth)

  const handleExpand=()=>{
    setIsExpanded(prev=>!prev)
  }
  useEffect(()=>{
    if(isExpanded){
        setHeight('auto')
    }else setHeight('40px')
  },[height,isExpanded])

  return (
    <Paper sx={[
        style.DropDownComponentContainer,
       {height:height},{backgroundColor:modeColor},
       {border:isLightMode?'solid 1px rgba(0,0,0,0.2)':'solid 1px #ACACAC'}]}>
     <Paper sx={{borderRadius:'0px',height:'40px',display:'flex',boxShadow:'none',justifyContent:'space-between',alignItems:'center'}}>
        <Typography sx={{marginLeft:'20px'}}>{'Educational'}</Typography>
        {isExpanded?
        <IconButton onClick={handleExpand}><ArrowForwardIosIcon sx={{width:'14px',height:'14px'}}/></IconButton>:
        <IconButton onClick={handleExpand}><ExpandMoreIcon/></IconButton>}
     </Paper>
     <Divider/>
     <Box sx={{width:'100%'}}>
    
      {data[0].map((data,index)=>
      <Box sx={{width:'100%',height:'60%',display:'flex',flexDirection:'column'}}>
      <Typography 
         sx={{padding:'15px',color:isLightMode?'#1e1e1e':'white'}}>{`Q${index+1}.  ${data.query}`}</Typography>
      <Typography sx={{padding:'2px',display:'flex',marginLeft:'38px',color:isLightMode?'#1e1e1e':'white'}}>
        <Typography sx={{color:'#1977FC',marginRight:'10px'}}>Answer</Typography>{` :  ${data.answer}`}</Typography>
      </Box>
      
      )}
      
     </Box>
     <Box sx={{width:'100%', height:'40px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <Typography sx={{marginLeft:'20px',fontWeight:'bolder',color:'red',cursor:"pointer"}}>Reject</Typography>
      <Typography sx={{marginRight:'20px',fontWeight:'bolder',color:'green',cursor:"pointer"}}>Approve</Typography>
     </Box>
    </Paper>
  )
}

const style = {
    DropDownComponentContainer:{
          display:'flex',
          flexDirection:'column',
          transition:'all 0.7s',
          width:'100%',
          overflowY:'hidden'
          
         
    }
}
export default DropDown