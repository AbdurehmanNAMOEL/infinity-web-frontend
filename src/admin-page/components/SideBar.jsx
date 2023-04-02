import React, { useState } from 'react'
import {Card, CardMedia, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from '@mui/material'
import { Box } from '@mui/system'
import AdminImage from '../../assets/image/user.png'
import { sideBarIconList } from '../utils/iconsList'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setNavTitle } from '../../redux/features/adminSlice'
import DropDown from './DropDown'
import Logo from '../../assets/image/logo.png'
import { ExpandLess, ExpandMore, Settings } from '@mui/icons-material'
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
const SideBar = ({isDrawerOpen,closeDrawer,drawerWidth}) => {
   
  const {navTitle,admins}= useSelector(state=>state.admin)
  const navigate = useNavigate()
  const {isLightMode}= useSelector(state=>state.auth)
  const [questionCollapse, setQuestionCollapse] =useState(false);    
  const [appointmentCollapse, setAppointmentCollapse] =useState(false);    

 const  handleOpenQuestion=()=>{
    setQuestionCollapse(!questionCollapse);
  

 }

 const handleOpenAppointment=()=>{
    setAppointmentCollapse(!appointmentCollapse);
 

 }
  const dispatch= useDispatch()
  
  const handleTextModeDependentColor=(isLightMode)=>{
      return {color:isLightMode?'#1e1e1e':'white'}
  }
  return (
    <Drawer
     open={{xs:!isDrawerOpen,md:isDrawerOpen}}
     onClose={closeDrawer}   
     variant='persistent' 
     sx={{
      height:'auto',
          width:{xs:!isDrawerOpen?200:0,md:drawerWidth},
          color:'white',
          "& .MuiDrawer-paper":{
            backgroundColor:`${isLightMode?'#D9D9D9':'#1E1E1E'}`,
            width:{xs:!isDrawerOpen?200:0,md:drawerWidth},
          }
         }}>
         <Box sx={style.drawerHeader}>
             
              <Card sx={style.adminImageContainer}>
                <Typography variant='h4'>{admins?.firstName?.split('')[0]}</Typography>
                <Typography variant='h4'>{admins?.lastName?.split('')[0]}</Typography>
              </Card>
              <Typography 
                variant='h8' 
                sx={{display:'flex',gap:'4px',mt:'8px',color:`${isLightMode?'#1E1E1E':'white'}`}}>
               <Typography>{admins?.firstName}</Typography>
                <Typography>{admins?.lastName}</Typography>
              </Typography>
              <Typography sx={style.adminPosition}>CEO</Typography>
         </Box>
         <Divider />
         {
           sideBarIconList.map((item,index)=>
            <IconButton 
              key={index}
              onClick={()=>{
               dispatch(setNavTitle(item.routeTo))
                navigate(`/${item.routeTo}`)
              }} 
              sx={[
                style.listIconContainer,
                {backgroundColor:`${item.routeTo===navTitle?'white':`${isLightMode?'#D9D9D9':'#1E1E1E'}`}`},
                {color:`${item.routeTo===navTitle?'#121212':`${isLightMode?'#121212':'white'}`}`}
                ]}>
              {item.icon}
              <Typography>{item.title}</Typography>
            </IconButton>
           )
         }


         <ListItem onClick={handleOpenAppointment} 
          sx={
            {
              marginTop:'10px',
              width:'100%',
              display:'flex',
              gap:'2px',
              cursor:'pointer',
              transition:'all 0.7s'
              }} >
              <ListItemIcon  sx={{marginLeft:'10px'}}>
                 <PlaylistAddCheckOutlinedIcon sx={{ color:'#1977FC'}}/> 
              </ListItemIcon>
              <ListItemText sx={[{marginLeft:'-25px'},handleTextModeDependentColor(isLightMode)]} primary="Appointment" />
              {appointmentCollapse ? 
                <ExpandLess sx={handleTextModeDependentColor(isLightMode)}/> : 
                <ExpandMore sx={handleTextModeDependentColor(isLightMode)}/>}
            </ListItem>
            <Collapse sx={[{marginLeft:'10%'},handleTextModeDependentColor(isLightMode)]} 
              in={appointmentCollapse} 
              timeout="auto" 
              unmountOnExit
            >
             <IconButton onClick={()=>navigate('/dashboard/appointment')}
                sx={{width:'80%',gap:'10px',borderRadius:'0px'}}>
              <PlaylistAddCheckOutlinedIcon sx={{ color:'#1977FC'}}/> 
                  <Typography sx={handleTextModeDependentColor(isLightMode)}>Appointment</Typography>
            </IconButton>
              <IconButton  
                 onClick={()=>navigate('/dashboard/consultant')}  
                 sx={{width:'80%',gap:'10px',borderRadius:'0px'}}>
              <PlaylistAddCheckOutlinedIcon sx={{ color:'#1977FC'}}/> 
                  <Typography sx={handleTextModeDependentColor(isLightMode)}>Consultant</Typography>
            </IconButton>
          </Collapse>


          <ListItem onClick={handleOpenQuestion} 
          sx={
            {
              marginTop:'10px',
              width:'100%',
              display:'flex',
              gap:'2px',
              cursor:'pointer',
              transition:'all 0.7s'
              }} >
              <ListItemIcon  sx={[{marginLeft:'10px'},]}>
                 <PlaylistAddCheckOutlinedIcon sx={{ color:'#1977FC'}}/> 
              </ListItemIcon>
              <ListItemText 
                sx={[{marginLeft:'-25px'},handleTextModeDependentColor(isLightMode)]} 
                primary="Question" 
              />
              {questionCollapse ? 
                <ExpandLess sx={handleTextModeDependentColor(isLightMode)}/> : 
                <ExpandMore sx={handleTextModeDependentColor(isLightMode)}/>
              }
            </ListItem>
            <Collapse sx={{marginLeft:'10%'}} in={questionCollapse} timeout="auto" unmountOnExit>
             <IconButton onClick={()=>navigate('/dashboard/question-Generator')} sx={{width:'80%',gap:'10px',borderRadius:'0px'}}>
              <PlaylistAddCheckOutlinedIcon sx={{ color:'#1977FC'}}/> 
                  <Typography sx={handleTextModeDependentColor(isLightMode)}>Generate</Typography>
            </IconButton>
             <IconButton onClick={()=>navigate('/dashboard/questionList')} sx={{width:'80%',gap:'10px',borderRadius:'0px'}}>
              <PlaylistAddCheckOutlinedIcon sx={{ color:'#1977FC'}}/> 
                  <Typography sx={handleTextModeDependentColor(isLightMode)}>Question</Typography>
            </IconButton>
              <IconButton  onClick={()=>navigate('/dashboard/answered')}  sx={{width:'80%',gap:'10px',borderRadius:'0px'}}>
              <PlaylistAddCheckOutlinedIcon sx={{ color:'#1977FC'}}/> 
                  <Typography sx={handleTextModeDependentColor(isLightMode)}>Answered</Typography>
            </IconButton>
          </Collapse>

          {/* <Paper sx={style.topHeaderContainer}>
               <CardMedia image={Logo} sx={{width:'50%',height:'90%'}}/>
          </Paper> */}
        
    </Drawer>
  )
}

const style ={
  drawerHeader:{
    width:'100%',
    height:'200px',
    display:'flex',
    flexDirection:'column', 
    alignItems:'center',
  },
  adminImageContainer:{
    width:'80px',
    height:'80px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'100%',
    backgroundColor:'#1977FC',
    marginTop:'20px',
    color:'white'
  },
  adminPosition:{
    fontSize:'14px',
    color:'#1977FC',
    fontWeight:'bold'
  },
  topHeaderContainer:{
    width:'70%',
    height:'60px',
    marginBottom:'10px',
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'15%',
    marginTop:'20px'
  },
  listIconContainer:{
    width:'100%',
    height:'40px',
    display:'flex',
    justifyContent:'start',
    alignItems:'center',
    gap:'8px',
    marginTop:'20px',
   borderRadius:'0px'
  },
  divider:{
    width:'100%',
    height:'1px',
    marginTop:'10px', 
    backgroundColor:'rgba(0, 0, 0, 0.277)',
 
  }
  
}

export default SideBar