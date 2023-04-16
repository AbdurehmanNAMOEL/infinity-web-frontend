import { Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const SurveyCard = ({title,questionNumber}) => {
  const {isLightMode} = useSelector(state=>state.auth)
  return (
    <Paper sx={[style.surveyCardContainer,
    {backgroundColor:isLightMode?'white':'#333',
    border:`solid 1px ${isLightMode?'rgba(0,0,0,0.5)':'#ACACAC'}`}]}>
      <Typography sx={{color:isLightMode?"#1e1e1e":'white'}}>{title}</Typography>
      <Typography sx={{color:isLightMode?"#1e1e1e":'white'}}>
        {`Question: ${questionNumber?.questions?.length}`}
      </Typography>
    </Paper>
  )
}

const style={
    surveyCardContainer:{
        width:'250px',
        height:'300px',
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        justifyContent:'center',
        alignItems:'center',
        border:'solid 1px rgba(0,0,0,0.5)',
        cursor:'pointer',
        '& .MuiPaper-root:hover':{
            scale:1.5,
            backgroundColor:'red'
        }
    }
}
export default SurveyCard