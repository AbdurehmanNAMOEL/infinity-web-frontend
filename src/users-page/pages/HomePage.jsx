import { Box, Card, CardMedia,Paper,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import HomePhoto from '../../assets/image/home.svg'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import ButtonStyled from '../components/ButtonStyled'
import StyledCard from '../components/StyledCard'
import { whyUsData } from '../utils/data'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CourseRegImage from '../../assets/image/course.png'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion,useScroll } from 'framer-motion'

const HomePage = () => {

  const [isScrolling,setIsScrolling]=useState(false)
  const {isLoggedIn} = useSelector(state=>state.auth)
  const {isAdminLoggedIn}= useSelector(state=>state.admin)
  const navigate = useNavigate()
  const BoxMotion = motion(Box);
  
  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })

  const handleSurveyTime=()=>{
    if(isLoggedIn||isAdminLoggedIn){
      navigate('/survey')
     }else {
      navigate('/login')
     }
  }

  return (
    <Box sx={{width:'100%',height:'auto',overflowX:'hidden'}}>
     <NavBar isScrolling={isScrolling}/>
      <Box sx={style.homeLandingPage}>
         <Box sx={style.homeLeftLadingPageContainer}>
            <motion.div
               animate={{x:[-800,0] ,opacity: [0.5,1] }}
             transition={{ duration:1.5}} 
              style={{width:'90%', height:'50%',display:'flex',flexDirection:'column'}}>
              <Box sx={{width:'100%'}}>
               <Typography sx={{fontWeight:'bold',width:'100%',fontSize:handleResponsiveness('24px','42px')}}>
                 Paid Online Surveys <span style={{color:'#1A6CE8'}}> Earn Money 
                 Online.Join Infinity Today!</span>
              </Typography>
              </Box>
              <Box sx={{marginTop:'20px'}}>
               <ButtonStyled  
                  btnWidth={'200px'} 
                  label={'JoinUs'} 
                  bgColor={'#1A6CE8'}
                  setValue={()=>navigate('/signUp')}
                />
              </Box>
            </motion.div>
         </Box>
         <Box
            sx={[style.homeRightLadingPageContainer]}>
            <motion.div
             animate={{x:[800,0] ,opacity: [0.5,1] }}
             transition={{ duration:1.5}} 
             style={style.homeLandingPageImageContainer}>
               <CardMedia 
                 sx={{width:'100%',height:'80%'}}
                 image={HomePhoto}
                 />
            </motion.div>
         </Box>
      </Box>

      <Box sx={style.howSurveyWorkMainContainer}>
          <Typography variant='h4' sx={style.sectionMainTitle}>
            How does Infinity Survey work?
          </Typography>

           <Box sx={[style.howSurveyWorkContainer]}>
              <BoxMotion 
                 initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                  transition={{ duration:1}} 
                sx={style.howSurveyWorkIconContainer}>
                <Paper sx={[style.howSurveyWorkIconInnerContainer]}>
                  <QuestionMarkIcon sx={[style.icons,{color:'white'}]}/>
                </Paper>
                <Typography>Answer a few questions</Typography>
              </BoxMotion>

                <BoxMotion
                initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration:1.5}} 
                sx={style.howSurveyWorkIconContainer}>
                <Paper sx={style.howSurveyWorkIconInnerContainer}>
                  <FactCheckIcon sx={[style.icons,{color:'rgb(16, 245, 207)'}]}/>
                </Paper>
                <Typography>Complete a survey</Typography>
              </BoxMotion>

                <BoxMotion
                initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration:2}} 
                sx={style.howSurveyWorkIconContainer}>
                <Paper sx={style.howSurveyWorkIconInnerContainer}>
                  <EmojiEventsIcon sx={[style.icons,{color:'goldenrod'}]}/>
                </Paper>
                <Typography>Get your reward</Typography>
              </BoxMotion>
           </Box>
       </Box>
        <Box sx={[style.whyShouldMainContainer]}>
          <Typography variant='h4' sx={style.sectionMainTitle}>
            Why should I use Infinity Survey?
           </Typography>
           <Box sx={style.whyShouldInnerContainer}>
            {whyUsData.map((item,index)=>
              <StyledCard 
                key={index} 
                animationDuration={index}
                title={item.Title}
                body={item.body}
                icon={item.icon}
                />
              )
            }   
           </Box>
      </Box>
       <Box sx={
        {
          width:'100%',
          height:handleResponsiveness('auto','350px'),
          backgroundColor:'#F6F6F6',
          marginBottom:handleResponsiveness('20px','0'),
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
          }}>
          <Typography variant='h4' sx={style.sectionMainTitle}>
            Survey Time
          </Typography>
          <Box sx={
           { 
            width:'90%',
             marginLeft:'5%',
             height:'30%',
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
             flexDirection:'column'

             }
          }>
            <Box sx={
              {
                width:handleResponsiveness('90%','30%'),
                flexDirection:'column',
                height:handleResponsiveness('10%','50%'),
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
            <Typography sx={{width:'100%',textAlign:'center'}}>
              Where you take free paid surveys and 
              earn “X” birr for each one you successfully 
              complete!
            </Typography>
            <Box sx={
              {width:'50%',
              display:'flex',
              justifyContent:'center',
              marginTop:'20px',
              alignItems:'center'}}>
                 <ButtonStyled 
                   label={'Start'}  
                   bgColor={'#1A6CE8'}
                   setValue={handleSurveyTime}
                  />
            </Box>
            </Box>
          </Box>
      </Box>
        <Box sx={style.registrationContainer}>
           <Box sx={style.registrationInnerContainers}>
              <Box sx={{width:'70%',}}>
                  <Typography sx={{marginBottom:'10px',fontSize:handleResponsiveness('20px','42px')}}>
                    Do you want to learn on our campus </Typography>
                  <ButtonStyled 
                   bgColor={'#1A6CE8'} 
                   label={'Register'}
                   setValue={()=>navigate('/registration')}
                   />
              </Box>
           </Box>
           <Box sx={style.registrationInnerContainers}>
             <Card sx={{width:'80%',height:'100%',backgroundColor:'white',boxShadow:'none'}}>
              <CardMedia image={CourseRegImage} sx={{width:'100%',height:'100%'}}/>
             </Card>
           </Box>
      </Box>
      <Footer/>
    </Box>
  )
}
const style={
  homeLandingPage:{
    width:'100%',
    height:'90vh',
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    marginTop:'70px',
    backgroundColor:'white'
  },
  homeLeftLadingPageContainer:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('60%','100%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
   homeRightLadingPageContainer:{
    width:handleResponsiveness('100%','50%'),
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  howSurveyWorkIconContainer:{
    width:handleResponsiveness('80%','20%'),
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'20px',
    marginBottom:handleResponsiveness('20px','0px')
  },
  howSurveyWorkIconInnerContainer:{
    width:handleResponsiveness('80px','120px'),
    height:handleResponsiveness('80px','120px'),
    backgroundColor:'#1A6CE8',
    borderRadius:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  howSurveyWorkContainer:{
    width:'95%',
    height:handleResponsiveness('auto','50%'),
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    justifyContent:'center',
    alignItems:'center',
  },
  icons:{
    width:'60%',
    height:'60%',
  },
  sectionMainTitle:{
    textAlign:'center',
    fontFamily:'Inter',
    marginTop:'20px',
    fontWeight:'bold',
    marginBottom:handleResponsiveness('40px','0px'),
    fontSize:handleResponsiveness('24px','42px')         
  },
  homeLandingPageImageContainer:{
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    boxShadow:'none'
  },
 howSurveyWorkMainContainer:{
    width:'100%',
    height:handleResponsiveness('auto','400px'),
    backgroundColor:'#F6F6F6',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'50px',
    marginBottom:'50px'
  },
  whyShouldMainContainer: {
    width:'100%',
    height:handleResponsiveness('auto','400px'),
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  whyShouldInnerContainer:{
    width:'95%',
    height:handleResponsiveness('auto','80%'),
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    justifyContent:'center',
    alignItems:'center',
    gap:'40px'
  },
  registrationContainer:{
    width:'100%',
    height:handleResponsiveness('auto','400px'),
    backgroundColor:'white',
    display:'flex',
    flexDirection:handleResponsiveness('column','row'),
    justifyContent:'center',
    alignItems:'center',
    gap:'20px',
    marginBottom:'50px'
  },
  registrationInnerContainers:{
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('200px','100%'),
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  }
}
export default HomePage