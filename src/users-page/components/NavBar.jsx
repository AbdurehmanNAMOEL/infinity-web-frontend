import {IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Header } from '../utils/genericComponents'
import { navList } from '../utils/navlist'
import MenuBar from './MenuBar'
import LogoImage from '../../assets/image/logo.png'
import MediaCard from './MediaCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, setMode } from '../../redux/features/authSlice'
import Mode from '../../shared/Components/Mode'
import MenuPopupState from '../../shared/Components/MenuPopState'
const NavBar = ({isScrolling}) => {
  const navigate=useNavigate()
  const [navTitle,setNavTitle]= useState('Home')
  let {isLoggedIn,isLightMode,modeColor} = useSelector(state=>state.auth)
  let {isAdminLoggedIn}= useSelector(state=>state.admin)
  const dispatch = useDispatch()
  const [newNavList,setNewNavList]=useState()

    const handleNavigation=(title,navigateTo)=>{
       setNavTitle(title)
       navigate(`${navigateTo}`)
    }

    // handle this on the redux

    
  useEffect(()=>{
    
    if(!isAdminLoggedIn){
       setNewNavList(navList.filter(item=>item.title!=='DashBoard'))
       console.log(navList,isAdminLoggedIn)
    }else {
      setNewNavList(navList)
    }
   
    },[isAdminLoggedIn])
    
 
  return (
    <Box 
      sx={{
        width:'100%',
        zIndex:3000,
        position:'fixed',
        backgroundColor:modeColor,
        boxShadow:`${isScrolling?'2px 2px 10px 2px rgba(0,0,0,0.5)':''}`
      }}
      >
     <Box sx={{width:'100%',display:{xs:'none',md:'flex'}}}>   
     <Header>
       <Box onClick={()=>navigate('/')} sx={{marginLeft:'40px',marginTop:'5px'}}>
        <MediaCard
          mediaWidth={'120px'}
          mediaHeight={'60px'}
          imgUrl={LogoImage}
         />
         </Box>
        <Box sx={style.navRightItemContainer}>
          {newNavList?.map((item,index)=>
            <IconButton
               onClick={()=>handleNavigation(item.title,item.to)}
               sx={[style.navLists,{color:`${isLightMode?"#1e1e1e":'white'}`}]} 
               key={index}>{item.title}
            </IconButton>
          )}
          <Mode isLightMode={isLightMode} 
           handleDispatch={()=>dispatch(setMode())}/>
          {(!isLoggedIn)?<IconButton 
            onClick={()=>navigate('/login')} 
            sx={style.logoInIcon}>Login</IconButton>:
            <IconButton  
            sx={style.logoInIcon}>
              <MenuPopupState handleLogOut={()=>dispatch(logOut())}/>
            </IconButton>
          }

          
        </Box>
    </Header>
    </Box>
    <Box sx={{display:{md:'none',xs:'flex'}}}>
     <MenuBar 
     newNavList={newNavList} 
     dispatch={dispatch}
     handleNavigation={handleNavigation}/>
    </Box>
    </Box>
  )
}

const style = {
    logoContainer:{
        width:'200px',
        height:'50px',
        marginLeft:'20px',
        boxShadow:'none',
    },
    navRightItemContainer:{
        width:'55%',
        height:'50px',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        gap:'20px',
        marginLeft:'-30px'
    },
     logoImage:{
      width:'50%',
      height:'100%'
    },
     navLists:{
      fontSize:'14px',
      borderRadius:'0',
      width:'80px',
      height:'100%',
      ml:'5px',
     },
    logoInIcon: {
      fontSize:'14px',
      borderRadius:'5px',
      height:'40px',
      width:'120px',
      backgroundColor:'#1A6CE8',
      color:'white',
      fontWeight:'bold',
      marginRight:'60px',
      '&:hover':{
        backgroundColor:'#1A6CE8'           
      },
      zIndex:5000       
     }
}
export default NavBar