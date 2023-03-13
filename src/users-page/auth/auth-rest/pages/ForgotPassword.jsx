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

const ForgotPassword = () => {

  const [phoneNumber,setPhoneNumber] = useState('')
  const navigate=useNavigate()
  const onCapTchaVerify=()=>{
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container', {
      'size': 'invisible',
        'callback': (response) => {
          onSignUp()
     },
     'expired-callback': () => {
  
  }
}, auth);
    }
  }

  const onSignUp=()=>{
    onCapTchaVerify()
   const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
  }
  return (
    <Box sx={style.forgetPasswordContainer}>
       <Box sx={style.companyLogoContainer}>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
       <Typography sx={{color:'#1A6CE8',fontWeight:'bold'}} variant='h6'>Rest Password</Typography>
      <Paper sx={style.forgetPasswordCard}>
           <InputField
             inputLabel={'Enter your phone number'}
             type='text'
           />
             <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
               <IconButton onClick={()=>navigate('/verify')} sx={style.btnContainer}>
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