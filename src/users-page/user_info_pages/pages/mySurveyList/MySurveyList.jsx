import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnsweredSurvey } from '../../../../redux/features/adminSlice'
import { handleResponsiveness } from '../../../auth/styles/signUpStyle'
import AnsweredSurveyCard from './components/AnsweredSurveyCard'

const MySurveyList = ({isScrolling}) => {
    const {modeColor,userData} = useSelector(state=>state.auth)
    const {answeredSurvey}=useSelector(state=>state.admin)
    const [personalSurvey,setPersonalSurvey]= useState([])

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllAnsweredSurvey())
        setPersonalSurvey(answeredSurvey?.filter(data=>data?.userId===userData?.id))
    },[])

    console.log(personalSurvey);

  return (
  <Box sx={[style.mySurveyMainContainer,{backgroundColor:modeColor}]}>
      <NavBar isScrolling={isScrolling}/>
      <Box sx={style.mySurveyContainer}>
       <Typography variant='h2' sx={{fontWeight:'bold',color:'white'}}>
          My Survey
      </Typography>
      </Box>

   <Box sx={[style.answeredSurveyCardContainer,{backgroundColor:modeColor}]}>
          {personalSurvey?.map((data,index)=>
         <AnsweredSurveyCard 
          key={index} 
          questionNumber={data?.responses?.length}
          isApproved={!data?.isPendingVerification}
          />
        )}
   </Box>
        
   </Box>   
  )
}

const style={
 mySurveyMainContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
 mySurveyContainer: {
    width:'100%',
    height:'50vh',
    marginTop:'110px',
    backgroundColor:'#1A6CE8',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  answeredSurveyCardContainer:{
    width:handleResponsiveness('100%','80%'),
    height:'auto',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
    marginTop:'40px'

  }
}

export default MySurveyList