import { Box, Card, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../../components/InputField'
import ActionButton from '../../components/ActionButton'
import { useDispatch, useSelector } from 'react-redux'
import TextArea from '../../components/TextArea'
import dayjs from 'dayjs'
import { createAppointment, setAppointmentVerification } from '../../../redux/features/authSlice'
import {toast} from 'react-toastify'
import DateAndTimePicker from '../../../shared/Components/DateAndTimePicker'
import { style } from '../../pages/style/registerationStyles'
import NavBar from '../../components/NavBar'
import CourseRegistration from '../../../assets/image/course.jpg'
import PhoneNumberVerifierPage from '../../auth/auth-rest/pages/PhoneNumberVerifierPage'
const UserAppointment = () => {
  const {modeColor,isLightMode,isAppointmentVerified} = useSelector(state=>state.auth)
  const newDate= new Date()
  const [appointmentDate,setAppointmentDate] = useState(dayjs(newDate.toISOString()))
  const [isCompanyFormValid,setIsCompanyFormValid] = useState(false)
  const [isBtnDisabled,setIsBtnDisabled]= useState(true)
  const dispatch = useDispatch()
  const convertDateToAPIstandard=(inputValue)=>{
   if(inputValue){
      let date =appointmentDate?.$d?.toISOString()
      return date  
     }else return ''
   }

  const [appointmentData,setAppointmentData]= useState({
    title:"",
    description:"",
    appointmentDate:convertDateToAPIstandard(appointmentDate)
  
   })

  const handleCompanyAppointmentSubmission=()=>{
    dispatch(createAppointment({toast,appointmentData}))
    setAppointmentData({   
    title:"",
    description:"",
    appointmentDate:""
  })
   dispatch(setAppointmentVerification(false))
   }

  useEffect(()=>{

    if(appointmentData.appointmentDate!=='' && appointmentData.description!==''&&
     appointmentData.title!==''&& isCompanyFormValid){
          setIsBtnDisabled(false)
        }else setIsBtnDisabled(true)   

   },[appointmentData,isCompanyFormValid])




  return (
    <>
    {isAppointmentVerified?
     <Box sx={style.registrationMainContainer}>
      <NavBar/>
      <Box sx={style.registrationCardMainContainer}>
         <Box sx={style.registrationInnerContainer}>
           <Paper sx={[style.cardsMainContainer,{backgroundColor:modeColor}]}>
            <Box sx={style.cardTitlesContainer}>
              <Typography  
                 sx={[style.selectorText,
                 {backgroundColor:`${isLightMode?'white':'#333'}`}]
                 }>Register</Typography>
            </Box>
             <Divider sx={{backgroundColor:isLightMode?'#DFDFDF':'#ACACAC'}}/>
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
    </Box>
        </Paper>
        </Box>
        <Card sx={{height:'100%'}}>
          <CardMedia image={CourseRegistration} sx={{height:'100%'}}/>
        </Card>   
      </Box>
    </Box>:
    <PhoneNumberVerifierPage
      navigateTo={'registration'}
      secondNavigate={'userAppointment'}
      restIdentifier={'userAppointment'}
     />}
    </>
  )
}

export default UserAppointment


 