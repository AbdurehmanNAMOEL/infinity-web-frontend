import { Box, Card, CardMedia, Divider,Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import LogoImage from '../../../assets/image/logo.png'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import { handleResponsiveness, loginStyle } from '../styles/loginStyle'
import LoginImage from '../../../assets/image/login.svg'
import MediaCard from '../../components/MediaCard'
import DataBaseImage from '../../../assets/image/dataBase.png'
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
   const [userData,setUserData]= useState({phoneNumber:'',password:'',})
   const handleSubmit=()=>{
    
     if(userData.phoneNumber!==''&&userData.password!==''){
         alert(userData)
         dispatch(signIn({userData,toast,navigate}))
         setFormValidation(true)
         setUserData({phoneNumber:'',password:''})
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
             <Box 
                onClick={()=>navigate('/')} 
                sx={[loginStyle.companyLogo,{display:{xs:'none',md:'flex'}}]}>
               <MediaCard
                 mediaHeight={'40px'}
                 mediaWidth={'80px'}
                 imgUrl={LogoImage}
               />
             </Box>
             <Box sx={loginStyle.loginCardContainer}>
                <Paper sx={loginStyle.loginCard}>
                    <Box sx={loginStyle.loginTitleContainer}>
                      <Typography variant='h5' 
                        sx={
                        {color:'rgba(0,0,0,0.5)',
                          fontWeight:'bold',
                          fontFamily:'Poppins'
                        }}>Login</Typography>
                    </Box>
                    {/* <Divider/> */}
                    <Box sx={loginStyle.loginInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Phone Number'}
                      type='phoneNumber'
                      inputValue={userData.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
                    />
                    </Box>
                      <Box sx={loginStyle.loginInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'password'}
                      type='password'
                      inputValue={userData.password}
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
              <Box 
               onClick={()=>navigate('/')} 
               sx={[loginStyle.companyLogo,{display:{xs:'flex',md:'none'}}]}>
               <MediaCard
                 mediaHeight={'40px'}
                 mediaWidth={'80px'}
                 imgUrl={LogoImage}
               />
             </Box>
              <Box onClick={()=>navigate('/')} sx={{display:{xs:'none',md:'flex'}}}>
               <MediaCard
               mediaWidth={'30px'} 
               mediaHeight={'35px'} 
               imgUrl={DataBaseImage}
               />
             </Box>
           
              <Typography
                 sx={
                  {
                    fontSize:'13px',
                    marginLeft:'5px',
                    width:'200px',
                    color:'rgba(0,0,0,0.5)',
                    fontWeight:'bold',
                    cursor:'pointer',
                    display:{xs:'none',md:'flex'}

                }}>
                  INFINITY CONSULTANCY AND TRANING FIRM
             </Typography>
           </Box>
           
          
           <Box sx={
            {
              width:'100%',
              height:handleResponsiveness('auto','80vh'),
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
              }
           }>

    <Typography
            animate={{ y: [-500,0] }} 
            transition = {{ ease: "easeInOut", duration: 2 }} 
            sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'rgba(0,0,0,0.6)',
                  fontWeight:'bold',
                  fontSize:handleResponsiveness('24px','40px'),
                  marginTop:'-20px',
             
               
                }}>Welcome Back</Typography>
           
               <Card 
                 sx={
                  {
                    width:'100%',
                    height:handleResponsiveness('30vh','60vh'),
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#D9D9D9',
                    boxShadow:'none',
                    borderRadius:'0',
                    marginBottom:'50px'
                    }}>
                <CardMedia 
                   image={LoginImage} 
                   sx={{
                   width:handleResponsiveness('60%','60%'),
                   height:handleResponsiveness('100%','100%')}}/>
               </Card>
           </Box>
        </Paper>
    
    </Box>
  )
}

