import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, IconButton, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSurveyResponse, getAllSurveyQuestions, getAllUsers,verifySurveyResponse} from '../../redux/features/adminSlice';
import {toast} from 'react-toastify'
const DropDown = ({data,setModalOpen,isRejected,isVerified,userId}) => {
  const [isExpanded,setIsExpanded]= useState(false)
  const [height,setHeight]= useState('60px')
  const {modeColor,isLightMode,generatedSurvey}= useSelector(state=>state.auth)
  const {users}= useSelector(state=>state.admin)
  const [userData,setUserData]= useState([])
 
  const dispatch = useDispatch()
  let id = data?.map(surveyResponse=>surveyResponse.surveyResponseId)[0];

  const handleExpand=()=>{
    setIsExpanded(prev=>!prev)
  }
  useEffect(()=>{
    if(isExpanded){
        setHeight('auto')
    }else setHeight('60px')
  },[height,isExpanded])

  const handleVerifySurveyResponse=()=>{
    const surveyId={
     "surveyResponseId":id,
    }
    dispatch(verifySurveyResponse({surveyId,toast}))
  }


  const handleRejecting=()=>{
    setModalOpen(true)
    if(isRejected){
      dispatch(deleteSurveyResponse({id,toast}))
    }
  }
     useEffect(()=>{
      dispatch(getAllSurveyQuestions())
    },[generatedSurvey,isVerified])

   useEffect(()=>{
    dispatch(getAllUsers())
    setUserData(users?.filter(info=>info.id===userId))
   },[])
    console.log(users);
   
  return (
    <Paper sx={[
        style.DropDownComponentContainer,
       {height:height},{backgroundColor:modeColor},
       {border:isLightMode?'solid 1px rgba(0,0,0,0.2)':'solid 1px #ACACAC'}]}>
     <Paper sx={{borderRadius:'0px',height:'45px',display:'flex',boxShadow:'none',justifyContent:'space-between',alignItems:'center'}}>
          <Typography sx={{marginLeft:'20px',marginTop:'10px',display:'flex',flexDirection:'column',gap:'5px'}}>
          <Typography sx={{fontWeight:'bolder'}}>{`Name: ${(userData[0]?.firstName)}`}</Typography>
          <Typography>{`phone: ${userData[0]?.phoneNumber}`}</Typography>
        </Typography>
        {!isExpanded?
        <IconButton onClick={handleExpand}><ArrowForwardIosIcon sx={{width:'14px',height:'14px'}}/></IconButton>:
        <IconButton onClick={handleExpand}><ExpandMoreIcon/></IconButton>}
     </Paper>
     <Divider sx={{marginTop:'15px',marginBottom:'10px'}}/>
     <Box sx={{width:'100%',display:'flex',marginBottom:'10px',flexDirection:'column',alignItems:'center'}}>
    
      {data?.map((answers,index)=>
         answers.answer.map(data=>
           data.includes('files')?  
            <img 
               alt=''
              style={{width:'40%',height:'40%',marginBottom:'10px'}} 
              src={`http://localhost:3000/${data}`}/>:
           
           <Typography sx={{padding:'6px',width:'80%',color:isLightMode?'#1e1e1e':'white'}}>{data}</Typography>
          )
     
         
      )}
      
     </Box>{isVerified?
     <Box sx={style.btnContainer}>
      <Typography  onClick={handleRejecting}  sx={style.rejectBtn}>Reject</Typography>
      <Typography 
         onClick={handleVerifySurveyResponse} 
         sx={style.approveBtn}>Approve</Typography>
     </Box>:''}
    </Paper>
  )
}

const style = {
  DropDownComponentContainer:{
    display:'flex',
    flexDirection:'column',
    transition:'all 0.7s',
    width:'100%',
    overflowY:'hidden'      
  },
  approveBtn:{
    marginRight:'20px',
    fontWeight:'bolder',
    color:'green',
    cursor:"pointer"
  },
  rejectBtn:{
    marginLeft:'20px',
    fontWeight:'bolder',
    color:'red',
    cursor:"pointer"
  },
  btnContainer:{
    width:'100%', 
    height:'40px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  }
}
export default DropDown