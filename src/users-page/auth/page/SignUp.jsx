import { Box, Card, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import LogoImage from '../../../assets/image/logo.png'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import { handleResponsiveness, signUpStyle } from '../styles/signUpStyle'
import signUpImage from '../../../assets/image/signUp.svg'
import MediaCard from '../../components/MediaCard'
import DataBaseImage from '../../../assets/image/dataBase.png'
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
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    password:"",
    gender:"",
    confirmPassword:''
   })


   const handleSubmit=()=>{
    
     if(userData.firstName!=='' && userData.lastName!==''&& userData.confirmPassword!==''
       && userData.phoneNumber!=='' && userData.email!==''
       &&userData.password!==''&& userData.gender!==''){
        
         dispatch(signUp({userData,toast,navigate}))
         setFormValidation(true)
         setUserData({ firstName:'',lastName:'',phoneNumber:'',email:'',
                    password:'',gender:''})

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
                         sx={{
                          color:'rgba(0,0,0,0.5)',
                          fontWeight:'bold',
                          fontFamily:'Poppins',
                          marginBottom:'20px'
                          
                          }}>SignUp</Typography>
                    </Box>
                    <Divider sx={{width:'80%',marginLeft:'10%'}}/>
                     <Box sx={signUpStyle.signUpNameInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'FirstName'}
                      type='text'
                      inputValue={userData.firstName}
                      setValue={(e)=>setUserData({...userData,"firstName":e.target.value})}
                    />
                     <InputField 
                      inputLabel={'LastName'}
                      type='text'
                      inputValue={userData.lastName}
                      setValue={(e)=>setUserData({...userData,"lastName":e.target.value})}
                    />
                    </Box>
                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Phone Number'}
                      type='phoneNumber'
                      inputValue={userData.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
                    />
                    </Box>
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Email'}
                      type='email'
                      inputValue={userData.email}
                      setValue={(e)=>setUserData({...userData,"email":e.target.value})}
                    />
                    </Box>
                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Gender'}
                      type='text'
                      inputValue={userData.gender}
                      setValue={(e)=>setUserData({...userData,"gender":e.target.value})}
                    />
                    </Box>
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'password'}
                      type='password'
                      inputValue={userData.password}
                      setValue={(e)=>setUserData({...userData,"password":e.target.value})}
                    />
                    </Box>
                      <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'ConfirmPassword'}
                      type='password'
                      inputValue={userData.confirmPassword}
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
                       sx={
                        {
                          fontSize:'15px',
                          marginLeft:'5px', 
                          color:'#1A6CE8',
                          cursor:'pointer'
                          }
                        }>
                         SignIn
                      </Typography>
                    </Box> 
                </Paper>
             </Box>
        </Paper>
     
        <Paper sx={signUpStyle.signUpRightContainer}>
             
           <Box sx={
            {
              width:'100%',
              height:handleResponsiveness('auto','80vh'),
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column',
              marginTop:'100px',
           
              }
           }>

      <Box onClick={()=>navigate('/home')} sx={signUpStyle.companyLogo}>
                 <MediaCard
                 mediaHeight={'100%'}
                 mediaWidth={'90%'}
                 imgUrl={LogoImage}
               />
               {/* <IconButton onClick={()=>setIsSideBarOpen(prev=>!prev)}>
                  <MenuOutlined/>
               </IconButton> */}
             </Box> 
               <Card 
                 sx={
                  {
                    width:'100%',
                    height:{xs:'40vh',md:'60vh'},
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    boxShadow:'none',
                    borderRadius:'0',
                    marginTop:handleResponsiveness('50px','100px'),
                    zIndex:1000,
                    backgroundColor:'rgba(0,0,0,0)',
                    
                    }}>
                <CardMedia 
                  image={signUpImage} 
                   sx={{
                    width:handleResponsiveness('80%','40%'),
                    height:'100%'
                  }}
                   />
               </Card>


        <Typography
            sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'rgba(0,0,0,0.6)',
                  fontWeight:'bold',
                  fontSize:{xs:'20px',md:'32px'}
               
                }}>
             Renovate the world of Data through 
                </Typography>
              <Typography 
               variant='h4'
               sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'#1A6CE8',
                  fontWeight:'bold',
                  marginBottom:'50px',
                  fontSize:{xs:'20px',md:'32px'}
               
                }}
               >intelligence for better decisions!</Typography>
           </Box>
         
        </Paper>
    
    </Box>
  )
}

export default SignUp