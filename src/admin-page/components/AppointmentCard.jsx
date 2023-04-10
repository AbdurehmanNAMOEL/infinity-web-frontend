import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFeedBack } from '../../redux/features/feedbackSlice'

const AppointmentCard= ({name,id,appointmentDate,description}) => {
    const {modeColor,isLightMode} = useSelector(state=>state.auth)
    const dispatch=useDispatch()
     let date=new Date(appointmentDate);
    let newDateValue = date.toString().split(' ')
    let appointmentTime=`${newDateValue[0]} ${newDateValue[1]} ${newDateValue[2]} ${newDateValue[3]}` 
 
  return (
    <Paper sx={[style.appointmentContainer,{border:isLightMode?'solid 1px #DFDFDF':'solid 1px #ACACAC'},{backgroundColor:modeColor}]}>
     <Box sx={[style.appointmentHeader,{color:isLightMode?'#1e1e1e':'white'}]}>
      <Box sx={{display:'flex',width:'60%',flexDirection:'column',gap:'4px'}}>
         <Typography sx={{fontWeight:'bolder',marginTop:'10px'}}>{name}</Typography>
         <Typography sx={{fontWeight:'bolder',fontSize:'12px'}}>{'0936970345'}</Typography>
       </Box>
       <Typography sx={{display:'flex', gap:'10px',color:isLightMode?'#1e1e1e':'white'}}>
        <label htmlFor='selected'>Seen</label>
        <input checked id='selected' type='checkbox'/>
      </Typography>  
     </Box>
     <Divider sx={{width:'100%',backgroundColor:isLightMode?'#DFDFDF':'#ACACAC'}}/>
      <Box sx={[style.appointmentBody,{color:isLightMode?'#1e1e1e':'white'}]}>
      <Typography>{`Date:  ${appointmentTime}`}</Typography>
      <Typography sx={{
        wordWrap:'break-word',
        whiteSpace:'pre-wrap',
        fontSize:'12px',
        width:'100%',
        overflowX:'hidden'
      }}>{`About : ${description}`}</Typography>
     </Box>
     <Box sx={{
      width:'100%',
      height:'50px',
      display:'flex',
      justifyContent:'flex-end',
      alignItems:'center'}}>
       <Typography 
          onClick={()=>dispatch(deleteFeedBack({id}))} 
          sx={{color:'red',marginRight:'10px',cursor:'pointer'}}>Delete</Typography>
      
     </Box>
    </Paper>
  )
}

const style={
    appointmentContainer:{
        width:'100%',
        height:'200px',
        display:'flex',
        flexDirection:'column',
        marginBottom:'20px',
        justifyContentL:'center',
        alignItems:'center'
    },
    appointmentHeader:{
      width:'100%',
      height:'50px',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
    },
    appointmentBody:{
        width:'90%',
        height:'100px',
        marginTop:'20px',
        display:'flex',
        flexDirection:'column',
        gap:'10px'
    }
}
export default AppointmentCard