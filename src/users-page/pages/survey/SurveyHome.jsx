import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSurvey } from '../../../redux/features/authSlice'
import NavBar from '../../components/NavBar'
import surveyHomeImage from '../../../assets/image/survey-home.svg'
import SurveyCard from '../../components/SurveyCard'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import { handleResponsiveness } from '../../auth/styles/loginStyle'
const SurveyHome = ({setSurveyDetailData}) => {
    const dispatch = useDispatch()
    
    const { survey } = useSelector(state => state.auth)
    const navigate= useNavigate()
    useEffect(() => {
        dispatch(getAllSurvey())
    }, [])

    const handleSurvey=(data)=>{
      setSurveyDetailData(data)
      navigate('/takeSurvey')
    }

    return (
        <Box sx={{ width: '100%', display: 'flex',flexDirection:'column' }}>
            <NavBar />
            <Box sx={style.landingPage}>
              <Box sx={{
                width:handleResponsiveness('100%','50%'),
                height:handleResponsiveness('30%','80%'),
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'}}>
               
                <Typography 
                   variant='h2' 
                    sx={{fontWeight:'bold',display:'flex',gap:'10px'}}>
                  Our
                <span style={{color:'#1A6CE8'}}>Survey</span></Typography>
                <Typography>Paid Online Surveys  Earn Money instantly. </Typography>
              </Box>

              <Box sx={{
                width:handleResponsiveness('100%','50%'),
                height:handleResponsiveness('70%','80%'),
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
                <CardMedia image={surveyHomeImage} sx={{width:'100%',height:'100%'}}/>
              </Box>
            </Box>
           <Grid container spacing={2} sx={{marginTop:'20px',width:'80%',marginLeft:'10%',marginBottom:'20px',diaplay:'flex',placeItems:'center'}}>
            {
              survey?.map((item,index)=>
               <Grid onClick={()=>handleSurvey([item])} on item xs={8} md={3}>
                 <SurveyCard key={index} title={item.questionTitle}/>
               </Grid>
             )}
      </Grid>
      <Footer/>
        </Box>
    )
}

const style = {
    landingPage: {
        width: '100%',
        height: '80vh',
        backgroundColor: '#DFDFDF',
        display:'flex',
        marginTop:'80px',
        flexDirection:handleResponsiveness('column','row')
    }
}

export default SurveyHome