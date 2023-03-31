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
  const [isFormValid,setFormValidation]= useState(false)
  const [userProfileEditedData,setUserProfileEditedData]=useState({
    'id':userProfileData?.map(data=>data?.id)[0],
    'firstName':userProfileData?.map(data=>data?.firstName)[0],
    'lastName':userProfileData?.map(data=>data?.lastName)[0],
    'phoneNumber':userProfileData?.map(data=>data?.phoneNumber)[0],
    'email':userProfileData?.map(data=>data?.email)[0],
    'gender':userProfileData?.map(data=>data?.gender)[0],
    'birthPlaceId':userProfileData?.map(data=>data?.birthPlaceId)[0]?.id,
    // 'educationalLevelId':userProfileData?.map(data=>data?.educationLevelId)[0]?.id,
    'incomeLevelId':userProfileData?.map(data=>data?.incomeLevelId)[0]?.id,
    'professionId':userProfileData?.map(data=>data?.professionId)[0]?.id,
    'religionId':userProfileData?.map(data=>data?.religionId)[0]?.id,
    'residenceCityId':userProfileData?.map(data=>data?.residenceCityId)[0]?.id

  })

    useEffect(()=>{
    let id = JSON.parse(localStorage.getItem("user"))?.id
     dispatch(getUserStaticData())
     dispatch(getUserProfileData({id}))

  },[])

  const dispatch = useDispatch()

   console.log(userProfileEditedData)

  
  const handleProfileEdit=()=>{
       let id = JSON.parse(localStorage.getItem("user"))?.id
       console.log(userProfileEditedData);
     dispatch(editUserProfile({id,userProfileEditedData}))
  }

  console.log(userProfileData?.map(data=>data?.id)[0])

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
            type='name'
            width='80%'
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.firstName}
            setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'firstName':e.target.value})}
          />
        </Box> 

         <Box sx={{display:'flex'}}>
          <InputField
            type='name'
            width='80%'
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.lastName}
            setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'lastName':e.target.value})}
          />
      
        </Box> 
         <Box sx={{display:'flex'}}>
          <InputField
            type='phoneNumber'
            width='80%'  
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.phoneNumber}
            setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'phoneNumber':e.target.value})}
          />
      
        </Box>  
        
         <Box sx={{display:'flex'}}>
          <InputField
            type='email'
            width='80%'
            setValidation={setFormValidation}
            inputValue={userProfileEditedData?.email}
            setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'email':e.target.value})}
          />
     
        </Box> 

         <Box sx={{display:'flex'}}>
          <InputField
            type='text'
            width='80%'
            setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'gender':e.target.value})}
            inputValue={userProfileEditedData?.gender}
          />
        
        </Box>
         <SelectorInput
          label={'Birth Place'}
          selectorWidth={'77%'}
          optionList={userStaticData?.birthPlaces}
          inputValue={userProfileEditedData?.birthPlaceId}
          setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'birthPlaceId':e.target.value})}
         />

          <SelectorInput
          label={'Income Level'}
          selectorWidth={'77%'}
          optionList={userStaticData?.incomeLevels}
          inputValue={userProfileEditedData?.incomeLevelId}
          setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'incomeLevelId':e.target.value})}
         />

          {/* <SelectorInput
          label={'Educational Level'}
          selectorWidth={'77%'}
          optionList={userStaticData?.educationLevels}
          inputValue={userProfileEditedData?.educationalLevelId}
          setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'educationalLevelId':e.target.value})}
         /> */}

          <SelectorInput
          label={'Profession'}
          selectorWidth={'77%'}
          optionList={userStaticData?.professions}
          inputValue={userProfileEditedData?.professionId}
          setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'professionId':e.target.value})}
         />

        <SelectorInput
          label={'Martial Status'}
          selectorWidth={'77%'}
          optionList={userStaticData?.martialStatuses}
          inputValue={userProfileEditedData?.martialStatusId}
          setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'martialStatusId':e.target.value})}
         />

          <SelectorInput
          label={'Religion'}
          selectorWidth={'77%'}
          optionList={userStaticData?.religions}
          inputValue={userProfileEditedData?.religionId}
          setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'religionId':e.target.value})}
         />

         <SelectorInput
          label={'Religion'}
          selectorWidth={'77%'}
          optionList={userStaticData?.residenceCities}
          inputValue={userProfileEditedData?.residenceCityId}
          setValue={(e)=>setUserProfileEditedData({...userProfileEditedData,'residenceCityId':e.target.value})}
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