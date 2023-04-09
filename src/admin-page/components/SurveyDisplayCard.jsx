import { Box, Divider, Paper, Typography, useStepperContext } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSurvey } from '../../redux/features/adminSlice'
import { handleResponsiveness } from '../../users-page/auth/styles/loginStyle'
import {toast} from 'react-toastify'
const SurveyDisplayCard = ({
   id,questionTitle,questions,isDeletingApproved,createdAt,setIsModalVisible,
   setPreviewData,setIsQuestionPreviewed
}) => {
    const dispatch = useDispatch()

    let date=new Date(createdAt);
    let newDateValue = date.toString().split(' ')
    let surveyCreatedTime=`${newDateValue[0]} ${newDateValue[1]} ${newDateValue[2]} ${newDateValue[3]}` 

    const handleDeletingApproved=()=>{
      setIsModalVisible(true) 
    }

    console.log(id);
    const handlePreview=()=>{
        setPreviewData(questions)
        setIsQuestionPreviewed(true)
         if(isDeletingApproved){
            dispatch(deleteSurvey({id,toast}))
      }
    }

 

   useEffect(()=>{
        
    },[isDeletingApproved,questions])

  return (
      <Paper key={id} sx={[style.surveyDisplayContainer]}>
         <Box onClick={handlePreview}  sx={style.surveyTitleContainer}>
           <Typography sx={style.surveyTitle}>{questionTitle}</Typography> 
            <Typography sx={style.preview}>Preview</Typography> 
                      
         </Box>
          <Divider sx={{width:'100%'}}/>
          <Box sx={{display:'flex',fontWeight:'12px',gap:'20px'}}>
             <Typography>CreatedOn</Typography>
             <Typography>{surveyCreatedTime}</Typography> 
          </Box>  
          <Box sx={{display:'flex',width:'60%',fontWeight:'12px',gap:'20px'}}>
             <Typography>Questions</Typography>
             <Typography>{questions?.length}</Typography> 
          </Box>  
         <Box sx={{
            display:'flex',
            width:'90%',
            alignItems:'center',
            gap:'50px',
            marginRight:'20px',
            marginBottom:'20px',
            justifyContent:'space-between'
            }}>
            <Typography sx={{marginLeft:'16px',color:'#1A6CE8',fontWeight:'bolder',cursor:'pointer'}}>Edit</Typography>
            <Typography 
             onClick={handleDeletingApproved} 
              sx={{marginLeft:'16px',color:'red',cursor:'pointer',fontWeight:'bolder'}}>Delete</Typography>
         </Box>
     </Paper>
  )
}


const style ={
 surveyDisplayContainer:{
   justifyContent:'space-between',
   border:'solid 1px rgba(0,0,0,0.1)',
   width:handleResponsiveness('50%','100%'),
   display:'flex',
   alignItems:'center',
   height:'200px', 
   flexDirection:'column',
},

surveyTitleContainer:{
   display:'flex',
   width:'90%',
   height:'30px',
   justifyContent:'space-between',
   gap:handleResponsiveness('0px','50px'),
   marginTop:handleResponsiveness('20px','10px'),
   alignItems:'center'
},
surveyTitle:{
   width:'30%',
   fontWeight:'bolder'
},
surveyQuestionNumber:{
   width:handleResponsiveness('40%','90%'),
   display:'flex',
   alignItems:'center',
   justifyContent:'space-between'
},
preview:{
   color:'#1977FC',
   cursor:'pointer',
   fontWeight:'bolder'
}

   
}
export default SurveyDisplayCard