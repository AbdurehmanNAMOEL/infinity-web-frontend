import { Paper, Typography } from '@mui/material'
import React from 'react'
import { handleResponsiveness } from '../../../../auth/styles/signUpStyle'
import { useSelector } from 'react-redux'

const AnsweredSurveyCard = ({questionNumber,isApproved}) => {
    const {isLightMode,modeColor}= useSelector(state=>state.auth)
  return (
   <Paper sx={[style.answeredSurveyCardContainer,{backgroundColor:isLightMode?'white':'#333'}]}>
     <Typography sx={{color:isLightMode?'#1e1e1e':'white',fontWeight:'bolder',marginLeft:'20px'}}>
       <span>Question</span>
       <span style={{marginLeft:'20px'}}>{questionNumber}</span>
     </Typography>
     <Typography sx={{marginRight:'20px'}}>
      {isApproved?  
       <span style={{color:'green',fontWeight:'bolder'}}>Approved</span>:
       <span style={{color:'red',fontWeight:'bolder'}}>Pending</span>
       }
     </Typography>
   </Paper>
  )
}
const style={
    answeredSurveyCardContainer:{
        width:handleResponsiveness('90%','80%'),
        height:handleResponsiveness('100px','120px'),
        marginBottom:'20px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
}
export default AnsweredSurveyCard