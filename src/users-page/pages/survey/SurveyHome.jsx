import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSurvey, getSurveyValue } from '../../../redux/features/authSlice'
import NavBar from '../../components/NavBar'
import surveyHomeImage from '../../../assets/image/survey-home.svg'
import SurveyCard from '../../components/SurveyCard'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import { surveyHomePageStyle } from './styles/surveyHome'

const SurveyHome = () => {
     const { survey,isLightMode } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [isScrolling,setIsScrolling]=useState(false)

    window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })

    useEffect(() => {
        dispatch(getAllSurvey())
    }, [])

    const handleSurvey=(data)=>{
      dispatch(getSurveyValue(data))
      navigate('/takeSurvey')
    }

    console.log(survey)

   return (
      <Box sx={{ width: '100%', display: 'flex',flexDirection:'column' }}>
        <NavBar isScrolling={isScrolling} />
        <Box sx={surveyHomePageStyle.landingPage}>
          <Box sx={surveyHomePageStyle.surveyHomePageLandingPageContainer}> 
            <Typography variant='h2' sx={{fontWeight:'bold',display:'flex',gap:'10px'}}>
                  Our
              <span style={{color:'#1A6CE8'}}>Survey</span></Typography>
              <Typography>Paid Online Surveys  Earn Money instantly. </Typography>
          </Box>
          <Box sx={surveyHomePageStyle.surveyHomeLandingPageImageContainer}>
             <CardMedia image={surveyHomeImage} sx={{width:'80%',height:'90%'}}/>
          </Box>
        </Box>
           <Grid container spacing={5} sx={surveyHomePageStyle.surveyCardContainer}>
            {!survey?.length>0?
              <Typography 
                variant='h5' 
                sx={{color:isLightMode?'#1e1e1e':'white',width:'100%',textAlign:'center'}}>
                  Survey is not Prepared Yet
                </Typography>:null}
            {
              survey?.map((item,index)=>
               <Grid onClick={()=>handleSurvey(item)} on item xs={12} md={3}>
                 <SurveyCard 
                  key={index} 
                  title={item?.title}
                  questionNumber={item}
                  />
               </Grid>
             )}
      </Grid>
      <Footer/>
        </Box>
    )
}



export default SurveyHome