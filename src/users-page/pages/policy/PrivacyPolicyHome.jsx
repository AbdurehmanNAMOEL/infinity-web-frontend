import { Box, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../../components/NavBar'
import { useSelector } from 'react-redux'
import { handleResponsiveness } from '../../auth/styles/loginStyle'

const PrivacyPolicyHome = () => {
   const {isLightMode,modeColor} = useSelector(state=>state.auth)
  return (
    <Box sx={[style.privacyMainContainer,{backgroundColor:modeColor}]}>
      <NavBar/>
      <Box sx={style.policyContainer}>
        <Typography variant='h3' sx={style.mainTitle}>
            Term of services & Privacy Policy 
        </Typography>
      </Box>

       <Box sx={[style.termOfServiceContainer,{backgroundColor:modeColor}]}>
        <Box sx={{width:'100%',height:'auto',backgroundColor:modeColor}}>
          <Typography  variant='h4' 
           sx={{fontSize:handleResponsiveness('24px','30px'),fontWeight:'bold',
           color:`${isLightMode?'#1e1e1e':'white'}`}}>
            1. Term of services 
            </Typography>
            <Box sx={{
              width:'100%',
              backgroundColor:modeColor,
              height:'auto',
              borderLeft:5,
              borderLeftColor:'#1A6CE8',
              marginTop:'20px',
              marginLeft:handleResponsiveness('0px','20px')
              
              }}>
              <p style={{padding:'10px',fontSize:'14px',color:`${isLightMode?'#1e1e1e':'white'}`}}>
                Welcome to Infinity, the website and online service of Survey Services, Inc.
                (“Infinity,” “we,” or “us”). This page explains the terms by which you may use 
                our online services, web site, By accessing or using the Service, or by clicking 
                a button or checking a box marked “I Agree” (or something similar), you signify 
                that you have read, understood, and agree to be bound by these Terms of Service 
                (this “Agreement”), and to the collection and use of your information as set forth 
                in our Privacy Policy, whether or not you are a registered user of our Service. 
                infinity reserves the right to modify these terms and will provide notice of these 
                changes as described below. This Agreement applies to all visitors, users, and others 
                who access the Service (“Users”).
              </p>
              <p style={{padding:'10px',fontSize:'14px',color:`${isLightMode?'#1e1e1e':'white'}`}}>
                 Please read this Agreement carefully to ensure that you understand each provision. 
                 This agreement contains a mandatory individual arbitration and class action/jury trial 
                 waiver provision that requires the use of arbitration on an individual basis to resolve 
                 disputes, rather than jury trials or class actions.
              </p>
            </Box>
            </Box>
      </Box>



      <Box sx={style.termOfServiceContainer}>
        <Box sx={{width:'100%',height:'auto',}}>
          <Typography  variant='h4' 
           sx={{fontSize:handleResponsiveness('24px','30px'),
              color:`${isLightMode?'#1e1e1e':'white'}`,fontWeight:'bold'}}>
            2. Privacy policy 
            </Typography>
            <Box sx={{
              width:'100%',
              color:`${isLightMode?'#1e1e1e':'white'}`,
              height:'auto',
              borderLeft:5,
              borderLeftColor:'#1A6CE8',
              marginTop:'20px',
              marginLeft:handleResponsiveness('0px','20px')
              
              }}>
              <p style={{padding:'10px',fontSize:'14px'}}>
                 This Privacy Notice applies to all the products, services, websites and apps offered 
                 by Infinity, We refer to those products, services, websites, and apps collectively as 
                 the “services” in this notice. Unless otherwise noted in your contract, our services 
                 are provided by infinity.
              </p>
              <p style={{padding:'10px',fontSize:'14px',color:`${isLightMode?'#1e1e1e':'white'}`}}>
                 References in this Privacy Notice, to data, personal information or just information, 
                 are all references to Personal Data. Personal Data means information relating to a living 
                 individual who is, or can be, reasonably identified from information, either alone or in 
                 conjunction with other information (a "Data Subject").
              </p>
            </Box>
            </Box>            
      </Box>


      <Box sx={[style.termOfServiceContainer,{marginLeft:handleResponsiveness('0px','50px')}]}>
        <Box sx={{width:'100%',height:'auto'}}>
          <Typography  variant='h5' 
           sx={{color:`${isLightMode?'#1e1e1e':'white'}`,fontWeight:'bold'}}>
            2.1. Privacy policy 
            </Typography>
            <Typography  variant='h6' 
              sx={{color:`${isLightMode?'#1e1e1e':'white'}`,
              fontWeight:'bold',marginLeft:'20px',marginTop:'20px'}}>
            2.1.1 Who are 'you'? 
            </Typography>
            <Box sx={{
              width:'100%',
              color:`${isLightMode?'#1e1e1e':'white'}`,
              height:'auto',
              borderLeft:5,
              borderLeftColor:'#1A6CE8',
              marginTop:'20px',
              marginLeft:handleResponsiveness('0px','20px')
              
              }}>
              <p style={{padding:'10px',color:`${isLightMode?'#1e1e1e':'white'}`,fontSize:'14px'}}>
                 This Privacy Notice applies to all the products, services, websites and apps offered 
                 by Infinity, We refer to those products, services, websites, and apps collectively as 
                 the “services” in this notice. Unless otherwise noted in your contract, our services 
                 are provided by infinity.
              </p>
              <p style={{padding:'10px',color:`${isLightMode?'#1e1e1e':'white'}`,fontSize:'14px'}}>
                 References in this Privacy Notice, to data, personal information or just information, 
                 are all references to Personal Data. Personal Data means information relating to a living 
                 individual who is, or can be, reasonably identified from information, either alone or in 
                 conjunction with other information (a "Data Subject").
              </p>
            </Box>
            <Typography  variant='h6' 
              sx={{color:`${isLightMode?'#1e1e1e':'white'}`,
              fontWeight:'bold',marginLeft:'20px',marginTop:'20px'}}>
            2.1.2 Information we collect about you.
            </Typography>
            <Box sx={{
              width:'100%',
              height:'auto',
              borderLeft:5,
              borderLeftColor:'#1A6CE8',
              marginTop:'20px',
              marginLeft:handleResponsiveness('10px','20px')
              
              }}>
              
              <p style={{padding:'10px',color:`${isLightMode?'#1e1e1e':'white'}`,fontSize:'14px'}}>
                  Contact Information (for example name or email address).You might provide us with your 
                  contact information, whether through use of our services, a form on our website, an 
                  interaction with our sales or customer support team, or a response to one of Momentive’s 
                  own surveys or forms.
              </p>
              <p style={{padding:'10px',color:`${isLightMode?'#1e1e1e':'white'}`,fontSize:'14px'}}>
               Usage information.We collect usage information about you whenever you interact with our 
               websites and services. This includes which webpages you visit, what you click on, when 
               you perform those actions, what language preference you have, what you buy and so on.
              </p>
              <p style={{padding:'10px',color:`${isLightMode?'#1e1e1e':'white'}`,fontSize:'14px'}}>
                Device and browser data.We collect information from the device and application you use 
                to access our services. Device data mainly means your IP address, operating system version,
                device type, device ID/MAC address, system and performance information, and browser type. 
                If you are on a mobile device we also collect the UUID for that device.
              </p>
              <p style={{padding:'10px',color:`${isLightMode?'#1e1e1e':'white'}`,fontSize:'14px'}}>
                Log Data.Like most websites today, our web servers keep log files that record data each 
                time a device accesses those servers. The log files contain data about the nature of each 
                access, including originating IP addresses, internet service providers, the files viewed 
                on our site (e.g. HTML pages, graphics, etc.), operating system versions, device type and 
                timestamps.
              </p>
            
              </Box>
            </Box>
            </Box>           
      </Box>
 
  )
}

const style ={
  privacyMainContainer:{
   width:'100%',
   height:'auto',
   display:'flex',
   flexDirection:'column',
   alignItems:'center',
  },
  policyContainer: {
    width:'100%',
    height:'40vh',
    marginTop:'70px',
    backgroundColor:'#1A6CE8',
    display:'flex',
    justifyContent:'center',
    alignItems:'center', 
  },
  termOfServiceContainer:{
    width:handleResponsiveness('90%','80%'),
    height:'auto',
    marginTop:'100px',
    marginBottom:'60px'
  },
  mainTitle:{
    fontSize:handleResponsiveness('1.3rem','40px'),
    color:'white',
    fontWeight:'bold'
  }
}
export default PrivacyPolicyHome