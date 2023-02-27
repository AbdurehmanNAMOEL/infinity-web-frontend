import { Card, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import googlePlayImage from '../../assets/image/google.png'
import LogoImage from '../../assets/image/logo.jpg'

const Footer = () => {

  const handleCopyToClipBoard=(e)=>{
       e.stopPropagation()
       e.preventDefault()
       console.log(e.target)
  }

  return (
    <Box sx={style.footerStyle}>
       <Box sx={style.footerTopContainer}>
           <Box sx={
            {
             width:handleResponsiveness('80%','250px'),
              height:handleResponsiveness('auto','60%'),
              display:'flex',
              justifyContent:handleResponsiveness('flex-Start','center'),
              marginTop:handleResponsiveness('20px','0')
              }
              }>
              <Card sx={{width:'55%',height:'80px'}}>
                <CardMedia image={LogoImage} sx={{width:'100%',height:'100%'}}/>
              </Card>
           </Box>

             <Box sx={
            {
             width:handleResponsiveness('80%','250px'),
              height:handleResponsiveness('auto','80%'),
              }
              }>
               <Typography sx={{marginBottom:'16px',fontWeight:'bold'}}>Contact Us</Typography>
               <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:'16px'}}>
                  <Box onClick={(e)=>handleCopyToClipBoard(e)} sx={{display:'flex',gap:'10px',cursor:'pointer'}}>
                    <PhoneForwardedIcon sx={{color:'#1A6CE8'}}/>
                    <span style={{fontSize:'14px'}}>+2510936970345</span>
                  </Box>
                  <Box sx={{display:'flex',gap:'10px',cursor:'pointer'}}>
                    <MailIcon sx={{color:'#1A6CE8'}}/>
                    <span style={{fontSize:'14px'}}>asaeed526@gmail.com</span>
                  </Box>
                  <Box sx={{display:'flex',gap:'10px',cursor:'pointer'}}>
                    <LocationOnIcon sx={{color:'#1A6CE8'}}/>
                    <span style={{fontSize:'14px'}}>Addis Ababa</span>
                  </Box>
               </Box>
           </Box>

             <Box sx={
            {
              width:handleResponsiveness('80%','250px'),
              height:handleResponsiveness('auto','80%'),
              }
              }>
             <Typography sx={{marginBottom:'16px',fontWeight:'bold'}}>Follow Us</Typography>
              {/* <span>Feel free to contact</span> */}
               <Box sx={{width:'100%',display:'flex',flexDirection:'row',gap:'16px'}}>
                  <FacebookOutlinedIcon sx={{color:'#1A6CE8'}}/>
                  <TelegramIcon sx={{color:'#1A6CE8'}}/>
                  <LinkedInIcon sx={{color:'#1A6CE8'}}/>
                  <WhatsAppIcon sx={{color:'#1A6CE8'}}/>
               </Box>
           </Box>
           <Box sx={{width:handleResponsiveness('80%','250px'),height:handleResponsiveness('auto','80%')}}>
            <Typography sx={{marginBottom:'16px',fontWeight:'bold'}}>Download Our app</Typography>
            <Box sx={{width:'100%',display:'flex',flexDirection:handleResponsiveness('column','row'),gap:'16px'}}>
              <Card sx={
                {
                  width:'150px',
                  height:'40px',
                  boxShadow:'none',
                  cursor:'pointer',
                  backgroundColor:'#DFDFDF'
                  }
                }>
                <CardMedia image={googlePlayImage} sx={{width:'100%',height:'90%'}}/>
              </Card>
            </Box>
           </Box>
       </Box>
       <Box sx={style.footerBottomContainer}>
          <Typography 
             sx={{
              fontSize:handleResponsiveness('14px','28px'),
              width:handleResponsiveness('80%','50%')
             ,marginLeft:handleResponsiveness('20px','0px')}}>© 2023 -  Infinity. All Rights Reserved</Typography>
          <Box sx={
            {   width:handleResponsiveness('80%','20%'),
               marginLeft:handleResponsiveness('20px','0px'),
               display:'flex',gap:'30px'
            }}>
            <Typography 
              sx={{fontSize:handleResponsiveness('12px','28px')}}>
                Privacy policy
              </Typography>
            <Typography sx={{fontSize:handleResponsiveness('12px','28px')}}>
              Term of services
            </Typography>
          </Box>
       </Box>
    </Box>
  )
}

const style={
    footerStyle:{
      width:'100%',
      height:handleResponsiveness('auto','50vh'),   
      backgroundColor:'#DFDFDF',
      display:'flex',
      flexDirection:'column'
    },
    footerTopContainer:{
       width:'100%',
       height:handleResponsiveness('auto','80%'),
       display:'flex',
       flexDirection:handleResponsiveness('column','row'),
       justifyContent:'center',
       alignItems:'center',
       gap:'60px'
    },
    footerBottomContainer:{
      width:'100%',
      height:handleResponsiveness('auto','20%'),
      display:'flex',
      flexDirection:handleResponsiveness('column','row'),
      justifyContent:'space-around'
    }
}
export default Footer