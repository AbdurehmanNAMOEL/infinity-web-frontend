import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NavBar from '../../../components/NavBar'
import ResponsiveContainer from '../../../components/ResponsiveContainer';
import { handleResponsiveness } from '../../../auth/styles/loginStyle';
import ActionButton from '../../../components/ActionButton';
import { getMyWalletBalance } from '../../../../redux/features/authSlice';

const MyWallet = ({isScrolling}) => {
  const {modeColor,isLightMode,myWalletBalance} = useSelector(state=>state.auth)
  const [isBtnDisabled,setIsBtnDisabled]= useState(true)  
  const dispatch = useDispatch()

 useEffect(()=>{
     dispatch(getMyWalletBalance())
     if(myWalletBalance?.balance>50){
       setIsBtnDisabled(false)
     }else setIsBtnDisabled(true)
 },[isBtnDisabled])

 
  return (
    <Box sx={[style.myWalletMainContainer,{backgroundColor:modeColor}]}>
     <NavBar isScrolling={isScrolling}/>
     <Box sx={{heigh:'auto',marginTop:'80px'}}>
       <ResponsiveContainer>
         <Box sx={style.walletIconContainer}>
           <AccountBalanceWalletIcon 
             sx={{width:'300px',height:'300px',color:'brown'}}/>
         </Box> 
         <Box sx={style.walletHeaderContainer}>
           <Typography variant='h2' 
            sx={{fontWeight:'bolder',color:'white'}}>
             My Wallet
            </Typography> 
          </Box>
       </ResponsiveContainer>

       <Paper sx={[style.walletValueDisplayContainer,{backgroundColor:isLightMode?'white':'#333',
        border:isLightMode?'solid 1px rgba(0,0,0,0.4)':'solid 1px rgba(255,255,255,0.4)',}]}>
         <Paper sx={style.balanceDisplayContainer}>
            <Box sx={{width:'40%',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
               <Typography>{'Balance:'}</Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
               <Typography>{`${myWalletBalance?.balance?myWalletBalance?.balance:0}EB`}</Typography>
            </Box>
         </Paper>

         <Paper sx={style.checkOutMinDisplayContainer}>
              <Box sx={style.checkoutTextContainer}>
               <Typography sx={{fontSize:handleResponsiveness('14px','16px')}}>
                CheckOut Min Balance
              </Typography>
            </Box>
            <Box sx={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
               <Typography>{`${myWalletBalance?.minAmountForCashOut?
                 myWalletBalance?.minAmountForCashOut:0}EB`}
              </Typography>
            </Box>
         </Paper>
         <Typography sx={style.checkoutErrorText}>
           Insufficient balance for cash out. Please earn some more
           and reach the cash our minimum to proceed
         </Typography>
         <ActionButton
           btnLabel={'Check Out'}
           btnWidth={'60%'}
           isBtnDisabled={isBtnDisabled}
         />
       </Paper>
      </Box>
  </Box>
  )
}

const style ={
  myWalletMainContainer:{
    width:'100%',
    height:'100vh',
    overflowX:'hidden'
  },
  walletIconContainer:{
    width:handleResponsiveness('100%','50%'),
    height:'100%',
    backgroundColor:'#1A6CE8',
    display:'flex',
    justifyContent:handleResponsiveness('center','flex-end'),
    alignItems:'center'        
  },
  walletHeaderContainer:{
    width:handleResponsiveness('100%','50%'),
    height:'100%',
    backgroundColor:'#1A6CE8',
    display:'flex',
    justifyContent:handleResponsiveness('center','flex-start'),
    marginLeft:handleResponsiveness('0px','-20px'),
    alignItems:'center',
    marginTop:handleResponsiveness('-20px','0px')
  },
  walletValueDisplayContainer:{
    width:handleResponsiveness('90%','60%'),
    marginLeft:handleResponsiveness('5%','20%'),
    height:'400px',
    marginTop:'50px',
    marginBottom:'20px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'40px',
    flexDirection:'column'
  },
  balanceDisplayContainer:{
   display:'flex',
   width:handleResponsiveness('90%','60%'),
   height:'40px',
   justifyContent:'space-around',
   alignItems:'center'
  },
  checkOutMinDisplayContainer:{
    display:'flex',
    width:handleResponsiveness('90%','60%'),
    height:'40px',
    justifyContent:'space-around',
    alignItems:'center'
  },
  checkoutTextContainer:{
    width:handleResponsiveness('60%','40%'),
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  checkoutErrorText:{
    width:handleResponsiveness('90%','60%'),
    fontSize:'14px',
    color:'red'
  }
}

export default MyWallet