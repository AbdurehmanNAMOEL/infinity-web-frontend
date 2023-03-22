import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFeedBack } from '../../redux/features/adminSlice'

const UserFeedBackCard = ({name,feedBackGroup,suggestion,id}) => {
    const {modeColor,isLightMode} = useSelector(state=>state.auth)
    const dispatch=useDispatch()
  return (
    <Paper sx={[style.feedBackContainer,{border:isLightMode?'solid 1px #DFDFDF':'solid 1px #ACACAC'},{backgroundColor:modeColor}]}>
     <Box sx={[style.feedBackHeader,{color:isLightMode?'#1e1e1e':'white'}]}>
      <Typography>{name}</Typography>
      <Typography>{feedBackGroup}</Typography>
     </Box>
     <Divider sx={{width:'100%',backgroundColor:isLightMode?'#DFDFDF':'#ACACAC'}}/>
      <Box sx={[style.feedBackBody,{color:isLightMode?'#1e1e1e':'white'}]}>
      <p style={{ wordWrap:' break-word',whiteSpace:'pre-wrap',fontSize:'12px',width:'100%',overflowX:'hidden'}}>{suggestion}</p>
     </Box>
     <Box sx={{width:'100%',height:'50px',display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
       <Typography 
          onClick={()=>dispatch(deleteFeedBack({id}))} 
          sx={{color:'red',marginRight:'10px',cursor:'pointer'}}>Delete</Typography>
     </Box>
    </Paper>
  )
}

const style={
    feedBackContainer:{
        width:'300px',
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
      alignItems:'center'
    },
    feedBackBody:{
        width:'90%',
        height:'100px',
        marginTop:'20px',
      
    }
}
export default UserFeedBackCard