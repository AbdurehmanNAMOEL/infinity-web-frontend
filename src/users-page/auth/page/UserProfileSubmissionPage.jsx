import { Box, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfile, getUserProfileData, getUserStaticData } from '../../../redux/features/authSlice'
import ButtonStyled from '../../components/ButtonStyled'
import SelectorInput from '../../components/SelectorInput'
import profileImage from '../../../assets/image/profile.svg'
import { handleResponsiveness } from '../styles/loginStyle'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const UserProfileSubmissionPage = () => {
    const {modeColor,userStaticData}= useSelector(state=>state.auth)
    const navigate=useNavigate()
    const [userPersonData,setUserPersonalData]=useState({})
    const dispatch = useDispatch()

    useEffect(()=>{
          dispatch(getUserStaticData())
    },[])
   const [userData,setUserData]= useState([])
    useEffect(()=>{
    setUserData(JSON.parse(localStorage.getItem("user")))
  },[])
      useEffect(()=>{
    let id = userData?.id
   dispatch(getUserStaticData())
   dispatch(getUserProfileData({id}))
  },[userData])

 const handleProfileEdit=()=>{
     let id = userData?.id
     let userProfileEditedData={
     "id":id,
     "birthPlaceId": userPersonData.birthPlaceId,
     "residenceCityId": userPersonData.residenceCityId,
     "religionId":userPersonData.religionId,
     "employmentStatusId": userPersonData.employmentStatusId,
     "incomeLevelId": userPersonData.incomeLevelId,
     "professionId": userPersonData.professionId
     }

     dispatch(editUserProfile({id,userProfileEditedData,navigate,toast}))
  }
    console.log(userPersonData)
  return (
    <Box sx={style.profileContainer}>
         <Typography variant='h5' sx={{marginTop:'20px'}}>Personal Information </Typography>
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
               sx={{width:handleResponsiveness('70%','90%'),height:handleResponsiveness('70%','70%')}}/>
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
              <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
              label={'Birth Place'}
              setValue={(e)=>setUserPersonalData({...userPersonData,'birthPlaceId':e.target.value})}
              inputValue={userPersonData?.birthPlaceId}
              optionList={userStaticData?.birthPlaces}
            />
    
            

              <SelectorInput
                selectorWidth={handleResponsiveness('80%','50%')}
                label={'Educational Levels '}
                setValue={(e)=>setUserPersonalData({...userPersonData,'educationLevelId':e.target.value})}
                inputValue={userPersonData?.educationLevels}
                optionList={userStaticData?.educationLevels}
              />
   

    
              <SelectorInput
                selectorWidth={handleResponsiveness('80%','50%')}
                label={'Employment Status'}
                setValue={(e)=>setUserPersonalData({...userPersonData,'employmentStatusId':e.target.value})}
                inputValue={userPersonData?.employmentStatuses}
                optionList={userStaticData?.employmentStatuses}
              />
    
            <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Income Levels'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'incomeLevelId':e.target.value})}
               inputValue={userPersonData?.incomeLevels}
               optionList={userStaticData?.incomeLevels}
             />
    

             <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Martial Statuses'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'maritalStatusId':e.target.value})}
               inputValue={userPersonData?.maritalStatuses}
               optionList={userStaticData?.maritalStatuses}
            />
 
      
    
              <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Profession'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'professionId':e.target.value})}
               inputValue={userPersonData?.professions}
               optionList={userStaticData?.professions}
              />
    
          
    
             <SelectorInput
               selectorWidth={handleResponsiveness('80%','50%')}
               label={'Religion'}
               setValue={(e)=>setUserPersonalData({...userPersonData,'religionId':e.target.value})}
               inputValue={userPersonData?.religions}
               optionList={userStaticData?.religions}
             />
    
  
    
              <SelectorInput
                selectorWidth={handleResponsiveness('80%','50%')}
                label={'ResidenceCities'}
                setValue={(e)=>setUserPersonalData({...userPersonData,'residenceCityId':e.target.value})}
                inputValue={userPersonData?.residenceCities}
                optionList={userStaticData?.residenceCities}
              />
    
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
       height:'100%',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column'
    }
}

export default UserProfileSubmissionPage