import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../../../../users-page/components/InputField'
import ActionButton from '../../../../users-page/components/ActionButton'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import { signUpAdmin } from '../../../../redux/features/adminSlice'
import { handleResponsiveness } from '../../../../users-page/auth/styles/loginStyle'
const AdminSignUp = () => {
    const [isFormValid,setIsFormValid]= useState(false)
    const [isBtnDisabled,setIsBtnDisabled]= useState(true)
    const [confirmPassword,setConfirmPassword]= useState('')
    const dispatch = useDispatch()
    const [adminSignUpData,setAdminSignUpData]= useState({
        "firstName":'',
        "lastName":'',
        "phoneNumber":'',
        "password":'',
        "promotedBy":JSON.parse(localStorage.getItem('admin'))?.id 
    })

    useEffect(()=>{
      if(adminSignUpData.firstName!==''&& adminSignUpData.lastName!==''&&
         adminSignUpData.phoneNumber!==''&& adminSignUpData.password!==''&&
         isFormValid){
         setIsBtnDisabled(false)
      }else setIsBtnDisabled(true)
    },[adminSignUpData,isFormValid])
    

    const handleNewAdminSignUp=()=>{
     dispatch(signUpAdmin({toast,adminSignUpData}))
     setAdminSignUpData({
        "firstName":'',
        "lastName":'',
        "phoneNumber":'',
        "password":'',
        "promotedBy":JSON.parse(localStorage.getItem('admin'))?.id 
    })
    }

console.log(adminSignUpData);
  return (
   <Paper sx={style.adminSignUpContainer}>
      <Typography variant='h6' sx={{marginTop:'20px',fontWeight:'bolder'}}>New Admin</Typography>
      <Divider sx={{backgroundColor:'#DFDFDF',width:'100%',marginBottom:'20px'}}/>
       <Box sx={style.inputFieldContainer}>
        <InputField
         inputLabel={'FirstName'}
         type={'name'}
         width={'100%'}
         setValidation={setIsFormValid}
         inputValue={adminSignUpData?.firstName}
         setValue={(e)=>setAdminSignUpData({...adminSignUpData,'firstName':e.target.value})}
        />
      </Box> 
       <Box sx={style.inputFieldContainer}>
        <InputField
         inputLabel={'LastName'}
         type={'name'}
         width={'100%'}
         setValidation={setIsFormValid}
         inputValue={adminSignUpData?.lastName}
         setValue={(e)=>setAdminSignUpData({...adminSignUpData,'lastName':e.target.value})}
        />
      </Box> 

       <Box sx={style.inputFieldContainer}>
        <InputField
         inputLabel={'PhoneNumber'}
         type={'phoneNumber'}
         width={'100%'}
         setValidation={setIsFormValid}
         inputValue={adminSignUpData?.phoneNumber}
         setValue={(e)=>setAdminSignUpData({...adminSignUpData,'phoneNumber':e.target.value})}
        />
      </Box> 

        <Box sx={style.inputFieldContainer}>
        <InputField
         inputLabel={'password'}
         type={'password'}
         width={'100%'}
         setValidation={setIsFormValid}
         inputValue={adminSignUpData?.password}
         setValue={(e)=>setAdminSignUpData({...adminSignUpData,'password':e.target.value})}
        />
      </Box> 
      <Box sx={{width:'80%',marginBottom:'40px'}}>
       <ActionButton
         btnLabel={'Add'}
         btnWidth={'95%'}
         isBtnDisabled={isBtnDisabled}
         onClick={handleNewAdminSignUp}
       />
      </Box> 
   </Paper>
  )
}

const style = {
  adminSignUpContainer:{
     width:handleResponsiveness('90%','35%'),
     height:'auto',
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     marginLeft:'-5%',
     gap:'20px'
},
inputFieldContainer:{
    width:'80%'
}
}
export default AdminSignUp