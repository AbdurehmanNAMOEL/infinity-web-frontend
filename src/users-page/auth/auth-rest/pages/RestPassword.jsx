import { Box, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputField from '../../../components/InputField'
import companyLogoImage from '../../../../assets/image/logo.png'
import { handleResponsiveness } from '../../styles/loginStyle'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { restPassword } from '../../../../redux/features/authSlice'
import {toast} from 'react-toastify'
import ActionButton from '../../../components/ActionButton'
const RestPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isValid,setIsValid] = useState(false)
  const [isBtnDisabled,setIsBtnDisabled]= useState(true)
  
  const {id}= useParams()
  const [newPasswordData,setNewPassWordData]=useState({
    phoneNumber:id?.split('-')[0],
    newPassword:''
  })
   
  const handleRestingPassword=()=>{
    if(newPasswordData.phoneNumber!==''&&newPasswordData.newPassword!==''){
       if(id.split('-')[1]==='admin') restAdminPassword()
       else restUserPassword()  
       setNewPassWordData({phoneNumber:'',newPassword:''})
    }else alert('please first fill the whole inputs')
  }

  const restUserPassword=()=> dispatch(restPassword({navigate,toast,newPasswordData}))
  const restAdminPassword=()=> dispatch(restAdminPassword({toast,navigate,newPasswordData}))
  


  useEffect(()=>{
     if(newPasswordData.phoneNumber!=='' && newPasswordData.newPassword!==''&&isValid){
        setIsBtnDisabled(false)
     }else setIsBtnDisabled(true)
  },[newPasswordData,isValid])

  return (
  <Box sx={style.restPasswordContainer}>
       <Box sx={style.companyLogoContainer}>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
      <Box sx={style.cardContainer}>
      <Paper sx={style.restPasswordCard}>
       <Typography sx={{
        color:'#1A6CE8',
        fontWeight:'bold',
        marginTop:'10px',
        marginBottom:'20px'
        }} variant='h6'>Rest Password</Typography>
        <Divider sx={{width:'100%',marginBottom:'20px'}}/>
           <InputField
             inputLabel={'Enter new password'}
             type='password'
             setValidation={setIsValid}
             inputValue={newPasswordData?.newPassword}
             setValue={(e)=>setNewPassWordData({...newPasswordData,'newPassword':e.target.value})}
           />
           <Box sx={{
            width:'100%',
            marginBottom:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            }}>
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