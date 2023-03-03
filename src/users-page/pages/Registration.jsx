import { Box, Card, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import CourseRegistration from '../../assets/image/course.jpg'
import { signUpStyle } from '../auth/styles/signUpStyle'
import InputField from '../components/InputField'
import ButtonStyled from '../components/ButtonStyled'
import { handleResponsiveness } from '../auth/styles/loginStyle'
const Registration = () => {

  const [userData,setUserData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    gender:""
   })
  return (
    <Box 
      sx={{
       width:'100%',
       height:handleResponsiveness('auto','100vh'),
       display:'flex',
       flexDirection:'column'
       }
    }>
      <NavBar/>
      <Box sx={{
         width:'100%',
         height:handleResponsiveness('100vh','100vh'),
         }}>
         <Box sx={
          {
            width:'100%',
            height:handleResponsiveness('auto','87.5%'),
            marginTop:'80px',
            position:'absolute',
            backgroundColor:'rgba(0,0,0,0.5)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
           }}>
           <Paper sx={
          {
           width:handleResponsiveness('95%','450px'),
           height:handleResponsiveness('500px','500px'),
           marginTop:'80px',
           borderRadius:'0px',
           marginBottom:'100px'
           }}>
             <Box sx={{width:'100%',height:'80px',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Typography sx={{fontSize:'24px',color:'#1A6CE8',fontWeight:'bold'}}>Register</Typography>
             </Box>
             <Divider/>

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
                      inputValue={userData.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
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
                    <Box sx={
                      {
                        width:'100%',
                        height:'80px',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:'20px'
                      }}>
                       <ButtonStyled
                        label={'Submit'}
                        bgColor='#1A6CE8'
                        btnWidth={'70%'}
                       />
                    </Box>
            </Paper>
        </Box>
        <Card sx={{width:'100%',height:'100%'}}>
            <CardMedia 
            image={CourseRegistration} 
            sx={{width:'100%',height:'100%'}}/>
        </Card>
       
      </Box>
    </Box>
  )
}

export default Registration