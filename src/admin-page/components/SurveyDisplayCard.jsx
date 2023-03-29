import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteSurvey } from '../../redux/features/adminSlice'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'

const SurveyDisplayCard = ({id,questionTitle,questions,index}) => {
    const dispatch = useDispatch()

  return (
      <Paper key={id} sx={style.surveyDisplayContainer}>
         <Box sx={style.surveyTitleContainer}>
           <Typography sx={style.surveyNumber}>{`Q${index+1}`}</Typography>
             {questionTitle}         
         </Box>
         <Box sx={style.surveyQuestionNumber}>
            <Typography sx={{marginLeft:handleResponsiveness('16px')}} >{`Qn`}</Typography>
            <Typography>{questions.length}</Typography>
         </Box> 
         <Box sx={{display:'flex',alignItems:'center',gap:'50px',marginRight:'20px'}}>
            <Typography sx={{marginLeft:'16px',color:'#1A6CE8',fontWeight:'bolder',cursor:'pointer'}}>Edit</Typography>
            <Typography 
             onClick={()=>dispatch(deleteSurvey({id}))} 
              sx={{marginLeft:'16px',color:'red',cursor:'pointer',fontWeight:'bolder'}}>Delete</Typography>
         </Box>
     </Paper>
  )
}


const style ={
 surveyDisplayContainer:{
   justifyContent:'space-between',
   border:'solid rgba(0,0,0,0.1)',
   borderLeftWidth:'5px',
   borderLeftColor:'#1A6CE8',
   width:handleResponsiveness('100%','80%'),
   display:'flex',
   alignItems:handleResponsiveness('','center'),
   height:handleResponsiveness('200px','80px'), 
   marginBottom:'16px',
   flexDirection:handleResponsiveness('column','row')
},

surveyTitleContainer:{
   display:'flex',
   width:'20p%',
   alignItems:'center',
   gap:handleResponsiveness('0px','50px'),
   marginTop:handleResponsiveness('20px','0px')
},
surveyNumber:{
   marginLeft:'16px',
   width:'30%'
},
surveyQuestionNumber:{
   width:handleResponsiveness('40%','10%'),
   display:'flex',
   alignItems:'center',
   justifyContent:handleResponsiveness('space-between','space-around')
}

   
}
export default SurveyDisplayCard