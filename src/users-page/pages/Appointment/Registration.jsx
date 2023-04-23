import { Box, Card, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import CourseRegistration from '../../../assets/image/course.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { createPersonalAppointment } from '../../../redux/features/authSlice'
import {toast} from 'react-toastify'
import { style } from './styles/registerationStyles'
import ActionButton from '../../components/ActionButton'
import InputField from '../../components/InputField'
import SelectorInput from '../../components/SelectorInput'
import { consultTypeDataList } from '../../utils/selectorData'
import InputSelector from '../../../shared/Components/InputSelector'
import UseKey from '../../../hooks/keyEvents'

const Registration = () => {
  const [isItPersonal,setIsItPerson]=useState(true)
  const [isValid,setIsValid] = useState(false)
  const [isPersonalBtnDisabled,setIsPersonalBtnDisabled]= useState(true)
  const {modeColor,isLightMode,isPhoneNumberExist} = useSelector(state=>state.auth)
  
  const dispatch = useDispatch()

  console.log(isPhoneNumberExist);

  const [userData,setUserData]= useState({
   type: "",
   name: "",
   phoneNumber: "",
   email: "",
   officeLocationId: "123456"
   })

   const setPersonalPrefer=()=>{
      setIsItPerson(true)
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
  
   },[userData,isValid])

  UseKey('Enter',handlePersonalAppointmentSubmission)

  
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
                 {backgroundColor:isItPersonal?`${isLightMode?'white':'#333'}`:
                 `${isLightMode?'white':'#1e1e1e'}`}]
                 }>Register</Typography>
            </Box>
             <Divider sx={{backgroundColor:isLightMode?'#DFDFDF':'#ACACAC'}}/>
             <Box>
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

                <Box sx={style.personalSelectorInputFieldContainer}>                    
                    
                 <InputSelector
                   optionList={consultTypeDataList}
                   optionValue={'value'}
                   optionTitle={'title'}
                   selectorWidth={'90%'}
                   inputValue={userData?.type}
                   setValue={(e)=>setUserData({...userData,"type":e.target.value})}
                   label={'Type'}
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
            </Box>
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