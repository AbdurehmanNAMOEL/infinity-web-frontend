import { Box, CardMedia, Divider,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfile, getUserProfileData, getUserStaticData } from '../../../redux/features/authSlice'
import ButtonStyled from '../../components/ButtonStyled'
import SelectorInput from '../../components/SelectorInput'
import profileImage from '../../../assets/image/profile.svg'
import { handleResponsiveness } from '../styles/loginStyle'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { userSubmissionInitialProfileData } from './userProfileData'
import UseKey from '../../../hooks/keyEvents'
const UserProfileSubmissionPage = () => {
  const {modeColor,userData,userStaticData,userProfileData,isLightMode}= useSelector(state=>state.auth)
  const navigate=useNavigate()
  const [userPersonData,setUserPersonalData]=useState({})
  const dispatch = useDispatch()

  useEffect(()=>{
    let {id} =userData
   dispatch(getUserStaticData())
    dispatch(getUserStaticData())
   dispatch(getUserProfileData({id}))
  },[])

  const handleProfileEdit=()=>{
     let id = userData?.id
     let userProfileEditedData=userSubmissionInitialProfileData(id,userPersonData)
     dispatch(editUserProfile({id,userProfileEditedData,navigate,toast}))
  }

  UseKey('Enter',handleProfileEdit)

  return (
    <Box sx={[style.profileContainer,{backgroundColor:modeColor}]}>
         <Typography variant='h5' sx={{marginTop:'20px',color:isLightMode?'#1e1e1e':'white'}}>
          Personal Information </Typography>
         <Divider sx={{width:'80%',marginTop:'20px',fontWeight:'bolder'}}/>
         <Box sx={{
           height:'80vh',
           width:'100%',
           display:'flex',
           flexDirection:handleResponsiveness('column','row'),
      
           }}>
            <Box sx={{
              width:handleResponsiveness('100%','50%'),
              height:'100%',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
              }}>
              <CardMedia image={profileImage}
               sx={{width:handleResponsiveness('70%','90%'),
               height:handleResponsiveness('70%','70%')}}/>
            </Box>
            
            <Box sx={{
              width:handleResponsiveness('100%','50%'),
              overflowY:'scroll',
              gap:'20px',
              heigh:'600px',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center'
              }}>
             <Box sx={
              {
              display:'flex',
              marginTop:handleResponsiveness('300px','120px'),
              width:'100%',
              gap:'20px',
              flexDirection:'column',
              alignItems:'center'
              }}>
           {!userProfileData[0]?.birthPlaceId?    
              <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
              label={'Birth Place'}
              setValue={(e)=>setUserPersonalData({...userPersonData,'birthPlaceId':e.target.value})}
              inputValue={userPersonData?.birthPlaceId}
              optionList={userStaticData?.birthPlaces}
            />:null}
    
            
          {!userProfileData[0]?.educationLevelId? 
              <SelectorInput
                selectorWidth={handleResponsiveness('80%','50%')}
                label={'Educational Levels '}
                setValue={(e)=>setUserPersonalData({...userPersonData,
                  'educationLevelId':e.target.value})}
                inputValue={userPersonData?.educationLevels}
                optionList={userStaticData?.educationLevels}
              />:null}
   

            {!userProfileData[0]?.employmentStatusId? 
              <SelectorInput
                selectorWidth={handleResponsiveness('80%','50%')}
                label={'Employment Status'}
                setValue={(e)=>setUserPersonalData({...userPersonData,'employmentStatusId':e.target.value})}
                inputValue={userPersonData?.employmentStatuses}
                optionList={userStaticData?.employmentStatuses}
              />:null}
         
        {!userProfileData[0]?.incomeLevelId? 
            <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Income Levels'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'incomeLevelId':e.target.value})}
               inputValue={userPersonData?.incomeLevels}
               optionList={userStaticData?.incomeLevels}
             />:null}
    
         {!userProfileData[0]?.maritalStatusId? 
             <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Martial Statuses'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'maritalStatusId':e.target.value})}
               inputValue={userPersonData?.maritalStatuses}
               optionList={userStaticData?.maritalStatuses}
            />:null}
      
            {!userProfileData[0]?.professionId? 
              <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Profession'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'professionId':e.target.value})}
               inputValue={userPersonData?.professions}
               optionList={userStaticData?.professions}
              />:null}

          {!userProfileData[0]?.religionId? 
             <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Religion'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'religionId':e.target.value})}
               inputValue={userPersonData?.religions}
               optionList={userStaticData?.religions}
             />:null}
    
  
          {!userProfileData[0]?.residenceCityId? 
              <SelectorInput
                selectorWidth={handleResponsiveness('80%','50%')}
                label={'ResidenceCities'}
                setValue={(e)=>setUserPersonalData({...userPersonData,'residenceCityId':e.target.value})}
                inputValue={userPersonData?.residenceCities}
                optionList={userStaticData?.residenceCities}
              />:null}
    
         <Box sx={{display:'flex',width:handleResponsiveness('80%','50%'),justifyContent:'space-between'}}>
          <ButtonStyled 
            btnWidth={'120px'}
            setValue={()=>navigate('/')}
            bgColor={'#333333'}
            label={'Skip'}/> 
          
          <ButtonStyled 
          btnWidth={'120px'}
          setValue={handleProfileEdit}
          bgColor={'#1A6CE8'}
          label={'Submit'}/>       
         </Box> 
       </Box>
          </Box>
         </Box>
       </Box>
  )
}

const style ={
    profileContainer:{
       width:'100%',
       height:'100vh',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column'
    }
}

export default UserProfileSubmissionPage