import { Box, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSettingValue, updateSetting } from '../../redux/features/setting'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import InputField from '../../users-page/components/InputField'
import ActionButton from '../../users-page/components/ActionButton'
import {toast} from 'react-toastify'
function Setting({isDrawerOpen,closeDrawer}) {
    const {settingData}= useSelector(state=>state.setting)
    const dispatch = useDispatch()
    const [isBtnDisabled,setIsBtnDisabled]= useState(false)
    const [rewardPerCredit,setRewardPerCredit]=useState(settingData?.rewardPerCredit)
    const [minAmountForCashOut,setMinAmountForCashOut]=useState(settingData?.minAmountForCashOut)
    
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

  return (
   <Box sx={style.settingMainContainer}>
      <SideBar 
        isDrawerOpen={isDrawerOpen} 
        closeDrawer={closeDrawer}
        drawerWidth={isDrawerOpen?200:0}
      />
     <Box sx={{display:'flex',width:'100%',position:'relative',flexDirection:'column'}}>
        <Box sx={{position:'fixed',width:`${isDrawerOpen?100:100}%`,zIndex:200}}> 
         <Header closeDrawer={()=>closeDrawer(prev=>!prev)}/>
         <Paper sx={{
            marginTop:handleResponsiveness('120px','100px'),
            width:handleResponsiveness('90%','50%'),
            marginLeft:'2%'}}>
           <Box sx={
            {width:'100%',
             height:'200px',
             display:'flex',
             marginTop:'20px',
             flexDirection:handleResponsiveness('column','row'),
             justifyContent:'space-around',
             alignItems:'center'
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
    height:{md:'auto',xs:'auto'},
    zIndex:3000
 }
}

export default Setting