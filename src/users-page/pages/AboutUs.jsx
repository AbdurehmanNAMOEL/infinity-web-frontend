import { Box, Container, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import Footer from '../components/Footer'
import MemberCard from '../components/MemberCard'
import NavBar from '../components/NavBar'
import ResponsiveContainer from '../components/ResponsiveContainer'
import { foundersData, ourWorkData } from '../utils/data'
import Carousel from '../../shared/Components/Carousel'
import RoadMap from '../components/RoadMap'
import { OurWorkCard } from '../components/OurWorkCard'
import { aboutUsStyle } from './style/aboutUs'

const AboutUs = () => {
  const {isLightMode,modeColor} = useSelector(state=>state.auth)
  const [isScrolling,setIsScrolling]=useState(false)
    window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })

  return (
  <Box sx={aboutUsStyle.aboutMainContainer}>
      <NavBar isScrolling={isScrolling}/>
      <Box sx={aboutUsStyle.aboutUsContainer}>
       <Typography variant='h2' sx={{fontWeight:'bold',color:'white'}}>About Us</Typography>
      </Box>
      <ResponsiveContainer>
        <Box sx={[aboutUsStyle.proverbContainer,{backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
         <Divider sx={aboutUsStyle.divider}/>
         <Typography variant='h6' sx={{width:'90%',color:`${isLightMode?'#1e1e1e':'white'}`}}>
          "Knowledge is power. Information is liberating. 
          Education is the premise of progress, in every society, 
          in every family"
          <Typography>.Kofi Annan</Typography>
          </Typography>
        </Box>
        <Box sx={[aboutUsStyle.infinityContainer,{backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
         <Box sx={{width:'90%',display:'flex'}}>
           <Typography variant='h5' sx={{fontWeight:'bold',marginBottom:'16px',color:'#1A6CE8'}}>Infinity</Typography> 
           </Box>
         <Typography  sx={{width:'90%',fontWeight:'400',color:`${isLightMode?'#1e1e1e':'white'}`}}>
            In this era and on the coming time to achieving your  
            goal information is the main key and getting this 
            information well organized high quality is very hard  
            so to solve this the problem infinity wants to be a
          </Typography>
        </Box>
      </ResponsiveContainer>
      <Typography variant='h3' 
       sx={{width:'90%',marginBottom:'10px',fontWeight:'bold',color:'#1A6CE8'}}>
        Our Work
      </Typography>
      <Container 
         sx={[aboutUsStyle.ourWorkContainer,
          {backgroundColor:`${isLightMode?'#1A6CE8':'#333333'}`,
          height:`${isLightMode?"60vh":'50vh'}`,
          borderRadius:handleResponsiveness('0px',`${isLightMode?'150px 50px 150px 50px':'10px'}`)
          }]}>
            <Carousel innerMargin={600} height={50}>
              {ourWorkData.map((data,index)=>
               <OurWorkCard
                 key={index}
                 title={data.title}
                 imageUrl={data.imageUrl}
               />
              )}
        </Carousel>
      </Container>
      <ResponsiveContainer>
        <Box sx={[aboutUsStyle.missionMainContainer,{ backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
        <Box sx={{width:'90%',display:'flex'}}>
           <Typography 
              variant='h5' 
              sx={{fontWeight:'bold',marginBottom:'16px',color:'#1A6CE8'}}>Mission</Typography> 
           </Box>
         <Typography sx={{width:'90%',fontSize:'16px',fontWeight:'400',color:`${isLightMode?'#1e1e1e':'white'}`}}>
          <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
            <li>To Provide in-depth research that centres decision-making on facts and insights.</li>
             <li>To Support the creation and monitoring of appropriate Product metrics</li>
             <li>Create experimentation capabilities and knowledge creation</li>
             <li>To Deliver Market analytics features to help businesses get insights more quickly</li>
          </ul>
          </Typography>
        </Box>

        <Box sx={[aboutUsStyle.visionMainContainer,{backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
          <Box sx={{width:'90%',display:'flex'}}>
           <Typography 
             variant='h5' 
             sx={{fontWeight:'bold',marginBottom:'16px',color:'#1A6CE8'}}>Vision</Typography> 
           </Box>
         <Typography variant='h6' sx={{width:'90%',fontWeight:'400',color:`${isLightMode?'#1e1e1e':'white'}`}}>
            Renovate the world of Data through intelligence for better decisions!
          </Typography>
        </Box>
      </ResponsiveContainer>
      <Typography sx={{width:'90%',fontSize:'32px',color:'#1A6CE8',fontWeight:'bold',marginBottom:'20px' }}>
        Road Map
      </Typography>
      <Box sx={{width:'100%'}}>
       <RoadMap/>
      </Box>
       <Typography 
         variant='h4' 
         sx={{width:'90%',fontWeight:'bold',color:'#1A6CE8'}} >Meet Our Team</Typography>
      <Box sx={[aboutUsStyle.meetOurTeamMainContainer,{backgroundColor:modeColor}]}>
        <Carousel innerMargin={600} height={80}>
        {foundersData?.map((item,index)=>
           <MemberCard 
             key={index}
             name={item.name}
             position={item.position}
             imageUrl={item.imageUrl}
             />
       )}
       
       </Carousel>
      </Box>
      <Footer/>
    </Box>
  )
}


export default AboutUs