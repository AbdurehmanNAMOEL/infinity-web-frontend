import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserProfile, getUserProfileData, getUserStaticData } from '../../../../redux/features/authSlice'
import InputField from '../../../components/InputField'
import NavBar from '../../../components/NavBar'
import ButtonStyled from '../../../components/ButtonStyled'
import SelectorInput from '../../../components/SelectorInput'
const ProfilePage = ({isScrolling}) => {
  const {modeColor,userStaticData,userProfileData}= useSelector(state=>state.auth)

  const [userProfileEditedData,setUserProfileEditedData]=useState({
    'firstName':userProfileData?.map(data=>data?.firstName)[0],
    'lastName':userProfileData?.map(data=>data?.lastName)[0],
    'phoneNumber':userProfileData?.map(data=>data?.phoneNumber)[0],
    'email':userProfileData?.map(data=>data?.email)[0],
    'gender':userProfileData?.map(data=>data?.gender)[0],
    'birthPlaceId':userProfileData?.map(data=>data?.birthPlaceId),
    'educationalLevelId':userProfileData?.map(data=>data?.educationLevelId),
    'incomeLevelId':userProfileData?.map(data=>data?.incomeLevelId),
    'professionId':userProfileData?.map(data=>data?.professionId),
    'religionId':userProfileData?.map(data=>data?.religionId),
    'residenceCityId':userProfileData?.map(data=>data?.residenceCityId)

  })
    const [userData,setUserData]= useState([])
    useEffect(()=>{
    setUserData(JSON.parse(localStorage.getItem("user")))
  },[])

  const dispatch = useDispatch()

  useEffect(()=>{
    let id = userData?.id
   dispatch(getUserStaticData())
   dispatch(getUserProfileData({id}))
  },[userData])


  
  const handleProfileEdit=()=>{
     let id = userData?.id
     dispatch(editUserProfile({id,userProfileEditedData}))
  }

  console.log(userProfileData)

  // const setInitialValue=()=>{
  //     userStaticData?.birthPlaces?.map(data=>
  //   {if(data.id===userProfileData.map(data=>data.birthPlaceId)[0]){
  //     return data.en
  //   } else return data
  // }
  //   )
  
  // }
  return (
  <Box sx={[style.profileMainContainer,{backgroundColor:modeColor}]}>
     <NavBar isScrolling={isScrolling}/>
     <Box sx={{width:'100%',marginTop:'90px',display:'flex',justifyContent:'center',alignItems:'center', height:'40vh',backgroundColor:'#1A6CE8'}}>
         <Typography variant='h3' sx={{color:'white'}}>My Profile</Typography>
      </Box>
      <Box sx={{flexDirection:'column',marginTop:'10px',height:'auto',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
       
        <Box sx={{
          height:'auto',
          width:'50%',
          display:'flex',
          flexDirection:'column',
          gap:'10px',
          }}>
         <Box sx={{display:'flex'}}>
          <InputField
            type='text'
            width='80%'
            setValue={(e)=>setUserProfileEditedData({'firstName':e.target.value})}
            inputValue={userProfileEditedData?.firstName}
          />
        </Box> 

         <Box sx={{display:'flex'}}>
          <InputField
            type='text'
            width='80%'
            setValue={(e)=>setUserProfileEditedData({'lastName':e.target.value})}
            inputValue={userProfileEditedData?.lastName}
          />
      
        </Box> 
         <Box sx={{display:'flex'}}>
          <InputField
            type='phoneNumber'
            width='80%'  
            setValue={(e)=>setUserProfileEditedData({'phoneNumber':e.target.value})}
            inputValue={userProfileEditedData?.phoneNumber}
          />
      
        </Box>  
        
         <Box sx={{display:'flex'}}>
          <InputField
            type='email'
            width='80%'
            setValue={(e)=>setUserProfileEditedData({'email':e.target.value})}
            inputValue={userProfileEditedData?.email}
          />
     
        </Box> 

         <Box sx={{display:'flex'}}>
          <InputField
            type='text'
            width='80%'
            setValue={(e)=>setUserProfileEditedData({'gender':e.target.value})}
            inputValue={userProfileEditedData?.gender}
          />
        
        </Box>
         <SelectorInput
          label={'Birth Place'}
          selectorWidth={'77%'}
          optionList={userStaticData?.birthPlaces}
          inputValue={userProfileEditedData?.birthPlaceId}
          setValue={(e)=>setUserProfileEditedData({'birthPlaceId':e.target.value})}
         />

          <SelectorInput
          label={'Income Level'}
          selectorWidth={'77%'}
          optionList={userStaticData?.incomeLevels}
          inputValue={userProfileEditedData?.incomeLevelId}
          setValue={(e)=>setUserProfileEditedData({'incomeLevelId':e.target.value})}
         />

          <SelectorInput
          label={'Educational Level'}
          selectorWidth={'77%'}
          optionList={userStaticData?.educationLevels}
          inputValue={userProfileEditedData?.educationalLevelId}
          setValue={(e)=>setUserProfileEditedData({'educationalLevelId':e.target.value})}
         />

          <SelectorInput
          label={'Profession'}
          selectorWidth={'77%'}
          optionList={userStaticData?.professions}
          inputValue={userProfileEditedData?.professionId}
          setValue={(e)=>setUserProfileEditedData({'professionId':e.target.value})}
         />

        <SelectorInput
          label={'Martial Status'}
          selectorWidth={'77%'}
          optionList={userStaticData?.martialStatuses}
          inputValue={userProfileEditedData?.martialStatusId}
          setValue={(e)=>setUserProfileEditedData({'martialStatusId':e.target.value})}
         />

          <SelectorInput
          label={'Religion'}
          selectorWidth={'77%'}
          optionList={userStaticData?.religions}
          inputValue={userProfileEditedData?.religionId}
          setValue={(e)=>setUserProfileEditedData({'religionId':e.target.value})}
         />

         <SelectorInput
          label={'Religion'}
          selectorWidth={'77%'}
          optionList={userStaticData?.residenceCities}
          inputValue={userProfileEditedData?.residenceCityId}
          setValue={(e)=>setUserProfileEditedData({'residenceCityId':e.target.value})}
         />

         <ButtonStyled
          label={'Edit'}
          bgColor='#1A6CE8'
          btnWidth='77%'
          setValue={handleProfileEdit}
         />
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