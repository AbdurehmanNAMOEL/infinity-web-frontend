import { Box, Card, CardMedia,Paper,Typography } from '@mui/material'
import React, {useState } from 'react'
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
import HomePageDarkModeImage from '../../assets/image/home-darkmode.svg'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion} from 'framer-motion'
import { homePageStyle } from './style/home'

const HomePage = () => {

  const [isScrolling,setIsScrolling]=useState(false)
  const {isLoggedIn,isLightMode,modeColor} = useSelector(state=>state.auth)
  const {isAdminLoggedIn}= useSelector(state=>state.admin)
  const navigate = useNavigate()
  const BoxMotion = motion(Box);
  const PaperMotion = motion(Paper);
  
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
    <Box sx={{width:'100%',height:'auto',overflowX:'hidden',backgroundColor:modeColor}}>
     <NavBar isScrolling={isScrolling}/>
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
            sx={[homePageStyle.homeRightLadingPageContainer]}>
            <motion.div
             animate={{x:[800,0] ,opacity: [0.5,1] }}
             transition={{ duration:1.5}} 
             style={homePageStyle.homeLandingPageImageContainer}>
               <CardMedia 
                 sx={{width:'100%',height:'80%'}}
                 image={isLightMode?HomePhoto:HomePageDarkModeImage}
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
                <Typography sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}>Answer a few questions</Typography>
              </BoxMotion>

                <BoxMotion
                initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration:1.5}} 
                sx={homePageStyle.howSurveyWorkIconContainer}>
                <Paper sx={homePageStyle.howSurveyWorkIconInnerContainer}>
                  <FactCheckIcon sx={[homePageStyle.icons,{color:'rgb(16, 245, 207)'}]}/>
                </Paper>
                 <Typography sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}>Complete a survey</Typography>
              </BoxMotion>

                <BoxMotion
                initial={{ scale: 0.5 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration:2}} 
                sx={homePageStyle.howSurveyWorkIconContainer}>
                <Paper sx={homePageStyle.howSurveyWorkIconInnerContainer}>
                  <EmojiEventsIcon sx={[homePageStyle.icons,{color:'goldenrod'}]}/>
                </Paper>
                 <Typography sx={{color:`${isLightMode?'#1e1e1e':'white'}`}}>Get your reward</Typography>
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
       <Box sx={
        {
          width:'100%',
          height:handleResponsiveness('auto','350px'),
          // backgroundColor:'#F6F6F6',
          marginBottom:handleResponsiveness('20px','0'),
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        
          }}>
            <BoxMotion 
                 initial={{ x: -900 }}
                 whileInView={{ x: 0 }}
                  transition={{ duration:4}}  
                  sx={{zIndex:500,width:'50%',display:'flex',justifyContent:'flex-start',marginTop:'-10px',height:'100px'}}>
                  
                <div style={{width:'120px',position:'absolute',height:'120px',backgroundColor:'#80B2FF',borderRadius:'100%'}}>

              </div>
            </BoxMotion>
        
           <BoxMotion 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                  transition={{ duration:3}}   sx={
           { 
            width:'90%',
        
             height:'50%',
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
             flexDirection:'column',
             position:'absolute',
             backgroundColor:`${isLightMode?'#DFDFDF':'#333333'}`
             }
          }>
           
              <Typography 
            variant='h4' 
            sx={[homePageStyle.sectionMainTitle,{color:`${isLightMode?'#1e1e1e':'white'}`}]}
            >Survey Time
          </Typography>
            <Box sx={
              {
                width:handleResponsiveness('90%','30%'),
                flexDirection:'column',
                height:handleResponsiveness('10%','50%'),
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
            <Typography sx={{width:'100%',textAlign:'center',color:`${isLightMode?'#1e1e1e':'white'}`}}>
              Where you take free paid surveys and 
              earn “X” birr for each one you successfully 
              complete!
            </Typography>
            <Box sx={
              {
              display:'flex',
            
              marginTop:'20px',
            }}>
                 <ButtonStyled 
                   label={'Start'}  
                   bgColor={'#1A6CE8'}
                   setValue={handleSurveyTime}
                  />
            </Box>
            </Box>
          </BoxMotion>
            <BoxMotion 
                 initial={{ x: 900 }}
                 whileInView={{ x: 0 }}
                  transition={{ duration:4}}   sx={{marginTop:'250px',width:'50%',height:'100px',display:'flex',justifyContent:'flex-end'}}>
              <div style={{zIndex:500,width:'120px',marginTop:'-50px',position:'absolute',height:'120px',backgroundColor:'#6B6F75',borderRadius:'100%'}}>

              </div>
            </BoxMotion>
      </Box>
        <Box sx={[homePageStyle.registrationContainer,{backgroundColor:modeColor}]}>
           <Box sx={[homePageStyle.registrationInnerContainers,{backgroundColor:modeColor}]}>
              <Box sx={{width:'70%',backgroundColor:modeColor}}>
                  <Typography 
                    sx={{
                      marginBottom:'10px',fontSize:handleResponsiveness('20px','42px'),
                      color:`${isLightMode?'#1e1e1e':'white'}`
                      }}>
                    Do you want to learn on our campus 
                    </Typography>
                  <ButtonStyled 
                   bgColor={'#1A6CE8'} 
                   label={'Register'}
                   setValue={()=>navigate('/registration')}
                   />
              </Box>
           </Box>
           <Box sx={[homePageStyle.registrationInnerContainers,{backgroundColor:modeColor}]}>
             <Card sx={{width:'80%',height:'100%',backgroundColor:modeColor}}>
              <CardMedia image={CourseRegImage} sx={{width:'100%',height:'100%'}}/>
             </Card>
           </Box>
      </Box>
      <Footer/>
    </Box>
  )
}

export default HomePage