import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'

const Carousel = ({children,innerMargin,height}) => {
    const {isLightMode,modeColor} = useSelector(state=>state.auth)
  return (
 <Box sx={[style.ourWorkCardContainerWrapper,{ height:`${height}vh`}]}>
    <Box sx={[style.ourWorkCardContainer, { marginLeft:handleResponsiveness(`${innerMargin}px`,'0')}]}>{children}</Box>
</Box>
  )
}

const style ={
    ourWorkCardContainerWrapper:{
    width:'auto',
    marginTop:'16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:'50px',
    borderRadius:handleResponsiveness('none','100px 50px 150px 50px'),
    overflowX:handleResponsiveness('scroll','hidden'),
    overflowY:'hidden',
  },

   ourWorkCardContainer:{
    width:handleResponsiveness('auto','100%'),
    height:'90%',
    marginTop:'16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:'50px',
    borderRadius:'100px 50px 150px 50px',
  
    
  },
}

export default Carousel