import { CardMedia, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../../../config/firebase_config';
import InputField from '../../../components/InputField';
import SendIcon from '@mui/icons-material/Send';
import companyLogoImage from '../../../../assets/image/logo.png'
import { handleResponsiveness } from '../../styles/loginStyle';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
const ForgotPassword = ({phoneNumber,setPhoneNumber,onSignUp}) => {

  
  const navigate=useNavigate()

  return (
    <Box sx={style.forgetPasswordContainer}>
     
       <Box sx={style.companyLogoContainer}>
         <div id='recaptcha-container'></div>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
       <Typography sx={{color:'#1A6CE8',fontWeight:'bold'}} variant='h6'>Rest Password</Typography>
      <Paper sx={style.forgetPasswordCard}>
           <input
             placeholder={'Enter your phone number'}
             type='text'
             onChange={(e)=>setPhoneNumber(e.target.value)}
             value={phoneNumber}
           />
             <Box onClick={onSignUp} sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
               <IconButton sx={style.btnContainer}>
                  <p>Request OTP</p>
               </IconButton>
           </Box>
      </Paper>
    </Box>
  )
}

const style={
  forgetPasswordContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    gap:'20px'
  },
  forgetPasswordCard:{
    width:handleResponsiveness('90%','400px'),
    height:'200px',
    borderRadius:'5px',
    border:'solid 1px rgba(0,0,0,0.4)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'50px'
  },

  companyLogoContainer:{
   width:'120px',
   height:'60px'
  },
  companyLogoImage:{
    width:'100%',
    height:'100%'
  },
  btnContainer:{
    width:'76%',
    height:'40px',
    borderRadius:'0px',
    backgroundColor:'#1A6CE8',
     '&:hover':{
        backgroundColor:'#1A6CE8'           
      },

    fontSize:'16px',
    color:'white',
    display:'flex',
    gap:'10px',
    cursor:'pointer',
    marginLeft:'-4%'   
    
  }
}
export default ForgotPassword