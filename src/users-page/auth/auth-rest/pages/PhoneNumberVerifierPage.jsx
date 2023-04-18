import { auth } from '../../../../config/firebase_config';
import { CardMedia, Divider, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import InputField from '../../../components/InputField';
import companyLogoImage from '../../../../assets/image/logo.png'
import { handleResponsiveness } from '../../styles/loginStyle';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import ActionButton from '../../../components/ActionButton';
import { useDispatch} from 'react-redux';
import { findPhoneNumber, setNavigateValue } from '../../../../redux/features/authSlice';
import OtpVerifierPage from './OtpVerifierPage';
const PhoneNumberVerifierPage= ({navigateTo,secondNavigate}) => {

  const navigate=useNavigate()
  const [phoneNumber,setPhoneNumber]=useState('')
  const [isBtnDisabled,setIsBtnDisabled]=useState(true)
  const [isFormValid,setFormValidation]= useState(false)
  const [isOTPCodeSent,setOTPSetIsCodeSent] = useState('')
  const dispatch = useDispatch()
  

  useEffect(()=>{
     if(!window.recaptchaVerifier){
       window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
       'size': 'invisible',
       'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
             navigate('/verify')
        },
       'expired-callback': () => {
       // Response expired. Ask user to solve reCAPTCHA again.
       // ...
     }
    }, auth);
  }
  },[])



 const onSignUp=()=>{
  
   const appVerifier = window.recaptchaVerifier;
   const ph= '+251'+phoneNumber
   console.log('here!!')
    signInWithPhoneNumber(auth, ph, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
       setOTPSetIsCodeSent(true)
        toast.success('successfully sent');
    }).catch((error) => {
      console.log(error.message)
      setOTPSetIsCodeSent(false)
    });

  }

  useEffect(()=>{
     if(phoneNumber!==''&&isFormValid){
      setIsBtnDisabled(false)
     }else setIsBtnDisabled(true)
  },[phoneNumber,isFormValid])

   const onSubmit=()=>{
      dispatch(findPhoneNumber({toast,navigate,phoneNumber,onSignUp,navigateTo})) 
      dispatch(setNavigateValue(secondNavigate)) 
   }
   
  return (
    <>
    {!isOTPCodeSent?
    
    <Box sx={style.forgetPasswordContainer}>
     
       <Box sx={style.companyLogoContainer}>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
       <Box sx={style.cardContainer}>
        <Paper sx={style.forgetPasswordCard}>
          <Typography sx={{color:'#1A6CE8',fontWeight:'bold'}} variant='h6'>Verifier</Typography>
          <Divider sx={{width:'100%'}}/>
           <InputField
             type={'phoneNumber'}
             setValidation={setFormValidation}
             inputLabel={'PhoneNumber'}
             width={'80%'}
             setValue={(e)=>setPhoneNumber(e.target.value)}
             inputValue={phoneNumber}
           />
             <Box onClick={onSubmit} sx={{width:'100%',marginTop:'-5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Box sx={{width:'76%',marginLeft:'-3%'}}>
              <ActionButton
               btnLabel={'Submit'}
               btnWidth={'100%'}
               isBtnDisabled={isBtnDisabled}
              />
              </Box>
           </Box>
      </Paper>
      </Box>
    </Box>:
    <OtpVerifierPage/>}
    </>
  )
}

const style={
  forgetPasswordContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    gap:'20px'
  },
  forgetPasswordCard:{
    width:handleResponsiveness('90%','400px'),
    height:'250px',
    borderRadius:'5px',
    border:'solid 1px rgba(0,0,0,0.4)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'20px',
    marginTop:'50px'
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
      justifyContent:'center',
    
  }
}
export default PhoneNumberVerifierPage