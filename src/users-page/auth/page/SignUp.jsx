import { Box, Card, CardMedia, Divider, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import LogoImage from '../../../assets/image/logo.jpg'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import { handleResponsiveness, signUpStyle } from '../styles/signUpStyle'
import AboutUs from '../../../assets/image/blog.svg'
import MediaCard from '../../components/MediaCard'
import DataBaseImage from '../../../assets/image/dataBase.svg'
import SideBar from '../../components/SideBar'
import { MenuOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

 const SignUp = ({isSideBarOpen,setIsSideBarOpen,handleSideBarNavigation,navTitle}) => {
   const navigate = useNavigate()
   const TypoGraphMotion = motion(Typography);

  return (
    <Box sx={signUpStyle.signUpMainContainer}>
        <Paper sx={signUpStyle.signUpLeftContainer}>
            <Box sx={signUpStyle.companyName}>
            <MediaCard 
               mediaWidth={'30px'} 
               mediaHeight={'35px'} 
               imgUrl={DataBaseImage}
              />
              <TypoGraphMotion 
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
             </TypoGraphMotion>
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
                    />
                     <InputField 
                      inputLabel={'LastName'}
                      type='text'
                    />
                    </Box>
                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Phone Number'}
                      type='text'
                    />
                    </Box>
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Email'}
                      type='text'
                    />
                    </Box>
                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Address'}
                      type='text'
                    />
                    </Box>
                       <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'password'}
                      type='password'
                    />
                    </Box>
                      <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'ConfirmPassword'}
                      type='password'
                    />
                    </Box>                
                    <Box sx={signUpStyle.signUpButtonContainer}>    
                     <ActionButton
                       btnLabel='signUp'
                       btnWidth={'80%'}
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

    <TypoGraphMotion
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
                </TypoGraphMotion>
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
                <CardMedia image={AboutUs} sx={{width:'90%',height:'90%'}}/>
               </Card>
           </Box>
        </Paper>
    
    </Box>
  )
}

export default SignUp