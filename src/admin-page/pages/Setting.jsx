import { Box, Divider, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSettingValue, updateSetting } from '../../redux/features/setting'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import InputField from '../../users-page/components/InputField'
import ActionButton from '../../users-page/components/ActionButton'
import {toast} from 'react-toastify'
import { updatePassword } from '../../redux/features/adminSlice'
import { restPassword } from '../../redux/features/authSlice'
function Setting({isDrawerOpen,closeDrawer}) {
    const {settingData,rewardAndCheckOutValue}= useSelector(state=>state.setting)
    const dispatch = useDispatch()
    const [isValid,setIsValid]=useState(false)
    const [isBtnDisabled,setIsBtnDisabled]= useState(true)
    const [isPasswordRestBtnDisabled,setIsPasswordRestBtnDisabled]= useState(true)
    const [rewardPerCredit,setRewardPerCredit]=useState(settingData?.rewardPerCredit)
    const [minAmountForCashOut,setMinAmountForCashOut]=useState(settingData?.minAmountForCashOut)
    const [passwordValue,setPasswordValue]=useState({
      'password':'',
      'confirmPassword':''
    })
    
    useEffect(()=>{
        dispatch(getAllSettingValue())
    },[])

    const handleUpdatingWallet=()=>{
      const settingData={
        "rewardPerCredit":parseFloat(rewardPerCredit),
        "minAmountForCashOut": parseFloat(minAmountForCashOut)
       }
     dispatch(updateSetting({settingData,toast}))
  }
    useEffect(()=>{
     if(rewardPerCredit!==''&&rewardPerCredit!=='0'&& 
        minAmountForCashOut!==''&&minAmountForCashOut!=='0'){
         setIsBtnDisabled(false)
    }else setIsBtnDisabled(true)
    },[rewardPerCredit,minAmountForCashOut])

   
   const updateExistingPassword=()=>{
     const id=JSON.parse(localStorage.getItem('admin')).id
    let newPassword={
      'password':passwordValue?.password
    }
    alert('hello')
    dispatch(updatePassword({id,newPassword,toast}))
   }

  

   useEffect(()=>{
      if(passwordValue.password!=='' && passwordValue.confirmPassword!==''&& 
      passwordValue.password===passwordValue.confirmPassword && isValid ){
        setIsPasswordRestBtnDisabled(false)
      }else setIsPasswordRestBtnDisabled(true)
   },[passwordValue,isValid])
  return (
   <Box sx={style.settingMainContainer}>
      <SideBar 
        isDrawerOpen={isDrawerOpen} 
        closeDrawer={closeDrawer}
        drawerWidth={isDrawerOpen?200:0}
      />
     <Box sx={{display:'flex',width:'100%',height:'100vh',position:'relative',flexDirection:'column'}}>
            
        <Box sx={{position:'fixed',height:'100vh',width:`${isDrawerOpen?100:100}%`,zIndex:200}}> 
         <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         <Box sx={{display:'flex',flexDirection:'column',height:'100vh',overflowY:'scroll'}}>
         <Paper sx={{
            marginTop:handleResponsiveness('120px','100px'),
            width:handleResponsiveness('90%','50%'),
            marginLeft:handleResponsiveness('5%','15%')}}>
           <Box sx={
            {width:'100%',
             height:'200px',
             display:'flex',
             marginTop:'20px',
             flexDirection:handleResponsiveness('column','row'),
             justifyContent:'space-around',
             alignItems:'center',
          
             }}>
            <Box sx={{
              display:'flex',
              marginTop:'20px',
              marginBottom:'30px',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              gap:'10px',
              width:handleResponsiveness('100%','50%')

              }}>   
              <Typography sx={{fontSize:'16px',width:'80%'}}>RewardPerCredit(EB)</Typography>
            <Box sx={{width:'80%'}}>
             <TextField 
               sx={{height:'50px',width:handleResponsiveness('100%','100%')}}
               value={rewardPerCredit} 
               onChange={(e)=>setRewardPerCredit(e.target.value)}
               placeholder='please enter the reward value'
             />
             </Box>
           </Box>
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'10px',
            width:handleResponsiveness('100%','50%')
            }}>   
            <Typography sx={{fontSize:'16px',width:'80%'}}>MinAmountForCashOut(EB)</Typography>
            <Box sx={{width:'80%'}}>
             <TextField 
             sx={{height:'50px',width:handleResponsiveness('100%','100%')}}
               value={minAmountForCashOut} 
               onChange={(e)=>setMinAmountForCashOut(e.target.value)}
               placeholder='please enter the reward value'
             />
             </Box>
           </Box>
           </Box>
           <Box sx={{width:'100%',display:'flex',justifyContent:'center',height:'50px',marginTop:'40px'}}>
              <ActionButton
               btnLabel={'Edit'}
               btnWidth={'80%'}
               isBtnDisabled={isBtnDisabled}
               onClick={handleUpdatingWallet}
              />
           </Box>
         </Paper>
            <Paper sx={{width:handleResponsiveness('90%','50%'),
            display:'flex',
            flexDirection:'column',
            gap:'16px',
            marginLeft:handleResponsiveness('5%','15%'),
            marginTop:'20px',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'40px',
            height:'auto'
          
          }}>
          <Typography sx={{marginTop:'16px',fontWeight:'bolder'}}>UpdatePassword</Typography>
           <Box sx={{display:'flex',width:'80%'}}>
          <InputField
            type='password'
            width={handleResponsiveness('94%','90%')}
            inputLabel={'New Password'}
            setValidation={setIsValid}
            inputValue={passwordValue?.password}
            setValue={(e)=>setPasswordValue({...passwordValue,'password':e.target.value})}
          />
     
        </Box>
         <Box sx={{display:'flex',width:'80%'}}>
          <InputField
            type='password'
            width={handleResponsiveness('94%','90%')}
            inputLabel={'confirmPassword'}
            setValidation={setIsValid}
            inputValue={passwordValue?.confirmPassword}
            setValue={(e)=>setPasswordValue({...passwordValue,'confirmPassword':e.target.value})}
          />
     
        </Box>
        <Box sx={{width:handleResponsiveness('95%','90%'),marginBottom:'20px'}}>
          <Divider sx={{width:'100%'}}/>
         <ActionButton
          btnLabel={'Update'}
          bgColor='#1A6CE8'
          btnWidth={'95%'}
          isBtnDisabled={isPasswordRestBtnDisabled}
          onClick={updateExistingPassword}
         />
         </Box>
         </Paper> 
         </Box>
    </Box>
    </Box>
  </Box>
  )
}

const style={
  settingMainContainer:    {
    width:'100%',
    display:'flex',
    position:'relative',
    flexDirection:'row',
    height:{md:'100vh',xs:'auto'},
    zIndex:3000,
 }
}

export default Setting