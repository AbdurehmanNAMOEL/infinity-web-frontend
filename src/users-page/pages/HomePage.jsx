import { Box, Card, CardMedia,Divider,Paper,Typography } from '@mui/material'
import React, {useState } from 'react'
import NavBar from '../components/NavBar'
import HomePhoto from '../../assets/image/home.png'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import ButtonStyled from '../components/ButtonStyled'
import StyledCard from '../components/StyledCard'
import { whyUsData } from '../utils/data'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CourseRegImage from '../../assets/image/course.png'
import mobileApp from '../../assets/image/mobile-app.png'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion} from 'framer-motion'
import { homePageStyle } from './style/home'

const HomePage = () => {

  const [isScrolling,setIsScrolling]=useState(false)
  const {isLightMode,modeColor,isUserLoggedIn} = useSelector(state=>state.auth)

  const navigate = useNavigate()
  const BoxMotion = motion(Box);
  
  window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })

  const handleSurveyTime=()=> navigate('/survey')
    
  return (
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'auto',overflowX:'hidden',backgroundColor:modeColor}}>
     <Box sx={{width:'100%'}}><NavBar isScrolling={isScrolling}/></Box> 
      <Box sx={homePageStyle.homeLandingPage}>
         <Box sx={homePageStyle.homeLeftLadingPageContainer}>
            <motion.div
             animate={{x:[-800,0] ,opacity: [0.5,1] }}
             transition={{ duration:1.5}} 
              style={{width:'90%', height:'50%',display:'flex',flexDirection:'column'}}>
              <Box sx={{width:'100%'}}>
               <Typography 
                sx={
                {
                  fontWeight:'bold',
                  color:`${isLightMode?'#1E1E1E':'white'}`,
                  width:'100%',
                  fontSize:handleResponsiveness('24px','42px')
                  }}>
                 Paid Online Surveys <span style={{color:'#1A6CE8'}}> Earn Money 
                 Online.Join Infinity Today!</span>
              </Typography>
              </Box>
              {!isUserLoggedIn?
                <Box sx={{marginTop:'20px'}}>
                 <ButtonStyled  
                   btnWidth={'200px'} 
                   label={'JoinUs'} 
                   bgColor={'#1A6CE8'}
                   setValue={()=>navigate('/signUp')}
                 />
               </Box>:''
              }
            </motion.div>
         </Box>
         <Box
            sx={[homePageStyle.homeRightLadingPageContainer]}>
            <motion.div
             animate={{x:[800,0] ,opacity: [0.5,1] }}
             transition={{ duration:1.5}} 
             style={homePageStyle.homeLandingPageImageContainer}>
               <CardMedia 
                 loading="lazy"
                 sx={{width:'100%',height:'80%'}}
                 image={HomePhoto}
                 />
            </motion.div>
         </Box>
      </Box>

      <Box 
        sx={[homePageStyle.howSurveyWorkMainContainer,{backgroundColor:modeColor}]}>
          <Typography variant='h4'
            sx={[homePageStyle.sectionMainTitle,{color:`${isLightMode?'#1e1e1e':'white'}`}]}>
            How does Infinity Survey work?
          </Typography>

           <Box sx={[homePageStyle.howSurveyWorkContainer,
             {backgroundColor:`${isLightMode?'white':'#1e1e1e'}`}]}>
              <BoxMotion 
                 initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                  transition={{ duration:1}} 
                sx={[homePageStyle.howSurveyWorkIconContainer]}>
                <Paper sx={[homePageStyle.howSurveyWorkIconInnerContainer]}>
                  <QuestionMarkIcon sx={[homePageStyle.icons,{color:'white'}]}/>
                </Paper>
                <Typography sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}>
                  Answer a few questions
                </Typography>
              </BoxMotion>

                <BoxMotion
                initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration:1.5}} 
                sx={homePageStyle.howSurveyWorkIconContainer}>
                <Paper sx={homePageStyle.howSurveyWorkIconInnerContainer}>
                  <FactCheckIcon sx={[homePageStyle.icons,{color:'rgb(16, 245, 207)'}]}/>
                </Paper>
                 <Typography sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}>
                  Complete a survey
                </Typography>
              </BoxMotion>

                <BoxMotion
                initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration:2}} 
                sx={homePageStyle.howSurveyWorkIconContainer}>
                <Paper sx={homePageStyle.howSurveyWorkIconInnerContainer}>
                  <EmojiEventsIcon sx={[homePageStyle.icons,{color:'goldenrod'}]}/>
                </Paper>
                 <Typography sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}>
                  Get your reward
                </Typography>
              </BoxMotion>
           </Box>
       </Box>
        <Box sx={[homePageStyle.whyShouldMainContainer,{backgroundColor:modeColor}]}>
          <Typography 
            variant='h4' 
            sx={[homePageStyle.sectionMainTitle,{color:`${isLightMode?"#1e1e1e":'white'}`}]}>
            Why should I use Infinity Survey?
           </Typography>
           <Box sx={homePageStyle.whyShouldInnerContainer}>
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
       <Box sx={homePageStyle.surveyTimeMainContainer}>
          <Box sx={homePageStyle.topCircleContainer}>
             <div style={homePageStyle.topCircle}></div>
          </Box>
        
           <Box sx={[homePageStyle.surveyContainer,{backgroundColor:`${isLightMode?'#DFDFDF':'#333333'}`}]}>
           <Typography variant='h4' 
            sx={[homePageStyle.sectionMainTitle,{color:`${isLightMode?'#1e1e1e':'white'}`}]}>
            Survey Time
          </Typography>
          <Divider/>
            <Box sx={homePageStyle.surveyContentContainer}>
            <Typography sx={{width:'100%',textAlign:'center',color:`${isLightMode?'#1e1e1e':'white'}`}}>
              Where you take free paid surveys and 
              earn “X” birr for each one you successfully 
              complete!
            </Typography>
            
            <Box sx={{display:'flex',marginTop:'20px',marginBottom:handleResponsiveness('20px','0px')}}>
              <ButtonStyled 
                label={'Start'}  
                bgColor={'#1A6CE8'}
                setValue={handleSurveyTime}
              />
            </Box>

            </Box>
          </Box>
            <Box sx={homePageStyle.bottomCircleContainer}>
              <div style={homePageStyle.bottomCircle}>
              </div>
            </Box>
      </Box>
        <Box sx={[homePageStyle.registrationContainer,{backgroundColor:modeColor}]}>
           <Box sx={[homePageStyle.registrationInnerContainers,{backgroundColor:modeColor}]}>
              <Box sx={{width:handleResponsiveness('90%','70%'),backgroundColor:modeColor}}>
                  <Typography 
                    sx={{marginBottom:'10px',fontSize:handleResponsiveness('20px','30px'),
                      color:`${isLightMode?'#1e1e1e':'white'}`
                      }}>
                    Do you want to our consultancy or other services then 
                    </Typography>
                  <ButtonStyled 
                   bgColor={'#1A6CE8'} 
                   label={'Register'}
                   setValue={()=>navigate('/userAppointment')}
                   />
              </Box>
           </Box>
           <Box sx={[homePageStyle.registrationInnerContainers,{backgroundColor:modeColor}]}>
             <Card sx={{
             width:handleResponsiveness('75%','80%'),
             height:handleResponsiveness('100%','100%'),
             backgroundColor:modeColor,
             boxShadow:'none'
             }}>
              <CardMedia image={CourseRegImage} 
               sx={{width:'100%',height:'100%'}}/>
             </Card>
           </Box>
         </Box>


       <Box sx={[homePageStyle.mobileAppContainer,{backgroundColor:`${isLightMode?'#DFDFDF':'#333333'}`}]}>
          
          <Box sx={[homePageStyle.appImageInnerContainers,{backgroundColor:`${isLightMode?'#DFDFDF':'#333333'}`}]}>
             <Card sx={{
              width:handleResponsiveness('150px','16%'),
              bgcolor:'rgba(0,0,0,0)',
              position:handleResponsiveness('relative','absolute'),
              height:handleResponsiveness('250px','70%'), 
              marginTop:handleResponsiveness('-50px','-100px'),
              transform:handleResponsiveness('0','rotate(-10deg)'),
              boxShadow:'none'}}>
              <CardMedia image={mobileApp} 
              sx={{width:handleResponsiveness('80%','100%'),
              height:'100%'}}/>
             </Card>
           </Box>

           <Box sx={[homePageStyle.appImageInnerContainers,{backgroundColor:`${isLightMode?'#DFDFDF':'#333333'}`}]}>
              <Box sx={{width:handleResponsiveness('90%','70%'),backgroundColor:`${isLightMode?'#DFDFDF':'#333333'}`}}>
                  <Typography 
                    sx={{marginBottom:'10px',fontSize:handleResponsiveness('18px','20px'),
                      color:`${isLightMode?'#1e1e1e':'white'}`
                      }}>
                   To make your survey experience Very fast try to download our app
                   from app store
                    </Typography>
                  <Box sx={{marginBottom:'40px'}}>  
                  <ButtonStyled 
                   bgColor={'#1A6CE8'} 
                   label={'Download Link'}
                   btnWidth={'200px'}
                   setValue={()=>navigate('https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks')}
                   />
                   </Box>
              </Box>
           </Box>
         
         </Box>

         
      
      <Footer/>
    </Box>
  )
}

export default HomePage