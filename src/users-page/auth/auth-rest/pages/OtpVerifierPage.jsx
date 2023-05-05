import { Box, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import companyLogoImage from '../../../../assets/image/logo.png'
import OtpInput from 'react-otp-input';
import { handleResponsiveness } from '../../styles/loginStyle';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from '../../../components/ActionButton';
import { setAppointmentVerification, setSignUpVerification } from '../../../../redux/features/authSlice';
import UseKey from '../../../../hooks/keyEvents';
const OtpVerifierPage= () => { 
   
   const navigate=useNavigate()
   const {isUserVerified,navigateTo, navIdentifier}= useSelector(state=>state.auth)
   const [isBtnDisabled,setIsBtnDisabled]= useState(true)
   const [verify,setVerify] = useState('')
   const dispatch = useDispatch()
  const handleConfirmation = async()=>{
    try {
       const response= await window.confirmationResult.confirm(verify);
         if(response?.user){
          if(navIdentifier==='admin'||navIdentifier==='user'){
            navigate(`/${navigateTo}/${response?.user?.phoneNumber}-${navIdentifier}`)
          }else{ 
              if(navIdentifier==='signUp'){
               dispatch(setSignUpVerification(true))
            }else if(navIdentifier==='userAppointment'){
              dispatch(setAppointmentVerification(true))
            }
              navigate(`/${navIdentifier}`)
           
            } 
         }  
    } catch (error) {
      toast.error(error.message)
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
        <CardMedia onClick={()=>navigate('/')} image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
      <Box sx={style.cardContainer}> 
      <Paper sx={style.verificationPasswordCard}>
         <Typography sx={{color:'#1A6CE8',fontWeight:'bold'}} variant='h6'>Verify Code</Typography>
         <Divider sx={{width:'100%'}}/>
         <OtpInput
          numInputs={6}
          value={verify}
          onChange={setVerify}
          containerStyle={{display:'flex',gap:'20px'}}
          inputStyle={{width:'30px',height:'30px'}}
         />
          <Box
           sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} 
           onClick={handleConfirmation} 
           >
            <ActionButton
             btnLabel={'Verify'}
             btnWidth={'70%'}
             isBtnDisabled={isBtnDisabled}
            />
           </Box>
        {/* <Typography  sx={{
          width:'70%',
          display:'flex',
          justifyContent:'flex-end',
          color:'red',
          cursor:'pointer'
          }}>
          Resend code
        </Typography> */}
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
    height:'100%',
    cursor:'pointer'
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

export default OtpVerifierPage