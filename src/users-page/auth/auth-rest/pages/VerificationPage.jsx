import { Box, CardMedia, Divider, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../../../components/InputField'
import companyLogoImage from '../../../../assets/image/logo.png'
import OtpInput from 'react-otp-input';
import { handleResponsiveness } from '../../styles/loginStyle';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux';
import ActionButton from '../../../components/ActionButton';
const VerificationPage = ({navigateTo,onSignUp}) => { 
   const navigate=useNavigate()
   const {isUserVerified}= useSelector(state=>state.auth)
   const [isBtnDisabled,setIsBtnDisabled]= useState(true)
   const [verify,setVerify] = useState('')
 
    const handleConfirmation = async()=>{
    try {
       const response= await window.confirmationResult.confirm(verify);
         if(response?.user){
            navigate(`/${navigateTo}`)
         }  
    } catch (error) {
      toast.error(error.response.message)
    }
    
  }
 

useEffect(()=>{
    if(verify.length===6){
        setIsBtnDisabled(false)
      }else setIsBtnDisabled(true)
   },[verify])

  

  return (
   <Box sx={style.verificationPasswordContainer}>
       <Box sx={style.companyLogoContainer}>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
      <Box sx={style.cardContainer}> 
      <Paper sx={style.verificationPasswordCard}>
         <Typography sx={{color:'#1A6CE8',fontWeight:'bold'}} variant='h6'>Rest Password</Typography>
         <Divider sx={{width:'100%'}}/>
         <OtpInput
          numInputs={6}
          value={verify}
          onChange={setVerify}
          containerStyle={{display:'flex',gap:'20px'}}
          inputStyle={{width:'30px',height:'30px'}}
         />
          <Box onClick={handleConfirmation} sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <ActionButton
             btnLabel={'Verify'}
             btnWidth={'70%'}
             isBtnDisabled={isBtnDisabled}
            />
           </Box>
        <Typography  sx={{width:'70%',display:'flex',justifyContent:'flex-end',color:'red',cursor:'pointer'}}>
          Resend code
        </Typography>
      </Paper>
      </Box>
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
   
    gap:'20px'
  },
 verificationPasswordCard:{
    width:handleResponsiveness('95%','400px'),
    height:'250px',
    borderRadius:'5px',
    border:'solid 1px rgba(0,0,0,0.4)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'25px',
    marginTop:'30px'
  },

  companyLogoContainer:{
   width:'120px',
   height:'70px',
   marginLeft:'40px',
   marginTop:'40px'
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
  },
  cardContainer:{
    width:'100%',
    height:'90%',
    display:'flex',
    justifyContent:'center'
  }
}

export default VerificationPage