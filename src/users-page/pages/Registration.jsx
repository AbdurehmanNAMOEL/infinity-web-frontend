import { Box, Card, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CourseRegistration from '../../assets/image/course.jpg'
import InputField from '../components/InputField'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import TextArea from '../components/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { createAppointment, createPersonalAppointment } from '../../redux/features/authSlice'
import {toast} from 'react-toastify'
import ActionButton from '../components/ActionButton'
import DateAndTimePicker from '../../shared/Components/DateAndTimePicker'
import dayjs from 'dayjs';
import { style } from './style/registerationStyles'
const Registration = () => {
  const [isItPersonal,setIsItPerson]=useState(true)
  const [isValid,setIsValid] = useState(false)
  const [isCompanyFormValid,setIsCompanyFormValid] = useState(false)
  const [isBtnDisabled,setIsBtnDisabled]= useState(true)
  const [isPersonalBtnDisabled,setIsPersonalBtnDisabled]= useState(true)
  const {modeColor,isLightMode} = useSelector(state=>state.auth)
  const newDate= new Date()
  const [appointmentDate,setAppointmentDate] = useState(dayjs(newDate.toISOString()))
  const dispatch = useDispatch()

  const convertDateToAPIstandard=(inputValue)=>{
   if(inputValue){
      let date =appointmentDate?.$d?.toISOString()
      return date  
     }else return ''
   }

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
    appointmentDate:convertDateToAPIstandard(appointmentDate)
  
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

   

   useEffect(()=>{

     if(userData.name!==''&& userData.email!==''&userData.phoneNumber!==''
        &&userData.type!==''&& userData.officeLocationId!==''&& isValid){
          setIsPersonalBtnDisabled(false)
        }else setIsPersonalBtnDisabled(true)

    if(appointmentData.appointmentDate!=='' && appointmentData.description!==''&&
     appointmentData.title!==''&& isCompanyFormValid){
          setIsBtnDisabled(false)
        }else setIsBtnDisabled(true)   

   },[userData,isValid,appointmentData,isCompanyFormValid])


  return (
    <Box sx={style.registrationMainContainer}>
      <NavBar/>
      <Box sx={style.registrationCardMainContainer}>
         <Box sx={style.registrationInnerContainer}>
           <Paper sx={[style.cardsMainContainer,{backgroundColor:modeColor}]}>
            <Box sx={style.cardTitlesContainer}>
              <Typography 
                 onClick={setPersonalPrefer} 
                 sx={[style.selectorText,
                 {backgroundColor:isItPersonal?`${isLightMode?'#DFDFDF':'#333'}`:
                 `${isLightMode?'white':'#1e1e1e'}`}]
                 }>Personal</Typography>
              <Typography 
                 onClick={setCompanyPrefer} 
                 sx={[style.selectorText,
                 {backgroundColor:!isItPersonal?`${isLightMode?'#DFDFDF':'#333'}`:
                 `${isLightMode?'white':'#1e1e1e'}`}]
                 }>Company
              </Typography>

            </Box>
             <Divider sx={{backgroundColor:isLightMode?'#DFDFDF':'#ACACAC'}}/>
             {isItPersonal?<Box>
                <Box sx={style.personalInputFieldContainer}>                    
                  <InputField 
                    inputLabel={'Name'}
                    type='name'
                    setValidation={setIsValid}
                    width={'100%'}
                    inputValue={userData.name}
                    setValue={(e)=>setUserData({...userData,"name":e.target.value})}
                  />  
                  </Box>

                 <Box sx={style.personalInputFieldContainer}>                    
                    <InputField 
                      inputLabel={'Phone Number'}
                      type='phoneNumber'
                      width={'100%'}
                      setValidation={setIsValid}
                      inputValue={userData?.phoneNumber}
                      setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
                    />
                    </Box>

                    <Box sx={style.personalInputFieldContainer}>                    
                      <InputField 
                       inputLabel={'Email'}
                       type='email'
                       width={'100%'}
                       setValidation={setIsValid}
                       inputValue={userData?.email}
                       setValue={(e)=>setUserData({...userData,"email":e.target.value})}
                    />
                    </Box>

                    <Box sx={style.personalInputFieldContainer}>                    
                      <InputField 
                       inputLabel={'Type'}
                       type='name'
                       width={'100%'}
                       setValidation={setIsValid}
                       inputValue={userData?.type}
                       setValue={(e)=>setUserData({...userData,"type":e.target.value})}
                    />
                    </Box>
                    <Box sx={style.personalSubmissionBtnContainer}>
                      <ActionButton
                        btnLabel={'Submit'}
                        btnWidth={'87%'}
                        onClick={handlePersonalAppointmentSubmission}
                        isBtnDisabled={isPersonalBtnDisabled}
                      />
                    </Box>
            </Box>:
           <Box>
            <Paper sx={[style.formContainer,{backgroundColor:modeColor}]}>
              <Box sx={style.companyInputFieldContainer}>                    
                <InputField 
                 inputLabel={'Title'}
                 type='name'
                 width='100%'
                 setValidation={setIsCompanyFormValid}
                 inputValue={appointmentData.title}
                 setValue={(e)=>setAppointmentData({...appointmentData,"title":e.target.value})}
                />
              </Box>
               <Box sx={{width:'80%',display:'flex', justifyContent:'flex-start'}}>
                  <DateAndTimePicker
                     inputValue={appointmentDate}
                     setValue={setAppointmentDate} 
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
                <Box sx={{width:'80%',marginBottom:'20px'}}>
                 <ActionButton
                   btnLabel={'Send'}
                   btnWidth={'95%'}
                   isBtnDisabled={isBtnDisabled}
                   onClick={handleCompanyAppointmentSubmission}
                 />
                </Box>
              </Paper>
           </Box>}
        </Paper>
        </Box>
        <Card sx={{height:'100%'}}>
          <CardMedia image={CourseRegistration} sx={{height:'100%'}}/>
        </Card>   
      </Box>
    </Box>
  )
}

export default Registration