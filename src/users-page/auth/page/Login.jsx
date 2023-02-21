import { Box, Card, CardMedia, Divider,Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import LogoImage from '../../../assets/image/logo.jpg'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import { handleResponsiveness, loginStyle } from '../styles/loginStyle'
import AboutUs from '../../../assets/image/about-us.svg'
import MediaCard from '../../components/MediaCard'
import DataBaseImage from '../../../assets/image/dataBase.svg'
import SideBar from '../../components/SideBar'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { signIn } from '../../../redux/features/authSlice'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'


export const Login = ({isSideBarOpen,setIsSideBarOpen,handleSideBarNavigation,navTitle}) => {
    const navigate = useNavigate()
   const dispatch= useDispatch()
   const [isFormValid,setFormValidation]=useState(false)
   const TypoGraphMotion = motion(Typography);
   const [userData,setUserData]= useState({email:'',password:'',})
   const handleSubmit=()=>{
    
     if(userData.firstName!=='' && userData.lastName!==''
       && userData.phoneNumber!=='' && userData.email!==''
       &&userData.password!==''&&userData.confirmPassword!==''&& userData.address!==''){
         alert(userData)
         dispatch(signIn({userData,toast,navigate}))
         setFormValidation(true)
         setUserData({email:'',password:''})
       }else setFormValidation(false)
       
   }

  return (
    <Box sx={loginStyle.loginMainContainer}>
      <SideBar 
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        handleSideBarNavigation={handleSideBarNavigation}
        navTitle={navTitle}
      />
        <Paper sx={loginStyle.loginLeftContainer}>
             <Box onClick={()=>navigate('/')} sx={loginStyle.companyLogo}>
               <MediaCard
                 mediaHeight={'100%'}
                 mediaWidth={'60px'}
                 imgUrl={LogoImage}
               />
               {/* <IconButton onClick={()=>setIsSideBarOpen(prev=>!prev)}>
                  <MenuOutlined/>
               </IconButton> */}
             </Box>
             <Box sx={loginStyle.loginCardContainer}>
                <Paper sx={loginStyle.loginCard}>
                    <Box sx={loginStyle.loginTitleContainer}>
                      <Typography 
                         variant='h5' 
                         sx={{color:'rgba(0,0,0,0.5)',fontWeight:'bold',fontFamily:'Poppins'}}>Login</Typography>
                    </Box>
                    {/* <Divider/> */}
                    <Box sx={loginStyle.loginInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Email/Phone Number'}
                      type='text'
                      inputValaue={userData.email}
                      setValue={(e)=>setUserData({...userData,"email":e.target.value})}
                    />
                    </Box>
                      <Box sx={loginStyle.loginInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'password'}
                      type='password'
                      inputValaue={userData.password}
                      setValue={(e)=>setUserData({...userData,"password":e.target.value})}
                    />
                    </Box>
                    <Box sx={loginStyle.forgotPasswordContainer}>
                      <Typography 
                       sx={{fontSize:'15px', color:'#1A6CE8',cursor:'pointer'}}>Forgot Password?
                      </Typography>
                    </Box>                 
                    <Box sx={loginStyle.loginButtonContainer}>    
                     <ActionButton
                       btnLabel='Login'
                       btnWidth={'80%'}
                       onClick={handleSubmit}
                      />
                    </Box>
                  <Divider sx={{marginTop:'20px'}}/>     
                     <Box sx={loginStyle.createAccountLabelContainer}>
                      <Typography>Don't have an account?</Typography>
                      <Typography 
                        onClick={()=>navigate('/signUp')}
                       sx={{fontSize:'15px',marginLeft:'5px', color:'#1A6CE8',cursor:'pointer'}}>
                         SignUp
                      </Typography>
                    </Box> 
                </Paper>
             </Box>
        </Paper>
     
        <Paper sx={loginStyle.loginRightContainer}>
           <Box sx={loginStyle.companyName}>
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
               
                }}>Welcome Back</Typography>
           
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
                <CardMedia image={AboutUs} sx={{width:'90%',height:'90%'}}/>
               </Card>
           </Box>
        </Paper>
    
    </Box>
  )
}

