import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const SurveyCard = ({title,question}) => {
  const {isLightMode} = useSelector(state=>state.auth)
  console.log(question);
  
  
  const handleTime=(time)=>{
      let date=new Date(time);
      let newDateValue = date.toString().split(' ')
      let convertedTime=`${newDateValue[0]} ${newDateValue[1]} 
                           ${newDateValue[2]} ${newDateValue[3]}` 
    return convertedTime
  }

  return (
    <Paper sx={[style.surveyCardContainer,
    {backgroundColor:isLightMode?'white':'#333',
    border:`solid 1px ${isLightMode?'rgba(0,0,0,0.5)':'#ACACAC'}`}]}>
      <Box  sx={{
        width:'100%',
        height:'60px',
        backgroundColor:'#1A6CE8',
        padding:'10px',
        borderRadius:'5px 5px 0px 0px',
        display:'flex',
        alignItems:'center'
        }}>
      <Typography sx={{color:'white',fontWeight:'bold'}}>
        {title}
      </Typography>
      </Box>
       <Typography sx={{
        display:'flex',
        color:isLightMode?"#1e1e1e":'white',
        gap:'20px',
        fontSize:'14px'
        }}>
        <p>Created On</p> <span>{handleTime(question?.createdAt)}</span>
      </Typography>
       <Typography sx={{
        display:'flex',
        color:isLightMode?"#1e1e1e":'white',
        gap:'20px',
        fontSize:'14px',
        width:'80%'
        }}>
        <p>End At</p> <span>{handleTime(question?.endAt)}</span>
      </Typography>
      <Typography sx={{
        color:isLightMode?"#1e1e1e":'white',
         width:'80%'
        }}>
        {`Question: ${question?.questions?.length}`}
      </Typography>
    </Paper>
  )
}

const style={
    surveyCardContainer:{
        width:'250px',
        height:'220px',
        display:'flex',
        flexDirection:'column',
        gap:'20px',
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