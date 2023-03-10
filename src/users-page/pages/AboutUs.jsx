import { Box, CardMedia, Container, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { handleResponsiveness } from '../auth/styles/loginStyle'
import Footer from '../components/Footer'
import MemberCard from '../components/MemberCard'
import NavBar from '../components/NavBar'
import ResponsiveContainer from '../components/ResponsiveContainer'
import { foundersData } from '../utils/data'
import Investment from '../../assets/image/Investment.svg'
import development from '../../assets/image/development.svg'
import product from '../../assets/image/product.svg'
import Consultancy from '../../assets/image/Consultancy.svg'
import Carousel from '../../shared/Components/Carousel'
export const OurWorkCard=({image,Title})=>{
   const {isLightMode,modeColor} = useSelector(state=>state.auth)
  return (
   <Paper sx={[style.ourWorkMainCardContainer,{backgroundColor:modeColor,border:`solid 1px ${isLightMode?'rgba(0,0,0,0.2)':'#ACACAC'}`}]}>
      <Box sx={{width:'80%',height:'150px'}}>
        <CardMedia image={image } sx={{width:'100%',height:'100%'}}/>
        <Typography sx={{
          textAlign:'center',
          fontWeight:'bold',
          marginTop:'10px',
          fontSize:'12px',
          color:`${isLightMode?'#1e1e1e':'white'}`
        }}>{Title}</Typography>
      </Box>
   </Paper>
  )
}


const AboutUs = () => {
  const {isLightMode,modeColor} = useSelector(state=>state.auth)
  const [isScrolling,setIsScrolling]=useState(false)
    window.addEventListener('scroll',()=>{
    if(window.pageYOffset>0) setIsScrolling(true)
    else setIsScrolling(false)       
  })

  return (
  <Box sx={style.aboutMainContainer}>
      <NavBar isScrolling={isScrolling}/>
      <Box sx={style.aboutUsContainer}>
       {/* <CardMedia image={aboutUsImage} sx={{width:'100%',height:'100%'}}/> */}
       <Typography variant='h2' sx={{fontWeight:'bold',color:'white'}}>About Us</Typography>
      </Box>
      <ResponsiveContainer>
        <Box sx={[style.proverbContainer,{backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
         <Divider sx={style.divider}/>
         <Typography variant='h6' sx={{width:'90%',color:`${isLightMode?'#1e1e1e':'white'}`}}>
          "Knowledge is power. Information is liberating. 
          Education is the premise of progress, in every society, 
          in every family"
          <Typography>.Kofi Annan</Typography>
          </Typography>
        </Box>
        <Box sx={[style.infinityContainer,{backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
         <Box sx={{width:'90%',display:'flex'}}>
           <Typography variant='h5' sx={{fontWeight:'bold',marginBottom:'16px',color:'#1A6CE8'}}>Infinity</Typography> 
           </Box>
         <Typography variant='h6' sx={{width:'90%',fontWeight:'400',color:`${isLightMode?'#1e1e1e':'white'}`}}>
            In this era and on the coming time to achieving your  
            goal information is the main key and getting this 
            information well organized high quality is very hard  
            so to solve this the problem infinity wants to be a
          </Typography>
        </Box>
      </ResponsiveContainer>
      <Typography variant='h3' sx={{width:'90%',marginBottom:'10px',fontWeight:'bold',color:'#1A6CE8'}}>Our Work</Typography>
      <Container 
         sx={[style.ourWorkContainer,
          {backgroundColor:`${isLightMode?'#1A6CE8':'#333333'}`,
          height:`${isLightMode?"70vh":'50vh'}`}]}>
            <Carousel innerMargin={650} height={50}>
             <OurWorkCard image={Investment} Title={'Market Research'}/>
             <OurWorkCard image={development} Title={'Business Development Research'}/>
             <OurWorkCard image={product} Title={'Product validitytes'}/> 
             <OurWorkCard image={product} Title={'Product validitytes'}/> 
        </Carousel>
      </Container>
      <ResponsiveContainer>
        <Box sx={[style.missionMainContainer,{ backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
        <Box sx={{width:'90%',display:'flex'}}>
           <Typography 
              variant='h5' 
              sx={{fontWeight:'bold',marginBottom:'16px',color:'#1A6CE8'}}>Mission</Typography> 
           </Box>
         <Typography sx={{width:'90%',fontSize:'16px',fontWeight:'400',color:`${isLightMode?'#1e1e1e':'white'}`}}>
          <ul>
            <li>To Provide in-depth research that centres decision-making on facts and insights.</li>
             <li>To Support the creation and monitoring of appropriate Product metrics</li>
             <li>Create experimentation capabilities and knowledge creation</li>
             <li>To Deliver Market analytics features to help businesses get insights more quickly</li>
          </ul>
          </Typography>
        </Box>

        <Box sx={[style.visionMainContainer,{backgroundColor:`${isLightMode?"white":'#333333'}`}]}>
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
       <Typography 
         variant='h4' 
         sx={{width:'90%',fontWeight:'bold',color:'#1A6CE8'}} >Meet Our Team</Typography>
      <Box sx={[style.meetOurTeamMainContainer,{backgroundColor:modeColor}]}>
        <Carousel innerMargin={650} height={80}>
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

const style ={
  aboutMainContainer:{
    width:'100%',
    height:'auto',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  aboutUsContainer: {
    width:'100%',
    height:'50vh',
    marginTop:'110px',
    backgroundColor:'#1A6CE8',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  ourWorkContainer:{
   width:'100%',
   backgroundColor:'#F6F6F6',
   display:'flex',
   flexDirection:'column',
   borderRadius:'10px',
  },
  missionMainContainer:{
     width:handleResponsiveness('100%','45%'),
     height:handleResponsiveness('auto','70%'),
     display:'flex',
     justifyContent:'center',
     flexDirection:'column',
    alignItems:'center'

  },
  visionMainContainer:{
    width:handleResponsiveness('100%','50%'),
     height:handleResponsiveness('auto','70%'),
     display:'flex',
     justifyContent:'center',
     flexDirection:'column',
    alignItems:'center'
  },
  meetOurTeamMainContainer:{
    width:'100%',
    height:'60vh',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:'80px',
    marginBottom:'50px'
  
  },
  ourWorkCardContainer:{
    width:handleResponsiveness('auto','100%'),
    height:'80%',
    marginTop:'16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:'50px',
    borderRadius:'100px 50px 150px 50px',
    marginLeft:'120px'
    
  },

  ourWorkCardContainerWrapper:{
    width:'100%',
    height:'80%',
    marginTop:'16px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:'50px',
    borderRadius:handleResponsiveness('none','100px 50px 150px 50px'),
    overflowX:handleResponsiveness('scroll','hidden'),
  },
  ourWorkMainCardContainer:{
    borderRadius:'5px',
    width:'200px',
    height:'250px',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
   
  },
  proverbContainer:{ 
    width:handleResponsiveness('100%','40%'),
    height:handleResponsiveness('auto','65%'),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
  },
  divider:{
    width:'70%',
    marginLeft:'-130px',
    marginBottom:'16px',
    height:'10px',
    backgroundColor:'#1A6CE8'
  },
  infinityContainer:{ 
    width:handleResponsiveness('100%','50%'),
    height:handleResponsiveness('auto','65%'),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
}
}

export default AboutUs