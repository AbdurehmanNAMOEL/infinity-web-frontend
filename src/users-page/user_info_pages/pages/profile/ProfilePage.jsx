import { Box,Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfile, getUserProfileData, getUserStaticData, restPassword } from '../../../../redux/features/authSlice'
import InputField from '../../../components/InputField'
import NavBar from '../../../components/NavBar'

import SelectorInput from '../../../components/SelectorInput'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { userInitialProfileData } from './profileData'
import ActionButton from '../../../components/ActionButton'
import { handleResponsiveness } from '../../../auth/styles/loginStyle'

const ProfilePage = ({isScrolling}) => {
  const {modeColor,userStaticData,userData,userProfileData}= useSelector(state=>state.auth)
  const navigate=useNavigate()
  const [isFormValid,setFormValidation]= useState(false)
  const [isRestFormValid,setIsRestFormValid]= useState(false)
  const [isBtnDisabled,setIsBtnDisabled]= useState(true)
  const [isRestBtnDisabled,setIsRestBtnDisabled]= useState(true)
  const [password,setPassword] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [userProfileEditedData,setUserProfileEditedData]=useState(
  userInitialProfileData(userProfileData[0]))

  useEffect(()=>{
    let id =userData.id
     dispatch(getUserStaticData())
     dispatch(getUserProfileData({id}))

  },[])

  const dispatch = useDispatch()

  
  const handleProfileEdit=()=>{
       let id =userData.id
     dispatch(editUserProfile({id,toast,navigate,userProfileEditedData}))
  }



  useEffect(()=>{
    if(userProfileEditedData?.firstName!=='' && userProfileEditedData?.last!==''&&
      userProfileEditedData?.phoneNumber!==''&& userProfileEditedData?.email!==''&&
      userProfileEditedData?.gender!=='' && isFormValid){
        setIsBtnDisabled(false)
      }else setIsBtnDisabled(true)
  },[userProfileEditedData,isFormValid])
    

  useEffect(()=>{
    if(phoneNumber!=='' && password!=='' && isRestFormValid){
        setIsRestBtnDisabled(false)
      }else setIsRestBtnDisabled(true)
  },[phoneNumber,password,isRestFormValid])
    
  const restNewPassword=()=>{
    const newPasswordData={
      "phoneNumber":phoneNumber,
      "newPassword":password
    }

    dispatch(restPassword({toast,newPasswordData}))

  }

  return (
  <Box sx={[style.profileMainContainer,{backgroundColor:modeColor}]}>
     <NavBar isScrolling={isScrolling}/>
     <Box sx={{width:'100%',marginTop:'90px',display:'flex',justifyContent:'center',alignItems:'center', height:'40vh',backgroundColor:'#1A6CE8'}}>
         <Typography variant='h3' sx={{color:'white'}}>My Profile</Typography>
      </Box>
      <Box sx={{flexDirection:'column',marginTop:'10px',height:'auto',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{
          height:'auto',
          width:handleResponsiveness('100%','70%'),
          display:'flex',
          flexDirection:'column',
          gap:'10px',
          marginTop:'50px',
          marginLeft:handleResponsiveness('15%','0%')
          }}>

       <Grid sx={{backgroundColor:modeColor}} container spacing={4}> 
        <Grid item xs={12} md={4}>
         <Box sx={{display:'flex'}}>
          <InputField
            type='name'
            width='80%'
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.firstName}
            setValue={(e)=>setUserProfileEditedData({
              ...userProfileEditedData,'firstName':e.target.value})}
          />
        </Box> 
        </Grid>
        <Grid item xs={12} md={4}>
         <Box sx={{display:'flex'}}>
          <InputField
            type='name'
            width='80%'
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.lastName}
            setValue={(e)=>setUserProfileEditedData({
              ...userProfileEditedData,'lastName':e.target.value})}
          />
        </Box> 
        </Grid>
        <Grid item xs={12} md={4}>
         <Box sx={{display:'flex'}}>
          <InputField
            type='phoneNumber'
            width='80%'  
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.phoneNumber}
            setValue={(e)=>setUserProfileEditedData({
              ...userProfileEditedData,'phoneNumber':e.target.value})}
          />
        </Box>  
        </Grid>
        <Grid item xs={12} md={4}>
         <Box sx={{display:'flex'}}>
          <InputField
            type='email'
            width='80%'
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.email}
            setValue={(e)=>setUserProfileEditedData({
              ...userProfileEditedData,'email':e.target.value})}
          />
     
        </Box> 
        </Grid>
        <Grid item xs={12} md={4}>
         <Box sx={{display:'flex'}}>
          <InputField
            type='text'
            width='80%'
             setValidation={setFormValidation}
            setValue={(e)=>setUserProfileEditedData({
              ...userProfileEditedData,'gender':e.target.value})}
            inputValue={userProfileEditedData?.gender}
          />
        
        </Box>
         </Grid>
        <Grid item xs={12} md={4}>
         <SelectorInput
          label={'Birth Place'}
          selectorWidth={'77%'}
          optionList={userStaticData?.birthPlaces}
          inputValue={userProfileEditedData?.birthPlaceId}
          setValue={(e)=>setUserProfileEditedData({
            ...userProfileEditedData,'birthPlaceId':e.target.value})}
         />
         </Grid>
        <Grid item xs={12} md={4}>
          <SelectorInput
          label={'Income Level'}
          selectorWidth={'77%'}
          optionList={userStaticData?.incomeLevels}
          inputValue={userProfileEditedData?.incomeLevelId}
          setValue={(e)=>setUserProfileEditedData({
            ...userProfileEditedData,'incomeLevelId':e.target.value})}
         />
         </Grid>
      <Grid item xs={12} md={4}>
         <SelectorInput
          label={'Educational Level'}
          selectorWidth={'77%'}
          optionList={userStaticData?.educationLevels}
          inputValue={userProfileEditedData?.educationalLevelId}
          setValue={(e)=>setUserProfileEditedData({
            ...userProfileEditedData,'educationalLevelId':e.target.value})}
         />
         </Grid>
        <Grid item xs={12} md={4}>
          <SelectorInput
          label={'Profession'}
          selectorWidth={'77%'}
          optionList={userStaticData?.professions}
          inputValue={userProfileEditedData?.professionId}
          setValue={(e)=>setUserProfileEditedData({
            ...userProfileEditedData,'professionId':e.target.value})}
         />
         </Grid>
       <Grid item xs={12} md={4}>
        <SelectorInput
          label={'Martial Status'}
          selectorWidth={'77%'}
          optionList={userStaticData?.maritalStatuses}
          inputValue={userProfileEditedData?.martialStatusId}
          setValue={(e)=>setUserProfileEditedData({
            ...userProfileEditedData,'martialStatusId':e.target.value})}
         />
         </Grid>
        <Grid item xs={12} md={4}>
          <SelectorInput
          label={'Religion'}
          selectorWidth={'77%'}
          optionList={userStaticData?.religions}
          inputValue={userProfileEditedData?.religionId}
          setValue={(e)=>setUserProfileEditedData({
            ...userProfileEditedData,'religionId':e.target.value})}
         />
         </Grid>
         <Grid item xs={12} md={4}>
         <SelectorInput
          label={'Religion'}
          selectorWidth={'77%'}
          optionList={userStaticData?.residenceCities}
          inputValue={userProfileEditedData?.residenceCityId}
          setValue={(e)=>setUserProfileEditedData({
            ...userProfileEditedData,'residenceCityId':e.target.value})}
         />
        </Grid>
         
         </Grid>  
        </Box>
        <Box sx={{
          width:handleResponsiveness('80%','100%'),
          marginTop:'30px',
          marginBottom:'20px',
          display:'flex',
          justifyContent:'center',
          marginLeft:handleResponsiveness('-8%','0%')
          }}>
        <ActionButton
          btnLabel={'Edit'}
          bgColor='#1A6CE8'
          btnWidth={handleResponsiveness('95%','40%')}
          isBtnDisabled={isBtnDisabled}
          onClick={handleProfileEdit}
         />
         </Box>

         <Box sx={{width:handleResponsiveness('84%','70%'),
            display:'flex',
            flexDirection:'column',
            gap:'16px',
            marginBottom:'20px',
          
          }}>
          <Typography>UpdatePassword</Typography>
           <Box sx={{display:'flex'}}>
          <InputField
            type='phoneNumber'
            width={handleResponsiveness('94%','40%')}
            inputLabel={'PhoneNumber'}
            setValidation={setIsRestFormValid}
            inputValue={phoneNumber}
            setValue={(e)=>setPhoneNumber(e.target.value)}
          />
     
        </Box>
         <Box sx={{display:'flex'}}>
          <InputField
            type='password'
            width={handleResponsiveness('94%','40%')}
            inputLabel={'password'}
            setValidation={setIsRestFormValid}
            inputValue={password}
            setValue={(e)=>setPassword(e.target.value)}
          />
     
        </Box>
        <Box sx={{width:handleResponsiveness('95%','40%')}}>
         <ActionButton
          btnLabel={'Update'}
          bgColor='#1A6CE8'
          btnWidth={'95%'}
          isBtnDisabled={isRestBtnDisabled}
          onClick={restNewPassword}
         />
         </Box>
         </Box>
      </Box>
   
  </Box>
  )
}

const style = {
  profileMainContainer:{
    width:'100%',
    height:'auto',
    overflowX:'hidden'
  }
}

export default ProfilePage