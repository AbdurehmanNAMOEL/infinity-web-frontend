import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFeedBack } from '../../redux/features/feedbackSlice'

const UserFeedBackCard = ({name,feedBackGroup,suggestion,id}) => {
    const {modeColor,isLightMode} = useSelector(state=>state.auth)
    const [checked,setChecked]= useState(false)
    const dispatch=useDispatch()

    const handleCheck=()=>{
       setChecked(prev=>!prev)
    }

  return (
    <Paper sx={[style.feedBackContainer,{border:isLightMode?'solid 1px #DFDFDF':'solid 1px #ACACAC'},{backgroundColor:modeColor}]}>
     <Box sx={[style.feedBackHeader,{color:isLightMode?'#1e1e1e':'white'}]}>
      <Box sx={{display:'flex',width:'60%',flexDirection:'column',gap:'4px'}}>
         <Typography sx={{fontWeight:'bolder',marginTop:'10px'}}>{name}</Typography>
         <Typography sx={{fontWeight:'bolder',fontSize:'12px'}}>{'0936970345'}</Typography>
       </Box>
       <Typography onClick={handleCheck} sx={{display:'flex', gap:'10px',color:isLightMode?'#1e1e1e':'white'}}>
        <label htmlFor='selected'>Seen</label>
        <input checked={checked} id='selected' type='checkbox'/>
      </Typography>  
     </Box>
     <Divider sx={{width:'100%',backgroundColor:isLightMode?'#DFDFDF':'#ACACAC'}}/>
      <Box sx={[style.feedBackBody,{color:isLightMode?'#1e1e1e':'white'}]}>
      <Typography>{`About:  ${feedBackGroup}`}</Typography>
      <Typography sx={{
        wordWrap:'break-word',
        whiteSpace:'pre-wrap',
        fontSize:'12px',
        width:'100%',
        overflowX:'hidden'
      }}>{`Comment : ${suggestion}`}</Typography>
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
    feedBackContainer:{
        width:'100%',
        height:'200px',
        display:'flex',
        flexDirection:'column',
        marginBottom:'20px',
        justifyContentL:'center',
        alignItems:'center'
    },
    feedBackHeader:{
      width:'100%',
      height:'50px',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
    },
    feedBackBody:{
        width:'90%',
        height:'100px',
        marginTop:'20px',
        display:'flex',
        flexDirection:'column',
        gap:'10px'
    }
}
export default UserFeedBackCard