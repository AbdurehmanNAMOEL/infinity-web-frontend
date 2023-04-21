import { Box, Divider,Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../../../../users-page/components/InputField'
import ActionButton from '../../../../users-page/components/ActionButton'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import { signUpAdmin } from '../../../../redux/features/adminSlice'
import { handleResponsiveness } from '../../../../users-page/auth/styles/loginStyle'
const AdminSignUp = ({closeModal}) => {
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
     dispatch(signUpAdmin({adminSignUpData,toast}))
     setAdminSignUpData({
        "firstName":'',
        "lastName":'',
        "phoneNumber":'',
        "password":'',
        "promotedBy":JSON.parse(localStorage.getItem('admin'))?.id 
    })
    }


  return (
   <Paper sx={style.adminSignUpContainer}>
      <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end',height:'30px',alignItems:'center'}}>
        <Box onClick={()=>closeModal(false)} sx={{
          height:'30px',
          width:'30px',
          borderRadius:"100%",
          display:'flex',
          justifyContent:'center',
          alignItems:"center",
          marginRight:'20px',
          backgroundColor:`#1A6CE8`,
          color:'white',
          marginTop:'20px',
          cursor:'pointer'

          }}>x</Box>
      </Box>
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
         setValue={(e)=>setAdminSignUpData({...adminSignUpData,'phoneNumber':`${e.target.value}`})}
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