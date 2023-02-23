import React, {useEffect, useState } from 'react'
import {Card, CardMedia, Drawer, IconButton, Typography} from '@mui/material'
import { Box } from '@mui/system'
import AdminImage from '../../assets/image/user.gif'
import { sideBarIconList } from '../utils/iconsList'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setNavTitle } from '../../redux/features/adminSlice'

const SideBar = ({isDrawerOpen,closeDrawer,drawerWidth}) => {
   
  const {navTitle}= useSelector(state=>state.admin)
  const navigate = useNavigate()
  const {isLightMode}= useSelector(state=>state.auth)
  const dispatch= useDispatch()
  console.log(navTitle);
  
  return (
    <Drawer
     open={{xs:!isDrawerOpen,md:isDrawerOpen}}
     onClose={closeDrawer}   
     variant='persistent' 
     sx={{
          width:{xs:!isDrawerOpen?200:0,md:drawerWidth},
          color:'white',
          "& .MuiDrawer-paper":{
            backgroundColor:`${isLightMode?'#D9D9D9':'#121212'}`,
            width:{xs:!isDrawerOpen?200:0,md:drawerWidth},
          }
         }}>
         <Box sx={style.drawerHeader}>
              <Box sx={style.topHeaderContainer}>
                <Typography sx={{color:'white',fontWeight:'bold'}}>Infinity</Typography>
              </Box>
              <Card sx={style.adminImageContainer}>
                <CardMedia sx={{width:'90%',height:'90%'}} image={AdminImage}/>
              </Card>
              <Typography sx={{mt:'8px',color:`${isLightMode?'#121212':'white'}`}}>Abdurehman Saeed</Typography>
              <Typography sx={style.adminPosition}>CEO</Typography>
         </Box>
         <div style={style.divider}/>
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
                {backgroundColor:`${item.routeTo===navTitle?'white':`${isLightMode?'#D9D9D9':'#121212'}`}`},
                {color:`${item.routeTo===navTitle?'#121212':`${isLightMode?'#121212':'white'}`}`}
                ]}>
              {item.icon}
              <Typography>{item.title}</Typography>
            </IconButton>
           )
         }
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
  },
  adminPosition:{
    fontSize:'14px',
    color:'#1977FC',
    fontWeight:'bold'
  },
  topHeaderContainer:{
    width:'100%',
    height:'60px',
    marginBottom:'10px',
    backgroundColor:'#1977FC',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
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