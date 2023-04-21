import { Box, Card, CardMedia, Divider,Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import { handleResponsiveness, loginStyle } from '../styles/loginStyle'
import LoginImage from '../../../assets/image/login.svg'
import MediaCard from '../../components/MediaCard'
import DataBaseImage from '../../../assets/image/dataBase.png'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../../redux/features/authSlice'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import NavBar from '../../components/NavBar'
import PhoneNumberVerifierPage from '../auth-rest/pages/PhoneNumberVerifierPage'


export const Login = ({isSideBarOpen,setIsSideBarOpen,handleSideBarNavigation,navTitle}) => {
   const navigate = useNavigate()
   const dispatch= useDispatch()
   const [isFormValid,setFormValidation]=useState(false)
   const [isBtnDisabled,setIsBtnDisabled]=useState(false)
   const [isForgetClicked,setIsForgetClicked]=useState(false)
   const [userData,setUserData]= useState({phoneNumber:'',password:'',})
   const handleSubmit=()=>{
    
   if(userData.phoneNumber!==''&&userData.password!==''){
         dispatch(signIn({userData,toast,navigate}))
         setFormValidation(true)
         setUserData({phoneNumber:'',password:''})
       }else setFormValidation(false)
       
   }

   useEffect(()=>{
       if(userData.phoneNumber!==''&& userData.password!==''&& isFormValid){
              setIsBtnDisabled(false)
       } else setIsBtnDisabled(true) 
   },[isFormValid,userData])

  return (
    <>    
    {!isForgetClicked?<Box sx={loginStyle.loginMainWrapper}>
       <NavBar isScrolling={false}/>
       <Box sx={loginStyle.loginMainContainer}>
         <Paper sx={loginStyle.loginLeftContainer}>
          
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
                      setValidation={setFormValidation}
                      inputValue={userData.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
                    />
                    </Box>
                      <Box sx={loginStyle.loginInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'password'}
                      type='password'
                      setValidation={setFormValidation}
                      inputValue={userData.password}
                      setValue={(e)=>setUserData({...userData,"password":e.target.value})}
                    />
                    </Box>
                    <Box sx={loginStyle.forgotPasswordContainer}>
                      <Typography 
                       onClick={()=>setIsForgetClicked(true)}
                       sx={{fontSize:'15px', color:'#1A6CE8',cursor:'pointer'}}>Forgot Password?
                      </Typography>
                    </Box>                 
                    <Box sx={loginStyle.loginButtonContainer}>    
                     <ActionButton
                       btnLabel='Login'
                       isBtnDisabled={isBtnDisabled}
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
          
          
           <Box sx={
            {
              width:'100%',
              height:handleResponsiveness('auto','100%'),
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column',
          
              
              }
           }>

    <Typography
            sx={
                {
                  textAlign:'center',
                  fontFamily:'Poppins',
                  color:'rgba(0,0,0,0.6)',
                  fontWeight:'bold',
                  fontSize:handleResponsiveness('24px','40px'),
                  marginTop:handleResponsiveness('0','-20px'),
             
               
                }}>Welcome Back</Typography>
           
               <Card 
                 sx={
                  {
                    width:'70%',
                    height:handleResponsiveness('30vh','50%'),
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    boxShadow:'none',
                    borderRadius:'0',
                    marginBottom:'50px'
                    }}>
                <CardMedia 
                   image={LoginImage} 
                   sx={{
                   width:handleResponsiveness('80%','60%'),
                   height:handleResponsiveness('100%','100%')}}/>
               </Card>


                <Box sx={loginStyle.companyName}>
             
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
           
           </Box>


           
        </Paper>
    </Box>
    </Box>:
     <PhoneNumberVerifierPage 
       secondNavigate={'rest'} 
       navigateTo={'login'}
       restIdentifier={'user'}
       />}
  </>
  )
}

