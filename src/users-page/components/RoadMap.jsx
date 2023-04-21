import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
import { roadMapData } from '../utils/data'

const CardWithAnimation=({year,userCount,work,animationDuration})=>{
  const {modeColor,isLightMode} = useSelector(state=>state.auth)
  const MotionPaper=motion(Paper)
  
  return (
    <MotionPaper
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:animationDuration}} 
      animate={{ x:[100,0] }}
      sx={{
        backgroundColor:isLightMode?'white':'#333',
        width:'300px',
        height:'300px',
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        justifyContent:'center',
        alignItems:'center'
      }}>
       <Typography sx={{fontSize:'38px',color:"#1A6CE8",fontWeight:'bold'}}>{year}</Typography>
       <Typography sx={{fontSize:'24px',color:isLightMode?'#333':'white',fontWeight:'bold'}}>
        {userCount}
        </Typography>
       <Typography sx={{fontSize:'16px',color:isLightMode?'#333':'white',fontWeight:'bold'}}>
        {work}
       </Typography>
    </MotionPaper>

  )
}
const RoadMap = () => {

  return (
    <Box sx={{height:'auto',display:'flex',alignItems:'center',flexDirection:'column',gap:'100px',justifyContent:'center'}}>
      {roadMapData?.map((data,index)=>
       <CardWithAnimation
         key={index}
         year={data.year}
         userCount={data.userCount}
         work={data.work}
         animationDuration={data.animationDuration}
       />  
      )}
    </Box>
  )
}

export default RoadMap