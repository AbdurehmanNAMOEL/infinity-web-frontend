import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { FaUserAstronaut } from 'react-icons/fa'

import { Box, Card, CardMedia ,Paper, Typography } from '@mui/material'
import InputField from '../../../../users-page/components/InputField'
import ButtonStyled from '../../../../users-page/components/ButtonStyled'
import LogoImage from '../../../../assets/image/logo.png'
import { loginAdmin } from '../../../../redux/features/adminSlice'
import LoadingAnimation from '../../../../shared/Components/LoadingAnimation'
import { handleResponsiveness } from '../../../../users-page/auth/styles/loginStyle'
const AdminLogin = () => {
 
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {loading} = useSelector(state=>state.admin)
   const [userData,setUserData]= useState({phoneNumber:'',password:'',})
   const handleSubmit=()=>{
    
     if(userData.phoneNumber!==''&&userData.password!==''){
         dispatch(loginAdmin({userData,toast,navigate}))
         setUserData({phoneNumber:'',password:''})
     }
       
   }

   
  return (
   <Box sx={style.adminLoginContainer}>  
      <Paper sx={style.adminLoginLogoContainer}>
      <Card onClick={()=>navigate('/')} sx={{width:'150px',height:'60px',boxShadow:'none',marginLeft:'10px'}}>
        <CardMedia image={LogoImage} sx={{width:'80%',height:'100%'}}/>
      </Card>
      </Paper>
      <Paper sx={style.adminLoginCard}>
       <Box sx={style.adminLoginLogo}>
         <FaUserAstronaut style={style.loginIcon}/>
         <Typography sx={{marginTop:'16px',color:'#1A6CE8',fontWeight:'bolder'}}>Admin</Typography>
       </Box>
       {/* <div style={{width:'100%',height:'1px',backgroundColor:'rgba(0,0,0,0.5)'}}/> */}
        <Box sx={style.loginInputFieldContainer}>                    
          <InputField 
            inputLabel={'Phone Number'}
            type='phoneNumber'
            inputValue={userData.phoneNumber}
            setValue={(e)=>setUserData({...userData,"phoneNumber":e.target.value})}
           />
        </Box>
        <Box sx={style.loginInputFieldContainer}>                    
          <InputField 
            inputLabel={'password'}
            type='password'
            inputValue={userData.password}
            setValue={(e)=>setUserData({...userData,"password":e.target.value})}
           />
        </Box>
        <Box sx={
          {
            width:'80%',
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center',
          }}>
            {!loading?'':<LoadingAnimation/>}
            <ButtonStyled 
               label={'Login'} 
               bgColor='#1A6CE8' 
               btnWidth={'95%'}
               setValue={handleSubmit}
               />
        </Box>
  </Paper>
</Box>
  )
}

const style = {
  adminLoginContainer:{
    width:'100%',  
    height:handleResponsiveness('auto','100vh'), 
    display:'flex',
    alignItems:'center',
    boxShadow:'',
    backgroundColor:'white',
    flexDirection:'column',
  },
  adminLoginCard:{
    width:handleResponsiveness('90%','400px') ,
    height:'450px',
    display:'flex',
    gap:'20px',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    backgroundColor:'white',
    border:'solid 1px rgba(0,0,0,0.5)',
    borderRadius:'5px'
  },
  loginInputFieldContainer:{
    width:'100%',
    height:'35px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'-5px',
    marginBottom:'26px'
  },
  adminLoginLogoContainer:{
    width:'100%',
    height:'70px',
    marginBottom:'50px',
    display:'flex',
    alignItems:'center'
    // boxShadow:'none',
   
  },
  adminLoginLogo:{
    width:'80%',
    height:'120px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  loginIcon:{
    borderRadius:'100%',
    width:'80px',
    height:'80px',
    color:'white',
    backgroundColor:'#1A6CE8'
  }
}
export default AdminLogin