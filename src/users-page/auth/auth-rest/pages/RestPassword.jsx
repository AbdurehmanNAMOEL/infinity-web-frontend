import { Box, CardMedia, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../../components/InputField'
import companyLogoImage from '../../../../assets/image/logo.png'
import { handleResponsiveness } from '../../styles/loginStyle'
import { useNavigate } from 'react-router-dom'

const RestPassword = () => {
  const navigate = useNavigate()
  return (
  <Box sx={style.restPasswordContainer}>
       <Box sx={style.companyLogoContainer}>
        <CardMedia image={companyLogoImage} sx={style.companyLogoImage}/>
       </Box>
      
      <Paper sx={style.restPasswordCard}>
       <Typography sx={{color:'#1A6CE8',fontWeight:'bold'}} variant='h6'>Rest Password</Typography>
           <InputField
             inputLabel={'Enter new password'}
             type='password'
           />
            <InputField
             inputLabel={'Confirm new password'}
             type='password'
           />
           <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <IconButton onClick={()=>navigate('/login')} sx={style.btnContainer}><p>Rest</p></IconButton>
           </Box>
      </Paper>
    </Box>
  )
}

const style={
  restPasswordContainer:{
    width:'100%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    gap:'20px'
  },
  restPasswordCard:{
    width:handleResponsiveness('90%','400px'),
    height:'300px',
    borderRadius:'5px',
    border:'solid 1px rgba(0,0,0,0.4)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'50px'
  },

  companyLogoContainer:{
   width:'120px',
   height:'60px'
  },
  companyLogoImage:{
    width:'100%',
    height:'100%'
  },
  btnContainer:{
    width:'76%',
    height:'40px',
    borderRadius:'0px',
    marginTop:'0px',
    backgroundColor:'#1A6CE8',
     '&:hover':{
        backgroundColor:'#1A6CE8'           
      },

    fontSize:'16px',
    color:'white',
    display:'flex',
    cursor:'pointer',
    marginLeft:'-4%'  
    
  }
}

export default RestPassword