import { Box, Card, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import CourseRegistration from '../../assets/image/course.jpg'
import { signUpStyle } from '../auth/styles/signUpStyle'
import InputField from '../components/InputField'
import ButtonStyled from '../components/ButtonStyled'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import TextArea from '../components/TextArea'
import InputSelector from '../../shared/Components/InputSelector'
import { personalScheduleType } from '../utils/selectorData'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { createAppointment, createPersonalAppointment } from '../../redux/features/authSlice'
import {toast} from 'react-toastify'
const Registration = () => {
  const [isItPersonal,setIsItPerson]=useState(true)
  const [personalAppointmentType,setPersonalAppointmentType]=useState('')
  const dispatch = useDispatch()

  const BoxMotion = motion(Box);
  const [userData,setUserData]= useState({
   type: "",
   name: "",
   phoneNumber: "",
   email: "",
   officeLocationId: "123456"
   })

  const [appointmentData,setAppointmentData]= useState({
    title:"",
    description:"",
    appointmentDate:"2023-03-29T14:52:19.773Z"
  
   })

   const setCompanyPrefer=()=>{
      setIsItPerson(false)
   }
   const setPersonalPrefer=()=>{
      setIsItPerson(true)
   }
   const handleCompanyAppointmentSubmission=()=>{
    dispatch(createAppointment({toast,appointmentData}))
    setAppointmentData({   
    title:"",
    description:"",
    appointmentDate:""
  })
   }

  const handlePersonalAppointmentSubmission=()=>{
         dispatch(createPersonalAppointment({toast,userData}))
         setUserData({type: "",name: "",phoneNumber: "", email: "",officeLocationId: "123456"})
   }
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
            <Box sx={{width:'100%',gap:'50px',height:'80px',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Typography onClick={setPersonalPrefer} sx={[style.selectorText,{backgroundColor:isItPersonal?'#DFDFDF':'white'}]}>
                Personal
              </Typography>
              <Typography onClick={setCompanyPrefer} sx={[style.selectorText,{backgroundColor:!isItPersonal?'#DFDFDF':'white'}]}>
                Company
              </Typography>
            </Box>
             <Divider/>
             {isItPersonal?<Box sx={{marginLeft:isItPersonal?'0px':'-200px',transition:'all 0.7s'}}>
                <Box sx={signUpStyle.signUpNameInputFieldContainer}>                    
                  <InputField 
                      inputLabel={'Name'}
                      type='text'
                       width={'100%'}
                      inputValue={userData.name}
                      setValue={(e)=>setUserData({...userData,"name":e.target.value})}
                    />
                 
                  </Box>

                 <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Phone Number'}
                      type='phoneNumber'
                      inputValue={userData?.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
                    />
                    </Box>

                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Email'}
                      type='email'
                      inputValue={userData?.email}
                      setValue={(e)=>setUserData({...userData,"email":e.target.value})}
                    />
                    </Box>

                    <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                      <InputField 
                      inputLabel={'Type'}
                      type='text'
                      inputValue={userData?.type}
                      setValue={(e)=>setUserData({...userData,"type":e.target.value})}
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
                        setValue={handlePersonalAppointmentSubmission}
                       />
                       </Box>
                    </Box>:
           <Box sx={{marginTop:!isItPersonal?'0px':'200px',transition:'all 2s'}}>
            <Paper sx={style.formContainer}>
              <Box sx={signUpStyle.signUpInputFieldContainer}>                    
                <InputField 
                 inputLabel={'Title'}
                 type='text'
                 inputValue={appointmentData.title}
                 setValue={(e)=>setAppointmentData({...appointmentData,"title":e.target.value})}
                />
              </Box>
               <Box sx={{width:'80%'}}>
                 <input 
                   type={'date'}
                   onChange={(e)=>setAppointmentData(
                    {...appointmentData,"appointmentDate":`${e.target.value}`})} 
                   style={{width:'95%',height:'45px'}}
                   value={appointmentData.appointmentDate}
                   />
               </Box>
               <Box sx={{width:'76.5%',marginLeft:'-18px'}}>
                <TextArea
                 textAreaWidth={'100%'}
                 textAreaHeight='150px'
                 placeholder={'message'}
                 setValue={(e)=>setAppointmentData({...appointmentData,"description":e.target.value})}
                 inputValue={appointmentData.description}
                />
                </Box>
                <Box sx={{width:'80%'}}>
                  <ButtonStyled
                    label={'Send'}
                    btnWidth='95%'
                    bgColor={'#0971f1'}
                    setValue={handleCompanyAppointmentSubmission}
                  />
                </Box>
            </Paper>
        </Box>      
                    
                    
                    }
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
const style={
  selectorText:{
    fontSize:'24px',
    width:'40%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    height:'50px',
    color:'#1A6CE8',
    fontWeight:'bold',
  },
   contactFormContainer:{
        width:'100%',
        height:'80%',
        display:'flex',
      
    },

       formContainer:{
        width:handleResponsiveness('95%','100%'),
        height:handleResponsiveness('400px','100%'),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:handleResponsiveness('40px','20px'),
        boxShadow:'none',
    },
}
export default Registration