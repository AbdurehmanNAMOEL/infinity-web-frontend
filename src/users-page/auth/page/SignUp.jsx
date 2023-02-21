import { Box, Card, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import LogoImage from '../../../assets/image/logo.jpg'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import { handleResponsiveness, signUpStyle } from '../styles/signUpStyle'
import AboutUs from '../../../assets/image/blog.svg'
import MediaCard from '../../components/MediaCard'
import DataBaseImage from '../../../assets/image/dataBase.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { signUp } from '../../../redux/features/authSlice'
 const SignUp = () => {
   const navigate = useNavigate()
   const dispatch= useDispatch()
   const [isFormValid,setFormValidation]=useState(false)
   const TypoGraphMotion = motion(Typography);
   const [userData,setUserData]= useState({
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    password:'',
    confirmPassword:'',
    address:''
   })


   const handleSubmit=()=>{
    
     if(userData.firstName!=='' && userData.lastName!==''
       && userData.phoneNumber!=='' && userData.email!==''
       &&userData.password!==''&&userData.confirmPassword!==''&& userData.address!==''){
         alert(userData)
         dispatch(signUp({userData,toast,navigate}))
         setFormValidation(true)
         setUserData({ firstName:'',lastName:'', phoneNumber:'',email:'',
                    password:'',confirmPassword:'',address:''})

       }else setFormValidation(false)
       
   }

  return (
    <Box sx={signUpStyle.signUpMainContainer}>
        <Paper sx={signUpStyle.signUpLeftContainer}>
            <Box sx={signUpStyle.companyName}>
            <MediaCard 
               mediaWidth={'30px'} 
               mediaHeight={'35px'} 
               imgUrl={DataBaseImage}
              />
              <Typography 
                animate={{ x: [400,0] }} 
                transition = {{ ease: "easeInOut", duration: 2 }} 
                 sx={
                  {
                    fontSize:'13px',
                    marginLeft:'5px',
                    width:'200px',
                    color:'rgba(0,0,0,0.5)',
                    fontWeight:'bold',
                    cursor:'pointer'
                }}>
                  INFINITY CONSULTANCY AND TRANING FIRM
             </Typography>
           </Box>
           
         
             <Box sx={signUpStyle.signUpCardContainer}>
                <Paper sx={signUpStyle.signUpCard}>
                    <Box sx={signUpStyle.signUpTitleContainer}>
                      <Typography 
                         variant='h5' 
                         sx={{color:'rgba(0,0,0,0.5)',fontWeight:'bold',fontFamily:'Poppins'}}>SignUp</Typography>
                    </Box>
                    {/* <Divider/> */}
                     <Box sx={signUpStyle.signUpNameInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'FirstName'}
                      type='text'
                      inputValaue={userData.firstName}
                      setValue={(e)=>setUserData({...userData,"firstName":e.target.value})}
                    />
                     <InputField 
                      inputLabel={'LastName'}
                      type='text'
                      inputValaue={userData.lastName}
                      setValue={(e)=>setUserData({...userData,"lastName":e.target.value})}
                    />
                    </Box>
                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Phone Number'}
                      type='text'
                      inputValaue={userData.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
                    />
                    </Box>
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Email'}
                      type='text'
                      inputValaue={userData.email}
                      setValue={(e)=>setUserData({...userData,"email":e.target.value})}
                    />
                    </Box>
                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Address'}
                      type='text'
                      inputValaue={userData.address}
                      setValue={(e)=>setUserData({...userData,"address":e.target.value})}
                    />
                    </Box>
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'password'}
                      type='password'
                      inputValaue={userData.password}
                      setValue={(e)=>setUserData({...userData,"password":e.target.value})}
                    />
                    </Box>
                      <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'ConfirmPassword'}
                      type='password'
                      inputValaue={userData.confirmPassword}
                      setValue={(e)=>setUserData({...userData,"confirmPassword":e.target.value})}
                    />
                    </Box>                
                    <Box sx={signUpStyle.signUpButtonContainer}>    
                     <ActionButton
                       btnLabel='signUp'
                       btnWidth={'80%'}
                       onClick={handleSubmit}
                      />
                    </Box>
                  <Divider sx={{marginTop:'20px'}}/>     
                     <Box sx={signUpStyle.createAccountLabelContainer}>
                      <Typography>Already have an account?</Typography>
                      <Typography 
                       onClick={()=>navigate('/login')}
                       sx={{fontSize:'15px',marginLeft:'5px', color:'#1A6CE8',cursor:'pointer'}}>
                         SignIn
                      </Typography>
                    </Box> 
                </Paper>
             </Box>
        </Paper>
     
        <Paper sx={signUpStyle.signUpRightContainer}>
              <Box onClick={()=>navigate('/home')} sx={signUpStyle.companyLogo}>
               <MediaCard
                 mediaHeight={'100%'}
                 mediaWidth={'120px'}
                 imgUrl={LogoImage}
               />
               {/* <IconButton onClick={()=>setIsSideBarOpen(prev=>!prev)}>
                  <MenuOutlined/>
               </IconButton> */}
             </Box> 
           <Box sx={
            {
              width:'100%',
              height:handleResponsiveness('30vh','80vh'),
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
              }
           }>

    <Typography
            animate={{ y: [-500,0] }} 
            transition = {{ ease: "easeInOut", duration: 2 }} 
            variant='h4' 
            sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'rgba(0,0,0,0.6)',
                  fontWeight:'bold',
               
                }}>
               We are the bridge  between 
                </Typography>
              <Typography 
               variant='h4'
               sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'#1A6CE8',
                  fontWeight:'bold',
               
                }}
               >Information and Development!</Typography>
               <Card 
                 sx={
                  {
                    width:'100%',
                    height:'60vh',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#D9D9D9',
                    boxShadow:'none',
                    borderRadius:'0'
                    }}>
                <CardMedia 
                  image={AboutUs} 
                   sx={{width:'90%',height:'90%'}}
                   />
               </Card>
           </Box>
        </Paper>
    
    </Box>
  )
}

export default SignUp