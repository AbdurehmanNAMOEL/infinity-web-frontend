import { Box, CardMedia, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputField from '../../../components/InputField'
import companyLogoImage from '../../../../assets/image/logo.png'
import OtpInput from 'react-otp-input';
import { handleResponsiveness } from '../../styles/loginStyle';
import { useNavigate } from 'react-router-dom';
const VerificationPage = ({verify,setVerify,handleConfirmation}) => { 
  const navigate= useNavigate()

  return (
   <Box sx={style.verificationPasswordContainer}>
       <Box sx={style.companyLogoContainer}>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
       <Typography sx={{color:'#1A6CE8',fontWeight:'bold'}} variant='h6'>Rest Password</Typography>
      <Paper sx={style.verificationPasswordCard}>
         <OtpInput
          numInputs={6}
          value={verify}
          onChange={setVerify}
          containerStyle={{display:'flex',gap:'20px'}}
          inputStyle={{width:'30px',height:'30px'}}
         />
          <Box onClick={handleConfirmation} sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <IconButton sx={style.btnContainer}><p>Verify</p></IconButton>
           </Box>
      </Paper>
    </Box>
  )
}


const style={
  verificationPasswordContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    gap:'20px'
  },
 verificationPasswordCard:{
    width:handleResponsiveness('95%','400px'),
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

export default VerificationPage