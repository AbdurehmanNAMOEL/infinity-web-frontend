import { Box, Card, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import LogoImage from '../../assets/image/logo.jpg'
import ButtonStyled from '../components/ButtonStyled'
import InputField from '../components/InputField'
import TextArea from '../components/TextArea'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const responsive =(xs,md)=>{
    return {xs:xs,md:md}
}

const ContactUs = () => {
    const navigate = useNavigate()
  return (
   <Box sx={style.contactContainer}>
     <Box sx={style.contactLeftContainer}>
        <Box sx={style.logoContainer}>
            <Card  onClick={()=>navigate('/')} 
              sx={{cursor:'pointer',width:'200px',height:'150px',boxShadow:'none'}}>
                <CardMedia
                   sx={{width:'100%',height:'100%'}}
                   image={LogoImage}
                />
            </Card>
            <Box sx={style.homeBtn}>
              <ButtonStyled 
                label={'Home'}
                bgColor='#0971f1'
                btnWidth={'120px'}
                buttonIcon={<HomeOutlinedIcon/>}
                setValue={()=>navigate('/')}
              />
            </Box>
        </Box>
        <Box sx={style.contactFormContainer}>
            <Paper sx={style.formContainer}>
               <Typography variant='h4' sx={{width:'80%',marginTop:'20px',marginBottom:'-40px'}}>
                   ContactUs
               </Typography>
                <Typography variant='h8' sx={{width:'80%',marginBottom:'-20px'}}>
                   Feel free to contact us any time. We will get back to
                   you as soon as we can
               </Typography>
               <InputField
                label='Name'
                inputLabel={'Name'}
                type='text'
                width='75%'
               />
                <InputField
                label='Email'
                inputLabel={'Email'}
                type='email'
               />
               <Box sx={{width:'76.5%',marginLeft:'-18px'}}>
                <TextArea
                 textAreaWidth={'100%'}
                 textAreaHeight='50px'
                 placeholder={'message'}
                />
                </Box>
                <ButtonStyled
                 label={'Send'}
                 btnWidth='60%'
                 bgColor={'#0971f1'}
                />
            </Paper>
        </Box>
     </Box>
     <Box sx={style.contactRightContainer}>
       <Box onClick={()=>navigate('/')} 
         sx={{width:'100%',alignItems:'center',height:'70px',display:responsive('none','flex')}}
         >
         <ArrowBackIosIcon sx={{marginLeft:'15px',color:'white',fontWeight:'bolder',cursor:'pointer'}}/>
         <ArrowBackIosIcon sx={{marginLeft:'-5px',color:'white',fontWeight:'bolder',cursor:'pointer'}}/>
         <Typography sx={{color:'white',cursor:'pointer'}}>Home</Typography>
       </Box>
       <Paper sx={style.infoContainer}>
          <Box sx={style.infoDirectContactContainer}>
            <Typography variant='h5' sx={{color:'white'}}>Info</Typography>
            <ButtonStyled
             label={'+251936970345'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<LocalPhoneOutlinedIcon/>}
            />
          </Box>
          <Box sx={style.infoSocialMediaContactContainer}>
            <Typography variant='h6' sx={{color:'white'}}>ContactUs Via</Typography>
             <ButtonStyled
             label={'Facebook'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<FacebookRoundedIcon/>}
            />
            <ButtonStyled
             label={'WhatsApp'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<WhatsAppIcon/>}
            />
            <ButtonStyled
             label={'Telegram'}
             bgColor='#333'
             shadow={'no'}
             btnWidth='180px'
             buttonIcon={<TelegramIcon/>}
            />
          </Box>
       </Paper>
     </Box>
   </Box>
  )
}
const style ={
    contactContainer:{
      width:'100%',
      height:'auto',
      display:'flex',
      flexDirection:responsive('column','row'),
      gap:responsive('0','5%'),
      overflowX:'hidden'
    },
    contactLeftContainer:{
      width:responsive('100%','70%'),
      height:responsive('80%','640px'),
      display:'flex',
      flexDirection:'column', 
    },
    contactRightContainer:{
      width:responsive('100%','30%'),
      height:responsive('50%','640px'),
      backgroundColor:'#0971f1',
      display:'flex',
      flexDirection:'column'
    },
    logoContainer:{
        width:'100%',
        height:'70px',
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'40px',
        marginLeft:'20px'
    },
    contactFormContainer:{
        width:'100%',
        height:'580px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    formContainer:{
        width:responsive('95%','80%'),
        height:responsive('400px','500px'),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:responsive('40px','50px'),
        boxShadow:'none',
    },
    infoContainer:{
        width:responsive('100%','400px'),
        height:responsive('500px','400px'),
        backgroundColor:'#333',
        marginLeft:responsive('0','-100px'),
        marginTop:responsive('0','40px'),
        display:'flex',
        flexDirection:'column'
    },
    infoDirectContactContainer:{
      width:responsive('30%','400px'),
      height:responsive('30%','100px'),
      display:'flex',
      flexDirection:'column',
      marginLeft:'40px',
      marginTop:responsive('10px','40px'),
      gap:'10px'

    },
    infoSocialMediaContactContainer:{
        width:responsive('70%','400px'),
        height:responsive('50%','400px'),
        display:'flex',
        flexDirection:'column',
        marginLeft:'40px',
        marginTop:responsive('10px','40px'),
        gap:'10px',
        overFlowX:'scroll'  
    },
    homeBtn:{
      display:responsive('block','none'),
      marginRight:'20px'
    }
}
export default ContactUs