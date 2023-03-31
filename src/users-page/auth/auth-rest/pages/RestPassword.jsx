import { Box, CardMedia, Divider, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../../../components/InputField'
import companyLogoImage from '../../../../assets/image/logo.png'
import { handleResponsiveness } from '../../styles/loginStyle'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { restPassword } from '../../../../redux/features/authSlice'
import {toast} from 'react-toastify'
import ActionButton from '../../../components/ActionButton'
const RestPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isValid,setIsValid] = useState(false)
  const [isBtnDisabled,setIsBtnDisabled]= useState(true)
  const [confirmPassword,setConfirmPassword]= useState('')
  const [newPasswordData,setNewPassWordData]=useState({
    phoneNumber:'',
    newPassword:''
  })

  const handleRestingPassword=()=>{
      if(newPasswordData.phoneNumber!==''&&newPasswordData.newPassword!==''&&confirmPassword!==''){
          if(newPasswordData.newPassword===confirmPassword){
            console.log(newPasswordData)
            dispatch(restPassword({toast,navigate,newPasswordData}))
             setNewPassWordData({phoneNumber:'',newPassword:''})
             setConfirmPassword('')
          }else console.log('password is not match')
      }else alert('please first fill the whole inputs')
  }

  useEffect(()=>{
     if(newPasswordData.phoneNumber!==''&& newPasswordData.newPassword!=='' 
       && confirmPassword!==''&& isValid){
        setIsBtnDisabled(false)
     }else setIsBtnDisabled(true)
  },[newPasswordData,isValid,confirmPassword])

  return (
  <Box sx={style.restPasswordContainer}>
       <Box sx={style.companyLogoContainer}>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
      <Box sx={style.cardContainer}>
      <Paper sx={style.restPasswordCard}>
       <Typography sx={{color:'#1A6CE8',fontWeight:'bold',marginTop:'10px',marginBottom:'20px'}} variant='h6'>Rest Password</Typography>
        <Divider sx={{width:'100%',marginBottom:'20px'}}/>
            <InputField
             inputLabel={'PhoneNumber'}
             type='phoneNumber'
             setValidation={setIsValid}
             inputValue={newPasswordData?.phoneNumber}
             setValue={(e)=>setNewPassWordData({...newPasswordData,'phoneNumber':e.target.value})}
             
           />
           <InputField
             inputLabel={'Enter new password'}
             type='password'
             setValidation={setIsValid}
             inputValue={newPasswordData?.newPassword}
             setValue={(e)=>setNewPassWordData({...newPasswordData,'newPassword':e.target.value})}
           />
            <InputField
             inputLabel={'Confirm new password'}
             type='password'
             setValidation={setIsValid}
             inputValue={confirmPassword}
             setValue={(e)=>setConfirmPassword(e.target.value)}
           />
           <Box sx={{width:'100%',marginBottom:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <ActionButton
              btnLabel={'Rest'}
              onClick={handleRestingPassword}
              btnWidth={'80%'}
              isBtnDisabled={isBtnDisabled}
              />
           </Box>
      </Paper>
      </Box>
    </Box>
  )
}

const style={
  restPasswordContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    gap:'20px'
  },
  restPasswordCard:{
    width:handleResponsiveness('90%','400px'),
    height:'auto',
    borderRadius:'5px',
    border:'solid 1px rgba(0,0,0,0.4)',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'-50px',
    gap:'20px'
  
  },

  companyLogoContainer:{
   width:'120px',
   height:'70px',
   marginLeft:'40px',
   marginTop:'30px'
  },
  companyLogoImage:{
    width:'100%',
    height:'100%'
  },
  btnContainer:{
    width:'76%',
    height:'40px',
    borderRadius:'0px',
    marginTop:'0px',
    backgroundColor:'#1A6CE8',
     '&:hover':{
        backgroundColor:'#1A6CE8'           
      },

    fontSize:'16px',
    color:'white',
    display:'flex',
    cursor:'pointer',
    marginLeft:'-4%'  
    
  },
  cardContainer:{
     width:'100%',
     height:'90%',
     display:'flex',
     justifyContent:'center',
     alignItems:'center'
  }
}

export default RestPassword