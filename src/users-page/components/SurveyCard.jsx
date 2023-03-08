import { Paper, Typography } from '@mui/material'
import React from 'react'

const SurveyCard = ({title}) => {
  return (
    <Paper sx={style.surveyCardContainer}>
      <Typography>{title}</Typography>
    </Paper>
  )
}

const style={
    surveyCardContainer:{
        width:'250px',
        height:'300px',
        display:'flex',
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