import { Box, Card, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
const MemberCard = ({facebookUrl,linkedInUrl,telegramUrl,name,imageUrl,position}) => {
    const {isLightMode}= useSelector(state=>state.auth)
    const navigate= useNavigate()
    const handleNavigation=(navLink)=>{
        navigate(`/${navLink}`)
    }
  return (
    <Card sx={[cardStyle.cardMainContainer,
         {backgroundColor:`${isLightMode?'white':'#333333'}`,
         border:`solid 1px ${isLightMode?'rgba(0,0,0,0.2)':'#ACACAC'}`}]}>
        <CardMedia image={imageUrl} sx={{width:'100%',height:'220px',backgroundSize:'cover'}}/>
        <Typography sx={[cardStyle.memberName,{color:`${isLightMode?'#1e1e1e':'white'}`}]}>
         {name}
        </Typography>
        <Typography sx={[cardStyle.memberPosition]}>{position}</Typography>
        <Divider sx={{marginTop:'10px',backgroundColor:`${isLightMode?'rgba(0,0,0,0.2)':'#ACACAC'}`}}/>
        <Box sx={{width:'100%',height:'50px',display:'flex',gap:'10px',alignItems:'center' ,
         justifyContent:'center'}}>
             <IconButton onClick={()=>handleNavigation(facebookUrl)}>
                <FacebookOutlinedIcon sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}/>
             </IconButton>

              <IconButton onClick={()=>handleNavigation(telegramUrl)}>
                <TelegramIcon sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}/>
             </IconButton>

              <IconButton onClick={()=>handleNavigation(linkedInUrl)}>
                <LinkedInIcon sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}/>
             </IconButton>
        </Box>
    </Card>
  )
}

const cardStyle={
    cardMainContainer:{
       width:'250px',
       height:'350px',
       borderRadius:'10px',
       display:'flex',
       flexDirection:'column'  
    },
    memberName:{
       textAlign:'center',
       marginTop:'10px',
       fontWeight:'bold'
    },
   memberPosition:{
       textAlign:'center',
       marginTop:'4px',
       fontWeight:'bold',
       fontSize:'14px',
       color:'#1A6CE8'
    }
}
export default MemberCard